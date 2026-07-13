// Shared instant-quote pricing engine — used by the InstantQuoteForm client
// component and the /api/instant-quote* routes so the price shown to the
// customer always matches the price recomputed server-side for the email.

export type CleanType = "standard" | "deep";
export type HomeType = "detached" | "townhouse" | "condo";

export interface SqftTier {
  id: string;
  label: string;
  /** Upper bound of the tier in sq ft. `null` = open-ended (6000+, call for quote). */
  maxSqft: number | null;
  standardPrice: number | null;
  deepPrice: number | null;
}

// Rates as provided by Mint Sanitary. Tiers are billed on a "round up to the
// next listed bracket" basis — e.g. 650 sq ft bills at the 700–800 rate.
export const SQFT_TIERS: SqftTier[] = [
  { id: "500-600", label: "500–600 sq ft", maxSqft: 600, standardPrice: 220, deepPrice: 390 },
  { id: "700-800", label: "700–800 sq ft", maxSqft: 800, standardPrice: 250, deepPrice: 480 },
  { id: "900-1000", label: "900–1000 sq ft", maxSqft: 1000, standardPrice: 320, deepPrice: 580 },
  { id: "1200-1500", label: "1200–1500 sq ft", maxSqft: 1500, standardPrice: 390, deepPrice: 620 },
  { id: "2000-2500", label: "2000–2500 sq ft", maxSqft: 2500, standardPrice: 460, deepPrice: 650 },
  { id: "2600-3000", label: "2600–3000 sq ft", maxSqft: 3000, standardPrice: 550, deepPrice: 780 },
  { id: "4000-5000", label: "4000–5000 sq ft", maxSqft: 5000, standardPrice: 620, deepPrice: 850 },
  { id: "6000+", label: "6000+ sq ft", maxSqft: null, standardPrice: null, deepPrice: null },
];

export const SQFT_MIN = 400;
export const SQFT_MAX = 6000; // slider max represents "6000+"
export const SQFT_STEP = 50;
export const SQFT_DEFAULT = 1000;

export function getSqftTier(sqft: number): SqftTier {
  for (const tier of SQFT_TIERS) {
    if (tier.maxSqft !== null && sqft <= tier.maxSqft) return tier;
  }
  return SQFT_TIERS[SQFT_TIERS.length - 1];
}

export type AddonUnit = "flat" | "room" | "window" | "balcony" | "bed" | "oven" | "fridge" | "cabinet" | "inquire";

export interface AddonDef {
  id: string;
  label: string;
  /** Price per unit. `null` means "please inquire" — no fixed price. */
  price: number | null;
  unit: AddonUnit;
  hasQty: boolean;
  unitLabel?: string;
  note?: string;
  /** Short prompt shown above the qty stepper once this add-on is selected. */
  qtyQuestion?: string;
  /** Shown to the customer once selected, for add-ons priced on request. */
  followUpNote?: string;
}

export const ADDONS: AddonDef[] = [
  { id: "oven", label: "Oven (inside)", price: 30, unit: "oven", hasQty: true, unitLabel: "oven", qtyQuestion: "How many ovens need cleaning?" },
  { id: "fridge", label: "Fridge (inside)", price: 30, unit: "fridge", hasQty: true, unitLabel: "fridge", qtyQuestion: "How many fridges need cleaning?" },
  { id: "windows", label: "Windows & frames (inside)", price: 30, unit: "window", hasQty: true, unitLabel: "window", qtyQuestion: "How many windows will we need to clean?" },
  { id: "cabinets", label: "Cabinets and closets (inside)", price: 45, unit: "cabinet", hasQty: true, unitLabel: "cabinet", qtyQuestion: "How many cabinets and closets need cleaning?" },
  { id: "wall-marks", label: "Marks on walls and baseboards", price: 25, unit: "room", hasQty: true, unitLabel: "room", qtyQuestion: "How many rooms have marks to remove?" },
  { id: "balconies", label: "Balconies swept", price: 30, unit: "balcony", hasQty: true, unitLabel: "balcony", qtyQuestion: "How many balconies need sweeping?" },
  { id: "blinds", label: "Blinds washed", price: 30, unit: "room", hasQty: true, unitLabel: "room", qtyQuestion: "How many rooms have blinds to wash?" },
  { id: "walls", label: "Walls washed", price: 50, unit: "room", hasQty: true, unitLabel: "room", note: "Base price covers 1 room", qtyQuestion: "How many rooms need walls washed?" },
  { id: "dishes", label: "Dishes washed", price: 15, unit: "flat", hasQty: false },
  { id: "linen", label: "Linen & Bed Change", price: 15, unit: "bed", hasQty: true, unitLabel: "bed", qtyQuestion: "How many beds need linen changed?" },
  { id: "towels", label: "Towels Changed", price: 15, unit: "room", hasQty: true, unitLabel: "room", qtyQuestion: "How many bathrooms need towels changed?" },
  { id: "inspection", label: "Inspection for damages, toiletries & supplies", price: 25, unit: "flat", hasQty: false },
  { id: "carpet", label: "Carpet cleaning", price: 60, unit: "room", hasQty: true, unitLabel: "room", qtyQuestion: "How many rooms need carpet cleaning?" },
  {
    id: "laundry",
    label: "Laundry options",
    price: null,
    unit: "inquire",
    hasQty: false,
    note: "Please inquire",
    followUpNote: "We'll follow up with you directly to go over laundry pricing and options before your visit.",
  },
];

export interface SelectedAddon {
  id: string;
  qty: number;
}

export interface AddonLine {
  id: string;
  label: string;
  unitPrice: number;
  qty: number;
  lineTotal: number;
}

export interface QuoteBreakdown {
  tier: SqftTier;
  cleanType: CleanType;
  sqft: number;
  basePrice: number | null;
  addonLines: AddonLine[];
  addonsTotal: number;
  inquireAddons: string[];
  inquireFollowUps: string[];
  /** Grand total. `null` means the property is out of range and needs a custom quote. */
  total: number | null;
}

export function calculateQuote(
  sqft: number,
  cleanType: CleanType,
  selected: SelectedAddon[]
): QuoteBreakdown {
  const tier = getSqftTier(sqft);
  const basePrice = cleanType === "standard" ? tier.standardPrice : tier.deepPrice;

  const addonLines: AddonLine[] = [];
  const inquireAddons: string[] = [];
  const inquireFollowUps: string[] = [];
  let addonsTotal = 0;

  for (const sel of selected) {
    const def = ADDONS.find((a) => a.id === sel.id);
    if (!def) continue;
    if (def.price == null) {
      inquireAddons.push(def.label);
      if (def.followUpNote) inquireFollowUps.push(def.followUpNote);
      continue;
    }
    const qty = def.hasQty ? Math.max(1, sel.qty) : 1;
    const lineTotal = def.price * qty;
    addonLines.push({ id: def.id, label: def.label, unitPrice: def.price, qty, lineTotal });
    addonsTotal += lineTotal;
  }

  const total = basePrice != null ? basePrice + addonsTotal : null;

  return { tier, cleanType, sqft, basePrice, addonLines, addonsTotal, inquireAddons, inquireFollowUps, total };
}

export const HOME_TYPE_LABELS: Record<HomeType, string> = {
  detached: "Detached House",
  townhouse: "Townhouse",
  condo: "Condo",
};
