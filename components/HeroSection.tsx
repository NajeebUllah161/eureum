import { baskervville } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[90svh] sm:min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/club.webp')" }}
    >
      {/* overlay: subtle gradient so text is readable on mobile */}

      {/* <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" /> */}

      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-8 sm:pt-12 px-4 text-center">
        <Image
          height={120}
          width={150}
          className="object-contain w-[120px] h-auto sm:w-[160px]"
          alt="logo"
          src="/logo.svg"
          priority
        />

        <div className="mt-5 w-full max-w-xl">
          <h1
            className={`mx-auto font-normal uppercase text-white ${baskervville.className} text-[1.6rem] leading-tight sm:text-[2.5rem]`}
          >
            Preserving Elegance, Most exclusive club
          </h1>

          <p
            style={{ fontFamily: "Heiti SC" }}
            className="mt-3 text-base sm:text-lg text-white/70"
          >
            Celebrate Every Moment in Timeless Luxury
          </p>

          <button
            style={{ fontFamily: "Heiti SC" }}
            className="mt-6 w-full max-w-[14.5rem] cursor-pointer h-12 rounded-2xl bg-[#C39E6F] text-black text-base sm:text-lg font-semibold active:scale-[0.98]"
          >
            Join waiting list
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
