import {
  ShieldCheck,
  Leaf,
  Heart,
  Clock,
  HardHat,
  ClipboardCheck,
  Percent,
  Check,
  Sparkles,
  Award,
  ThumbsUp,
  Star,
  CalendarCheck,
  BadgeCheck,
  Users,
  DollarSign,
  type LucideIcon,
} from "lucide-react";

/**
 * Named icon set editors can pick from for "Every Mint Cleaning Includes"
 * list items. Keys are stored as plain strings on the document so adding a
 * new one here never requires a migration.
 */
export const ICON_REGISTRY: Record<string, LucideIcon> = {
  shieldCheck: ShieldCheck,
  leaf: Leaf,
  heart: Heart,
  clock: Clock,
  hardHat: HardHat,
  clipboardCheck: ClipboardCheck,
  percent: Percent,
  check: Check,
  sparkles: Sparkles,
  award: Award,
  thumbsUp: ThumbsUp,
  star: Star,
  calendarCheck: CalendarCheck,
  badgeCheck: BadgeCheck,
  users: Users,
  dollarSign: DollarSign,
};

export const ICON_OPTIONS = Object.keys(ICON_REGISTRY) as Array<
  keyof typeof ICON_REGISTRY
>;

export function getIcon(name: string | undefined): LucideIcon {
  return (name && ICON_REGISTRY[name]) || Check;
}
