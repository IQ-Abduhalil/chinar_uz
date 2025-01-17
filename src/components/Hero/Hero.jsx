import Link from "next/link";
import { BtnDownl } from "../buttonSkachat";
import HeroImg1 from "../../assets/images/hero-img.png";
import HeroImg2 from "../../assets/images/hero-img-2.png";
import HeroImg3 from "../../assets/images/hero-img3.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero">
      <div className="container mx-auto px-12 py-4  ">
        <div className="hero__middle flex  flex-wrap justify-center md:justify-between mb-9">
          <div className="mb-4 lg:mb-2">
            <p className="text-light text-xl     mb-5">---- от производителя</p>
            <h2 className="font-bold text-4xl max-w-[420px] mb-5">
              Плетённая мебель для вашего бизнеса
            </h2>
            <p className="max-w-[500px] text-lg mb-8">
              Представляем специальную коллекцию плетеной мебели для бизнеса –
              от элегантных стульев и столов для кафе и ресторанов до уютных
              уголков для отдыха и лаунж-зон.
            </p>
            <BtnDownl typeName="СКАЧАТЬ КАТАЛОГ" />
          </div>

          <div className="flex flex-wrap justify-between mb-9 gap-6">
            <Image
              src={HeroImg1}
              alt="chair-img"
              className="max-w-[300px] sm:max-w-[450px]"
            />
            <div className="flex flex-col justify-between items-end ">
              <Image src={HeroImg3} alt="chair-img" />
              <Image src={HeroImg2} alt="chair-img" />
            </div>
          </div>

          <ul className="hero__bottom flex flex-col md:flex-row   md:gap-20">
            <li className="flex gap-4 align-center">
              <input type="checkbox" />
              <p className="text-sm text-light max-w-[140px]">
                Гарантия от 3 лет на всю продукцию
              </p>
            </li>
            <li className="flex gap-4 align-center">
              <input type="checkbox" />
              <p className="text-sm text-light max-w-[140px]">
                Доставка от 30.000 сум до двери
              </p>
            </li>
            <li className="flex gap-4 align-center">
              <input type="checkbox" />
              <p className="text-sm text-light max-w-[140px]">
                Оплата по факту просмотра мебели
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
