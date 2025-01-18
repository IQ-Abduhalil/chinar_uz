import "./footer.scss";

import Image from "next/image";
import Link from "next/link";
import ChinarLogo from "../../assets/icons/chinor-logo.svg";
import WhatsAp from "../../assets/icons/whatup.svg";
import Telegram from "../../assets/icons/tlgrm.svg";

export function Footer() {
  return (
    <footer id="footer">
      <div className="container mx-auto px-6 flex  flex-col-reverse sm:flex-row md:px-12   sm:justify-between py-5">
        <div className="header__left flex justify-between mt-2 items-center mb-3 md:gap-5">
          <Link href="#">
            <Image src={ChinarLogo} alt="chinar" />
          </Link>
          <p className="max-w-[100px]   text-xs/[10px] font-light">
            Производство плетенной мебели премиун класса в Ташкенте
          </p>
        </div>
        <div className="header__right flex justify-between items-center md:gap-12">
          <div className="  flex flex-col items-center gap-2.5">
            <p className="text-xs md:text-sm font-light max-w-[76px] md:max-w-[205px] text-light">
              Задайте вопрос, мы онлайн
            </p>
            <div className="header__right--inner flex gap-2.5">
              <Link
                className="footer__whatsup flex items-center justify-center max-w-[21px] sm:max-w-[40px]"
                href="#"
              >
                <Image src={WhatsAp} alt="whatsupp" />
              </Link>
              <Link href="#" className="max-w-[21px]  sm:max-w-[40px]">
                <Image src={Telegram} alt="telegram" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs md:text-sm font-light">
              Звоните: 10:00 - 20:00
            </p>
            <p className="font-bold font-xl">+998 71 500 00 00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
