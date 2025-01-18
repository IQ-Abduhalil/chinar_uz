import Image from "next/image";
import { BtnDownl } from "../buttonSkachat";

import BookImg from "../../assets/images/book.png";

export function Book() {
  return (
    <section id="book">
      <div className="container mx-auto px-12 flex flex-wrap items-center mt-4">
        <div className="book__left">
          <p className="text-2xl sm:text-4xl font-semibold mb-4">
            200+ проектов в фото каталоге
          </p>
          <p className="text-sm sm:text-lg mb-6">Скачайте прямо сейчас</p>

          <form className="flex flex-wrap gap-2">
            <input className="p-4 border" type="text" placeholder="Ваше имя" />
            <input className="p-4 border" type="number" placeholder="+998" />
            <BtnDownl typeName="СКАЧАТЬ КАТАЛОГ" />
          </form>
        </div>

        <div className="book__right">
          <Image width="33%" height={500} src={BookImg} alt="book" />
        </div>
      </div>
    </section>
  );
}
