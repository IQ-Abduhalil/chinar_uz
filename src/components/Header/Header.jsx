import "./header.scss";

import Link from "next/link";
import ChinarLogo from "../../assets/icons/chinor-logo.svg";
import WhatsAp from "../../assets/icons/whatup.svg";
import Telegram from "../../assets/icons/tlgrm.svg";
import Image from "next/image";
import MenuLogo from "../../assets/icons/menu.svg";

export function Header() {
  return (
    <header>
      <div className="container mx-auto px-6 md:px-12   md:flex md:justify-between py-5 ">
        <div className="header__left flex items-center justify-between md:gap-5 mb-3">
          <Link href="/">
            <Image src={ChinarLogo} alt="chinar" />
          </Link>
          <div className="flex items-center justify-center">
            <p className="max-w-[100px] hidden md:inline-block text-xs/[10px] font-light">
              Производство плетенной мебели премиун класса в Ташкенте
            </p>
            <button className="border-0 md:hidden inline-block">
              <Image src={MenuLogo} alt="menu" />
            </button>
          </div>
        </div>
        <div className="header__right flex justify-between items-center md:gap-12">
          <div className="  flex md:flex-col items-center md:gap-2.5">
            <p className="md:text-sm text-xs font-light max-w-[76px] md:max-w-[205px]">
              Задайте вопрос, мы онлайн
            </p>
            <div className="header__right--inner flex gap-2.5">
              <Link
                className="header__whatsup flex items-center justify-center max-w-[21px] sm:max-w-[40px]"
                href="#"
              >
                <Image src={WhatsAp} alt="whatsupp" />
              </Link>
              <Link href="/question" className="max-w-[21px] sm:max-w-[40px]">
                <Image src={Telegram} alt="telegram" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="md:text-sm text-xs font-light">
              Звоните: 10:00 - 20:00
            </p>
            <p className="font-bold text-base sm:text-base">
              +998 71 500 00 00
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
