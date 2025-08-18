import { baskervville } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative grid min-h-[90svh] sm:min-h-screen place-items-center bg-center bg-cover"
      style={{ backgroundImage: "url('/club.webp')" }}
    >
      {/* overlay: subtle gradient so text is readable on mobile */}

      {/* <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" /> */}

      <div className="relative z-10 w-full px-4 text-center">
        <Image
          height={120}
          width={150}
          className="object-contain w-[120px] sm:w-[160px] h-auto mx-auto"
          alt="logo"
          src="/logo.png"
          priority
        />
        <div className="mt-5 w-full max-w-xl mx-auto">
          <h1
            className={`mx-auto font-normal uppercase text-white ${baskervville.className} text-[clamp(2.4rem,2.5vw,3.5rem)] tracking-[-0.04em]`}
          >
            Preserving Elegance, Most exclusive club
          </h1>

          <p
            style={{ fontFamily: "Heiti SC" }}
            className="mt-3 text-[clamp(0.9rem,1.5vw,1rem)] text-white/70"
          >
            Celebrate Every Moment in Timeless Luxury
          </p>

          <a
            href="#waiting-list"
            style={{ fontFamily: "Heiti SC" }}
            className="mt-6 w-full max-w-[clamp(12rem,20vw,12.5rem)] h-[clamp(2.8rem,4vw,2.8rem)] rounded-2xl bg-[#C39E6F] text-black text-[clamp(0.9rem,1.5vw,1rem)] font-semibold active:scale-[0.98] flex items-center justify-center mx-auto"
          >
            Join waiting list
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
