import type { NextConfig } from "next";

// Old "<category>-north-vancouver" URLs → flat "/north-vancouver/<slug>" structure.
// Permanent redirects so existing search rankings and backlinks keep working.
const NORTH_VANCOUVER_REDIRECTS: Array<{ source: string; destination: string }> = [
  // Category index pages
  { source: "/carpet-cleaning-north-vancouver", destination: "/north-vancouver/carpet-cleaning" },
  { source: "/cleaning-services-north-vancouver", destination: "/north-vancouver/house-cleaning" },
  { source: "/commercial-cleaning-north-vancouver", destination: "/north-vancouver/commercial-cleaning" },
  { source: "/gutter-cleaning-north-vancouver", destination: "/north-vancouver/gutter-cleaning" },
  { source: "/pressure-washing-north-vancouver", destination: "/north-vancouver/pressure-washing" },
  { source: "/window-cleaning-north-vancouver", destination: "/north-vancouver/window-cleaning" },
  // Carpet cleaning subpages
  { source: "/carpet-cleaning-north-vancouver/area-rug-cleaning", destination: "/north-vancouver/area-rug-cleaning" },
  { source: "/carpet-cleaning-north-vancouver/carpet-stain-removal", destination: "/north-vancouver/carpet-stain-removal" },
  { source: "/carpet-cleaning-north-vancouver/carpet-steam-cleaning", destination: "/north-vancouver/carpet-steam-cleaning" },
  { source: "/carpet-cleaning-north-vancouver/drapes-curtains-cleaning", destination: "/north-vancouver/drapes-curtains-cleaning" },
  { source: "/carpet-cleaning-north-vancouver/upholstery-cleaning", destination: "/north-vancouver/upholstery-cleaning" },
  // Cleaning services (residential) subpages
  { source: "/cleaning-services-north-vancouver/deep-cleaning", destination: "/north-vancouver/deep-cleaning" },
  { source: "/cleaning-services-north-vancouver/move-in-cleaning", destination: "/north-vancouver/move-in-move-out-cleaning" },
  { source: "/cleaning-services-north-vancouver/move-out-cleaning", destination: "/north-vancouver/move-in-move-out-cleaning" },
  { source: "/cleaning-services-north-vancouver/post-construction-cleaning", destination: "/north-vancouver/post-construction-cleaning" },
  { source: "/cleaning-services-north-vancouver/recurring-cleaning", destination: "/north-vancouver/house-cleaning" },
  { source: "/cleaning-services-north-vancouver/standard-cleaning", destination: "/north-vancouver/house-cleaning" },
  { source: "/cleaning-services-north-vancouver/vacation-rental-cleaning", destination: "/north-vancouver/vacation-rental-cleaning" },
  // Commercial cleaning subpages
  { source: "/commercial-cleaning-north-vancouver/church-cleaning", destination: "/north-vancouver/church-cleaning" },
  { source: "/commercial-cleaning-north-vancouver/commercial-kitchen-cleaning", destination: "/north-vancouver/commercial-kitchen-cleaning" },
  { source: "/commercial-cleaning-north-vancouver/gym-cleaning", destination: "/north-vancouver/gym-cleaning" },
  { source: "/commercial-cleaning-north-vancouver/office-cleaning", destination: "/north-vancouver/office-cleaning" },
  { source: "/commercial-cleaning-north-vancouver/school-cleaning", destination: "/north-vancouver/school-cleaning" },
  { source: "/commercial-cleaning-north-vancouver/strata-cleaning", destination: "/north-vancouver/strata-cleaning" },
  // Pressure washing subpages
  { source: "/pressure-washing-north-vancouver/deck-patio-cleaning", destination: "/north-vancouver/deck-patio-cleaning" },
  { source: "/pressure-washing-north-vancouver/driveway-pressure-washing", destination: "/north-vancouver/driveway-pressure-washing" },
  { source: "/pressure-washing-north-vancouver/fence-washing", destination: "/north-vancouver/fence-washing" },
  { source: "/pressure-washing-north-vancouver/house-washing", destination: "/north-vancouver/house-washing" },
  // Window cleaning subpages
  { source: "/window-cleaning-north-vancouver/commercial-window-cleaning", destination: "/north-vancouver/commercial-window-cleaning" },
  { source: "/window-cleaning-north-vancouver/post-construction-window-cleaning", destination: "/north-vancouver/post-construction-window-cleaning" },
  { source: "/window-cleaning-north-vancouver/residential-window-cleaning", destination: "/north-vancouver/residential-window-cleaning" },
  { source: "/window-cleaning-north-vancouver/window-screen-cleaning", destination: "/north-vancouver/window-screen-cleaning" },
];

