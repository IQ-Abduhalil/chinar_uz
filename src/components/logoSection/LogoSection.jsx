import Image from "next/image";
import Logo1 from "../../assets/icons/abba.svg";
import Logo2 from "../../assets/icons/adamari.svg";
import Logo3 from "../../assets/icons/alfatiha.svg";
import Logo4 from "../../assets/icons/aljabr.svg";
import Logo5 from "../../assets/icons/art.svg";
import Logo6 from "../../assets/icons/asxab.svg";
import Logo7 from "../../assets/icons/auto.svg";
import Logo8 from "../../assets/icons/azko.svg";
import Logo9 from "../../assets/icons/bm.svg";
import Logo10 from "../../assets/icons/bosfor.svg";
import Logo11 from "../../assets/icons/club.svg";
import Logo12 from "../../assets/icons/CTI-logo.svg";
import Logo13 from "../../assets/icons/drAkbar.svg";
import Logo14 from "../../assets/icons/europol.svg";
import Logo15 from "../../assets/icons/general.svg";
import Logo16 from "../../assets/icons/kiwi.svg";
import Logo17 from "../../assets/icons/m.svg";
import Logo18 from "../../assets/icons/nefrit.svg";
import Logo19 from "../../assets/icons/niners.svg";
import Logo20 from "../../assets/icons/novza.svg";
import Logo21 from "../../assets/icons/uchburch.svg";

export function LogoSection() {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 pt-5 pb-20">
        <div className="lg:flex text-center justify-between items-center  mb-12 ">
          <p className="text-2xl md:text-4xl text-light">2008</p>
          <p className="text-2xl md:text-4xl font-bold">
            за 16 лет более 50 партнеров
          </p>
          <p className="text-2xl md:text-4xl text-light font-bold">2024</p>
        </div>

        <div className="logos flex flex-wrap gap-16 justify-center">
          <Image className="cursor-pointer" src={Logo1} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo2} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo3} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo4} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo5} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo6} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo7} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo8} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo9} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo10} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo11} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo12} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo13} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo14} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo15} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo16} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo17} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo18} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo19} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo20} alt="sayt-logo" />
          <Image className="cursor-pointer" src={Logo21} alt="sayt-logo" />
        </div>
      </div>
    </section>
  );
}
