// Scrolling banner — matches Figma node 15:375
// Dark navy bg, uppercase white text, diamond bullet separators, infinite seamless loop

const items = [
  "STRATA CLEANING",
  "COMMERCIAL CLEANING",
  "RESIDENTIAL CLEANING",
  "METRO VANCOUVER",
];

// 2× duplicates — first-half width ≈ 8 items × 270 px = 2 160 px, exceeds any viewport.
// translateX(-50%) snaps back seamlessly. Total 16 items in DOM.
const track = [...items, ...items]; // 8 items

function Diamond() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path d="M9 0L18 9L9 18L0 9L9 0Z" />
    </svg>
  );
}

export default function Ticker() {
  return (
    <div className="bg-[#253862] overflow-hidden py-[34px]">
      {/*
        Total rendered width ≈ 16 items × ~270 px = ~4 320 px.
        translateX(-50%) scrolls 2 160 px.  At 35 s → ~62 px/s — comfortable pace.
      */}
      <div
        className="animate-ticker flex items-center gap-[27px] whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-[27px] shrink-0">
            <Diamond />
            <span className="font-body font-extrabold text-[24px] text-white tracking-[0.96px] uppercase leading-none">
              {item}
            </span>
          </span>
        ))}
        {/* Exact duplicate — allows translateX(-50%) to loop seamlessly */}
        {track.map((item, i) => (
          <span key={`dup-${i}`} className="inline-flex items-center gap-[27px] shrink-0">
            <Diamond />
            <span className="font-body font-extrabold text-[24px] text-white tracking-[0.96px] uppercase leading-none">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
