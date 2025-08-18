import { baskervville } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

type Item = { src: string; alt: string; label: string };

const items: Item[] = [
  { src: "/premium.webp", alt: "Premium", label: "PREMIUM" },
  { src: "/classic.webp", alt: "Classic", label: "CLASSIC" },
  { src: "/social.webp", alt: "Social", label: "SOCIAL" },
];

const Variety = () => {
  return (
    // mobile: stacked, no gaps; md+: three columns
    <div className="grid grid-cols-1 md:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.src}
          className="group relative w-full overflow-hidden h-[42vw] min-h-[180px] md:h-[280px]"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          {/* ALWAYS-ON overlay for consistent shade */}
          {/* <div className="absolute inset-0 bg-black/50 md:bg-black/45" /> */}
          <div className="pointer-events-none absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/0" />

          <figcaption className="absolute inset-0 flex items-center justify-center">
            <div className="w-11/12 text-center text-white">
              <div
                className={`${baskervville.className} tracking-[0.12em] text-[clamp(1rem,1.8vw,1.5rem)]`}
              >
                {item.label}
              </div>
              <div className="mx-auto mt-2 h-px w-[clamp(2.5rem,5vw,4rem)] bg-white/70" />
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Variety;
