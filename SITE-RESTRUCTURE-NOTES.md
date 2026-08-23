# Site Restructure — Open Items

Running list of things flagged during the ongoing site restructure (Phases 1-9+) that need Derek's input or follow-up. Not a full changelog — just what's unresolved.

## Needs a decision / follow-up

- **Drapes & curtains fabric-type cards have no photos.** `/services/drapes-curtains-cleaning` and `/north-vancouver/drapes-curtains-cleaning` — the "Fabric Types We Clean" grid (Silk, Velvet, Linen, Synthetic, Blackout, Lined, Specialty — 7 cards) has no matching photography. Only one generic drapes photo exists site-wide (`drapes-curtains-cleaning-north-vancouver.webp`), used once as the general page's hero instead. Left as text-only cards. Would need real photography per fabric type to add images there. *(Flagged: Phase 4-5-6a batch)*

## Decisions made (using a stand-in / workaround, not ideal long-term)

- **Upholstery furniture-type cards use 2 stand-in photos for 3 of 4 cards.** `/services/upholstery-cleaning` and `/north-vancouver/upholstery-cleaning` — only `/upholstery-cleaning-north-vancouver-sofa.jpg` is a real upholstery-specific photo (used for Sofas & Sectionals). Armchairs & Recliners and Dining & Office Chairs both reuse `/eco-friendly-cleaning-products-north-vancouver.jpg`; Ottomans/Headboards reuses `/mint-sanitary-team-north-vancouver.jpg`. These are real, on-brand images but not furniture-specific — dedicated photography for armchairs, dining chairs, and ottomans would look better. *(Decided: Phase 6b-9 batch, per content doc's recommended default)*

## Decisions made (using a stand-in / workaround, not ideal long-term)

- **Industrial Cleaning pages use a generic commercial photo as a placeholder hero.** `/services/industrial-cleaning` and `/north-vancouver/industrial-cleaning` — the content doc's implementation notes said a specific placeholder filename would be given "below," but no filename actually appeared anywhere in the compiled content doc. No dedicated industrial/warehouse photography exists in `public/`, so both pages reuse `/commercial-janitorial-cleaning-north-vancouver.jpg` (the same real, already-in-use photo that's the NV Commercial Cleaning hero) as a stand-in hero image until real industrial photos are shot. *(Decided: Phase 13b-17 batch)*

## Resolved

- **Commercial cleaning NV hourly rate removed.** `/north-vancouver/commercial-cleaning` FAQ answer for "How much does commercial cleaning cost" previously stated "$30 to $35 per hour or $200 to $1,000+ per month." Per the standing no-hourly-rate rule, dropped the hourly figure entirely and kept only the monthly range, deferring detail to `/rates`. Same fix landed on the new general `/services/commercial-cleaning` page from the start. *(Phase 10-11-12-13a batch)*

- **Church cleaning hourly rate removed.** `/north-vancouver/church-cleaning` previously had a "Hourly Rates: $25 to $75/hour" pricing tier alongside the monthly tiers. Removed entirely on rewrite — page now shows only the three real monthly tiers ($200–$400, $400–$800, $800–$1,500+), matching the new general `/services/church-cleaning` page. *(Phase 10-11-12-13a batch)*

- **Church general page missing internal cross-links.** The content doc's body copy for `/services/church-cleaning` didn't actually contain the 4 North Vancouver cross-links (Commercial/Office/School/Church-NV) listed in its own "Internal links" summary line. Added a short "Serving Congregations Across Greater Vancouver" closing section with those links rather than silently dropping them, since the doc's internal-links line is treated as authoritative intent even when the prose excerpt didn't include them inline. *(Phase 10-11-12-13a batch)*

- **NV Post-Construction Cleaning page missing internal cross-links.** Same pattern as the Church general page above — the content doc's "Internal Links Used" list for `/north-vancouver/post-construction-cleaning` named carpet cleaning, move-in/move-out cleaning, and window cleaning (all North Vancouver pages) as links that should appear, but none were actually present in the compiled body copy. Added one sentence linking to all three in the Service Areas section rather than dropping them silently. *(Phase 13b-17 batch)*

- **Commercial Kitchen Cleaning renamed to Restaurant Cleaning — cross-file link cleanup.** The rename (`/north-vancouver/commercial-kitchen-cleaning` → `/north-vancouver/restaurant-cleaning`) required updating 3 internal references that would otherwise have pointed at the old, now-redirected URL: the "Post-Construction Window Cleaning" card on `WindowCleaningCategoryPageClient.tsx` (updated to the merged anchor URL), and the "Commercial/Restaurant Kitchen Cleaning" card on both `services/commercial-cleaning/page.tsx` (retargeted to the new general `/services/restaurant-cleaning` page) and `north-vancouver/commercial-cleaning/CommercialCleaningCategoryPageClient.tsx` (retargeted to `/north-vancouver/restaurant-cleaning/`). Both old routes still 301/308-redirect correctly for any external or cached links. *(Phase 13b-17 batch)*

- **Pressure washing FAQ count mismatch.** The Phase 6b-9 prompt said the North Vancouver pressure washing page should get "24 expanded FAQs," but the actual content doc's "Expanded FAQ" section only lists 20. Used the real 20 from the doc rather than inventing 4 more to hit the stated count — content doc is the source of truth, not the prompt's summary number. *(Phase 6b-9 batch)*

- **Window Cleaning image filenames** — the content doc's general `/services/window-cleaning` draft and the North Vancouver content-update spec used two different filename sets for Residential/Commercial/Screen cards. Checked the live `WindowCleaningCategoryPageClient.tsx` `services` array (source of truth) and confirmed `/window-cleaning-residential-north-vancouver.webp`, `/window-cleaning-commercial-north-vancouver.webp`, and `/window-cleaning-screen-north-vancouver.webp` are the real files — used those on both the NV page (unchanged) and the new general `/services/window-cleaning` page, not the general draft's filenames. *(Phase 6b-9 batch)*
