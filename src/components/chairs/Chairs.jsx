import Image from "next/image";

import ChairImg1 from "../../assets/images/chair-img1.png";
import ChairImg2 from "../../assets/images/chair-img2.png";
import ChairImg3 from "../../assets/images/chair-img3.png";

export function Chairs() {
  return (
    <section className="chairs">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-4xl text-center mx-auto max-w-[700px] mb-8">
          Новая летняя коллекция от Chinar для вашего дома и заведения
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[300px]sm:max-w-[1200px] mb-3 text-center  ">
            <Image
              width="100%"
              height={600}
              src={ChairImg1}
              alt="chairs-image"
            />
          </div>
          <div className="flex  flex-wrap  md:flex-nowrap gap-3">
            <Image width="33%" src={ChairImg2} alt="chairs-image" />
            <Image width="67%" src={ChairImg3} alt="chairs-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
