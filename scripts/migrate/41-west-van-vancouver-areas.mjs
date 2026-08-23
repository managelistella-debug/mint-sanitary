import { replaceDoc } from "./lib.mjs";

/**
 * Stub Area docs for West Vancouver and Vancouver — no sections, no page of
 * their own via the CMS (app/west-vancouver/page.tsx and app/vancouver/page.tsx
 * are real static folders and, per Next's literal-wins-over-dynamic routing,
 * always keep serving those bare URLs regardless of these docs).
 *
 * They exist purely so an `areas` section can reference them: house-cleaning's
 * original page showed West Vancouver and Vancouver as dimmed, non-clickable
 * bubbles (no live area-service page for either), and the CMS areas section
 * can only render a bubble — dimmed or live — for a real Area doc. Without
 * these, the bubbles would just vanish instead of rendering dimmed, and every
 * OTHER migrated page's Areas section has had the same silent gap since these
 * two docs never existed.
 */
await replaceDoc("area", "west-vancouver", {
  title: "West Vancouver",
  name: "West Vancouver",
  published: true,
  sections: [],
});

await replaceDoc("area", "vancouver", {
  title: "Vancouver",
  name: "Vancouver",
  published: true,
  sections: [],
});

console.log("✓ West Vancouver / Vancouver area stubs ready");
