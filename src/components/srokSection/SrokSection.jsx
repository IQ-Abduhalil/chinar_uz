import Image from "next/image";

import Img1 from "../../assets/srok10/img1.png";
import Img2 from "../../assets/srok10/img2.png";
import Img3 from "../../assets/srok10/img3.png";
import Img4 from "../../assets/srok10/img4.png";
import Img5 from "../../assets/srok10/img5.png";
import Img6 from "../../assets/srok10/img6.png";

export function SrokSection() {
  return (
    <section id="works">
      <div className="container mx-auto px-6 md:px-12 pb-20">
        <p className="max-w-[895px] text-2xl md:text-4xl font-bold mb-4">
          Мы тщательно контролируем качество производства, обеспечивая
          долговечность нашей мебели на срок свыше 10 лет.
        </p>
        <p className="font-light text-sm md:text-lg mb-7">
          Производство состоит из 7 этапов.
        </p>

        <div className="cards flex flex-wrap justify-center gap-2 sm:justify-between">
          <div className="bg-lime-200 rounded-md flex flex-col justify-end cursor-pointer">
            <p className="text-sm mb-3 text-light max-w-[170px] pt-4 px-4">
              Выбор и подготовка материалов
            </p>
            <Image src={Img1} alt="img" />
          </div>
          <div className="bg-lime-200 rounded-md flex flex-col justify-end cursor-pointer">
            <p className="text-sm mb-3 text-light max-w-[170px] pt-4 px-4">
              Создание каркаса
            </p>
            <Image src={Img2} alt="img" />
          </div>
          <div className="bg-lime-200 rounded-md flex flex-col justify-end cursor-pointer">
            <p className="text-sm mb-3 text-light max-w-[170px] pt-4 px-4">
              Плетение
            </p>
            <Image src={Img3} alt="img" />
          </div>
          <div className="bg-lime-200 rounded-md flex flex-col justify-end cursor-pointer">
            <p className="text-sm mb-3 text-light max-w-[170px] pt-4 px-4">
              Обработка и окраска
            </p>
            <Image src={Img4} alt="img" />
          </div>
          <div className="bg-lime-200 rounded-md flex flex-col justify-end cursor-pointer">
            <p className="text-sm mb-3 text-light max-w-[170px] pt-4 px-4">
              Сборка
            </p>
            <Image src={Img5} alt="img" />
          </div>
          <div className="bg-lime-200 rounded-md flex flex-col justify-end cursor-pointer">
            <p className="text-sm mb-3 text-light max-w-[170px] pt-4 px-4">
              Контроль качества
            </p>
            <Image src={Img6} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
