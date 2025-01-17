import { newArr } from "@/constants";
import Link from "next/link";
import { BtnDownl } from "../buttonSkachat";
import Img1 from "../../assets/images/katalog-img1.png";
import Image from "next/image";

const array = [
  {
    img: Img1,
    id: 1,
    title: "Стул Венеция",
    text: "Белый",
  },

  {
    img: Img1,
    id: 2,
    title: "Стул ALLY VBP-206",
    text: "Светло бежевый",
  },

  {
    img: Img1,
    id: 3,
    title: "Стул Рио",
    text: "Велюрово синий",
  },

  {
    img: Img1,
    id: 4,
    title: "Стул Виктория",
    text: "Желтый",
  },

  {
    img: Img1,
    id: 5,
    title: "Стул Венеция",
    text: "Белый",
  },

  {
    img: Img1,
    id: 6,
    title: "Стул ALLY VBP-206",
    text: "Светло бежевый",
  },

  {
    img: Img1,
    id: 7,
    title: "Стул Рио",
    text: "Велюрово синий",
  },

  {
    img: Img1,
    id: 8,
    title: "Стул Виктория",
    text: "Желтый",
  },
];

export function Catalog() {
  return (
    <section className="catalog">
      <div className="container mx-auto px-6 sm:px-12 pb-24 pt-16 text-center">
        <p className="mx-auto font-bold text-2xl md:text-4xl max-w-[600px] mb-4">
          Каталог готовых изделий
        </p>
        <p className="text-light text-base md:text-lg mb-9">
          которые можно купить здесь и сейчас
        </p>

        <ul className="navs sm:flex sm:gap-14 sm:justify-center  mb-12">
          <Link href="#">
            <li className="text-base md:text-xl py-3 px-3">Главная</li>
          </Link>
          <Link href="#">
            <li className="text-base md:text-xl py-3 px-3">Каталог</li>
          </Link>
          <Link href="#">
            <li className="text-base md:text-xl py-3 px-3">Гарантии</li>
          </Link>
          <Link href="#">
            <li className="text-base md:text-xl py-3 px-3">Продукты</li>
          </Link>
        </ul>

        <div className="cards flex flex-wrap gap-6 justify-center mb-16">
          {array.map((item) => (
            <div className="inline-block" key={item.id}>
              <Image
                className=" bg-neutral-200 rounded-md mb-4"
                src={item.img}
                alt="chair"
                width={280}
                height={270}
              />
              <div className="text-start">
                <p className="font-bold text-sm mb-2">{item.title}</p>
                <p className="text-xs text-slate-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <BtnDownl typeName="ПЕРЕЙТИ В КАТАЛОГ" />
      </div>
    </section>
  );
}
