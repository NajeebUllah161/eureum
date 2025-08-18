import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <Image
          src="/logo.png"
          alt="Aureum Private Society"
          width={120}
          height={70}
          className="h-auto w-[120px] sm:w-[140px]"
          priority
        />
        <p
          style={{ fontFamily: "Heiti SC" }}
          className="mt-4 text-xs sm:text-sm text-white/70"
        >
          © {new Date().getFullYear()} — Copyright | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
