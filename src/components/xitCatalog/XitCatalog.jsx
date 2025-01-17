import Image from "next/image";
import Img1 from "../../assets/catalogImgs/img1.png";
import Img2 from "../../assets/catalogImgs/img2.png";
import Img3 from "../../assets/catalogImgs/img3.png";
import Img4 from "../../assets/catalogImgs/img4.png";
import Img5 from "../../assets/catalogImgs/img5.png";
import Img6 from "../../assets/catalogImgs/img6.png";
import Img7 from "../../assets/catalogImgs/img7.png";
import Img8 from "../../assets/catalogImgs/img8.png";
import Like from "../../assets/icons/like.svg";

export default function XitCatalog() {
  const NewArr = [
    {
      id: 1,
      img: Img1,
      title: "Шерона Barhat Grey",
      text: "Двухспальные кровати",
      cost: 21099,
    },
    {
      id: 2,
      img: Img2,
      title: "Авиньон",
      text: "Буфеты",
      cost: 18990,
    },
    {
      id: 3,
      img: Img3,
      title: "Стелла Дуб Сонома ",
      text: "Комоды",
      cost: 8990,
    },
    {
      id: 4,
      img: Img4,
      title: "Равенна-1 Light",
      text: "Комоды",
      cost: 14990,
    },
    {
      id: 5,
      img: Img5,
      title: "Бенфлит Grey",
      text: "Журнальные столы",
      cost: 18990,
    },
    {
      id: 6,
      img: Img6,
      title: "Авиньон",
      text: "Буфеты",
      cost: 7290,
    },
    {
      id: 7,
      img: Img7,
      title: "Валенсия Beige",
      text: "Шкафы",
      cost: 19990,
    },
    {
      id: 8,
      img: Img8,
      title: "Лайт-3-170-240 Белый",
      text: "Шкафы",
      cost: 27290,
    },
    {
      id: 9,
      img: Img1,
      title: "Шерона Barhat Grey",
      text: "Двухспальные кровати",
      cost: 21099,
    },
    {
      id: 10,
      img: Img2,
      title: "Авиньон",
      text: "Буфеты",
      cost: 18990,
    },
    {
      id: 11,
      img: Img3,
      title: "Стелла Дуб Сонома ",
      text: "Комоды",
      cost: 8990,
    },
    {
      id: 12,
      img: Img4,
      title: "Равенна-1 Light",
      text: "Комоды",
      cost: 14990,
    },
    {
      id: 13,
      img: Img5,
      title: "Бенфлит Grey",
      text: "Журнальные столы",
      cost: 18990,
    },
    {
      id: 14,
      img: Img6,
      title: "Авиньон",
      text: "Буфеты",
      cost: 7290,
    },
    {
      id: 15,
      img: Img7,
      title: "Валенсия Beige",
      text: "Шкафы",
      cost: 19990,
    },
    {
      id: 16,
      img: Img8,
      title: "Лайт-3-170-240 Белый",
      text: "Шкафы",
      cost: 27290,
    },
    {
      id: 17,
      img: Img1,
      title: "Авиньон",
      text: "Буфеты",
      cost: 18990,
    },
    {
      id: 18,
      img: Img1,
      title: "Авиньон",
      text: "Буфеты",
      cost: 18990,
    },
    {
      id: 19,
      img: Img1,
      title: "Авиньон",
      text: "Буфеты",
      cost: 18990,
    },
    {
      id: 20,
      img: Img1,
      title: "Авиньон",
      text: "Буфеты",
      cost: 18990,
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-6 md:px-12 py-10">
        <p className="text-center text-3xl md:text-6xl font-normal mb-2">
          Каталог готовых изделий
        </p>
        <p className="text-base md:text-lg font-light text-center mb-4">
          которые можно купить здесь и сейчас
        </p>
        <p className="text-sm font-normal mb-14">Хиты продаж</p>

        <div className="flex flex-wrap justify-center gap-6">
          {NewArr.map((data) => (
            <div className="p-8 mb-11">
              <Image className=" mb-8" src={Like} alt="like-logo" />
              <Image
                className="mb-14"
                src={data.img}
                alt="salom"
                width={200}
                height={200}
              />
              <p className="text-sm font-medium mb-1.5">{data.title}</p>
              <p className="text-xs font-normal mb-2">{data.text}</p>
              <p className="text-sm font-medium">{data.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
