import Image from "next/image";
import Link from "next/link";
import Plus from "../../assets/icons/plus.svg";
import { BtnDownl } from "../buttonSkachat";

export function VaprosSection() {
  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 pb-28">
        <p className="text-center mx-auto text-normal text-2xl md:text-4xl mb-11 max-w-[670px]">
          ВОПРОСЫ КОТОРЫЕ ЗАДАЮТ НАМ ОЧЕНЬ ЧАСТО
        </p>

        <div className="flex justify-between items-center px-6 md:px-12 mb-3">
          <p className="text-lg md:text-2xl font-bold">
            Какие условия доставки?
          </p>
          <Image src={Plus} alt="plus-logo" />
        </div>

        <div className=" max-w-[525px] px-6 md:px-12 mb-5">
          <p className="text-sm md:text-lg font-normal">
            Доставка по Ташкенту от 30.000 сум. Отправляем мебель в другие
            города Узбекистана, условия доставки обсуждается индивидуально.
            Доставка до клиента производиться нашими сотрудниками, которые также
            помогут поднять и собрать мебель
          </p>
        </div>

        <div className="px-12 mb-5">
          <span className="inline-block w-[100%] h-0.5 bg-gray-400 "></span>
        </div>

        <div className="flex justify-between items-center px-6 md:px-12 mb-3">
          <p className="text-lg md:text-2xl font-bold">
            Какие условия доставки?
          </p>
          <Image src={Plus} alt="plus-logo" />
        </div>

        <div className="px-12 mb-5">
          <span className="inline-block w-[100%] h-0.5 bg-gray-400 "></span>
        </div>

        <div className="flex justify-between items-center px-6 md:px-12 mb-3">
          <p className="text-lg md:text-2xl font-bold">
            Какие условия доставки?
          </p>
          <Image src={Plus} alt="plus-logo" />
        </div>

        <div className="px-12 mb-5">
          <span className="inline-block w-[100%] h-0.5 bg-gray-400 "></span>
        </div>

        <div className="flex justify-between items-center px-6 md:px-12 mb-3">
          <p className="text-lg md:text-2xl font-bold">
            Какие условия доставки?
          </p>
          <Image src={Plus} alt="plus-logo" />
        </div>
        <div className="px-12 mb-5">
          <span className="inline-block w-[100%] h-0.5 bg-gray-400 "></span>
        </div>

        <div className="flex justify-between items-center px-6 md:px-12 mb-32">
          <p className="text-lg md:text-2xl font-bold">
            Какие условия доставки?
          </p>
          <Image src={Plus} alt="plus-logo" />
        </div>

        <p className="font-bold  text-2xl md:text-4xl mb-4 md:mb-7">
          Остались вопросы?{" "}
        </p>
        <Link href="/question">
          <button className="py-4 px-9 bg-lime-500 text-white">
            ЗАДАТЬ ВОПРОС
          </button>
        </Link>
      </div>
    </section>
  );
}