// Duplicate/legacy top-level pages consolidated into their North Vancouver equivalents.
const LEGACY_PAGE_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/north-vancouver/cleaning-services", destination: "/north-vancouver/house-cleaning" },
  { source: "/commercial-cleaning", destination: "/north-vancouver/commercial-cleaning" },
  { source: "/strata-cleaning", destination: "/north-vancouver/strata-cleaning" },
  { source: "/residential-cleaning", destination: "/north-vancouver/house-cleaning" },
];

// Phase 1-3 site restructure: standard/recurring cleaning absorbed into house-cleaning,
// move-in/move-out cleaning merged into one page.
const PHASE_1_3_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/north-vancouver/standard-cleaning", destination: "/north-vancouver/house-cleaning" },
  { source: "/north-vancouver/recurring-cleaning", destination: "/north-vancouver/house-cleaning" },
  { source: "/north-vancouver/move-in-cleaning", destination: "/north-vancouver/move-in-move-out-cleaning" },
  { source: "/north-vancouver/move-out-cleaning", destination: "/north-vancouver/move-in-move-out-cleaning" },
];

// Phase 6b-9: carpet, window, and pressure washing sub-pages merged into their
// parent category page as on-page anchor sections.
const PHASE_6B_9_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/north-vancouver/area-rug-cleaning", destination: "/north-vancouver/carpet-cleaning#area-rug-cleaning" },
  { source: "/north-vancouver/carpet-stain-removal", destination: "/north-vancouver/carpet-cleaning#carpet-stain-removal" },
  { source: "/north-vancouver/carpet-steam-cleaning", destination: "/north-vancouver/carpet-cleaning#carpet-steam-cleaning" },
  { source: "/north-vancouver/commercial-window-cleaning", destination: "/north-vancouver/window-cleaning#commercial-window-cleaning" },
  { source: "/north-vancouver/residential-window-cleaning", destination: "/north-vancouver/window-cleaning#residential-window-cleaning" },
  { source: "/north-vancouver/window-screen-cleaning", destination: "/north-vancouver/window-cleaning#window-screen-cleaning" },
  { source: "/north-vancouver/deck-patio-cleaning", destination: "/north-vancouver/pressure-washing#deck-patio-cleaning" },
  { source: "/north-vancouver/driveway-pressure-washing", destination: "/north-vancouver/pressure-washing#driveway-pressure-washing" },
  { source: "/north-vancouver/fence-washing", destination: "/north-vancouver/pressure-washing#fence-washing" },
  { source: "/north-vancouver/house-washing", destination: "/north-vancouver/pressure-washing#house-washing" },
];

// Phase 13b-17: Commercial Kitchen Cleaning renamed to Restaurant Cleaning,
// and Post-Construction Window Cleaning merged into Post-Construction Cleaning.
const PHASE_13B_17_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: "/north-vancouver/commercial-kitchen-cleaning", destination: "/north-vancouver/restaurant-cleaning" },
  { source: "/north-vancouver/post-construction-window-cleaning", destination: "/north-vancouver/post-construction-cleaning#post-construction-window-cleaning" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      ...NORTH_VANCOUVER_REDIRECTS,
      ...LEGACY_PAGE_REDIRECTS,
      ...PHASE_1_3_REDIRECTS,
      ...PHASE_6B_9_REDIRECTS,
      ...PHASE_13B_17_REDIRECTS,
    ].map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
