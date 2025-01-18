import Image from "next/image";
import HaqidaImg1 from "../../assets/images/haqida-img1.png";
import HaqidaImg2 from "../../assets/images/haqida-img2.png";
import HaqidaImg3 from "../../assets/images/haqida-img3.png";
import HaqidaImg4 from "../../assets/images/haqida-img4.png";
import HaqidaImg5 from "../../assets/images/haqida-img5.png";
import HaqidaImg6 from "../../assets/images/haqida-img6.png";

export default function Mebeli() {
  return (
    <section className="mebeli" id="garanty">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <p className="title max-w-[600px] font-bold text-4xl mb-4">
          С 2008 года мы сделали более 100 000 мебели
        </p>
        <p className="text-lg text-light mb-12">
          Разной сложности и конфигурации
        </p>

        <div className="cards flex flex-wrap gap-3 mb-3">
          <div className="pt-4 bg-lime-600  rounded-md">
            <p className="max-w-[390px] pb-3 px-5 ">
              Плетеная мебель часто используется в садах, на террасах и балконах
            </p>
            <Image width={567} height={240} src={HaqidaImg1} alt="chair" />
          </div>

          <div className="pt-4 bg-lime-600  rounded-md">
            <p className="max-w-[390px] pb-3 px-5 ">
              Плетеные диваны и кресла могут добавить легкости и элегантности
              гостиной
            </p>
            <Image width={567} height={240} src={HaqidaImg2} alt="chair" />
          </div>

          <div className="pt-4 bg-lime-600 rounded-md">
            <p className="max-w-[233px] pb-3 px-5 ">
              Мебель для кухни и столовой комнаты
            </p>
            <Image width={260} height={240} src={HaqidaImg3} alt="chair" />
          </div>
        </div>

        <div className="cards flex flex-wrap gap-3">
          <div className="pt-4 bg-lime-600  rounded-md">
            <p className="max-w-[390px] pb-3 px-5 ">
              Плетеные мебели могут добавить спальне нотку романтики и
              естественности.
            </p>
            <Image width={389} height={240} src={HaqidaImg4} alt="chair" />
          </div>

          <div className="pt-4 bg-lime-600  rounded-md">
            <p className="max-w-[390px] pb-3 px-5 ">
              Комплекты мебели для ресторанов и кафе
            </p>
            <Image width={389} height={240} src={HaqidaImg5} alt="chair" />
          </div>

          <div className="pt-4 bg-lime-600 rounded-md ">
            <p className="max-w-[433px] pb-3 px-5 ">
              Плетеное кресло-качалка может стать идеальным местом для отдыха в
              любом уголке дома или сада.
            </p>
            <Image width={620} height={240} src={HaqidaImg6} alt="chair" />
          </div>
        </div>
      </div>
    </section>
  );
}
