import Image from "next/image";

import LogoWhite from "@/assets/img/logo/logo-white.png";

export default function Footer() {
  return (
    <footer className="h-[140px] bg-primary text-white flex items-center">
      <div className="container space-y-4">
        <Image
          className="w-[108px] md:w-[122px]"
          src={LogoWhite}
          sizes="(min-width: 768px) 122w, 108w"
          alt="Logo Ultragaz Energia Inteligente"
        />
        <hr />
        <p className="text-[11px] font-bold md:text-xs">
          Ultragaz Energia Inteligente. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}