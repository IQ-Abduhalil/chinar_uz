import "./categori.scss";

export function Categori() {
  return (
    <section className="categori">
      <div className="container mx-auto px-12 text-center py-16">
        <p className="mx-auto font-bold text-3xl sm:text-4xl max-w-[600px] mb-4">
          Производим 4 основных категории мебели
        </p>
        <p className="text-light text-lg mb-9">
          более 200 видов продуктов во всем ассортименте
        </p>

        <div className="categori__cards flex justify-center gap-4 flex-wrap">
          <div className="card max-h-[281px] shadow-lg overflow-hidden transform transition hover:scale-95 rounded-lg border-none cursor-pointer flex gap-1  ">
            <p className="font-bold text-sm sm:text-lg text-white">Комплекты</p>
            <p className="text-sm  text-light px-1 py-1 bg-green-700 rounded-sm">
              15 продуктов
            </p>
          </div>

          <div className="card2   max-h-[281px] shadow-lg overflow-hidden transform transition hover:scale-95 rounded-lg border-none cursor-pointer flex gap-1  ">
            <p className="font-bold text-sm sm:text-lg text-white">
              Подвесные кресла
            </p>
            <p className="text-sm text-light px-1 py-1 bg-green-700 rounded-sm">
              7 продуктов
            </p>
          </div>

          <div className="card3 max-h-[281px] shadow-lg overflow-hidden transform transition hover:scale-95 rounded-lg border-none cursor-pointer flex gap-1  ">
            <p className="font-bold text-sm sm:text-lg text-white">
              Диваны кресла
            </p>
            <p className="text-sm text-light px-1 py-1 bg-green-700 rounded-sm">
              3 продуктов
            </p>
          </div>

          <div className="card4  max-h-[281px] shadow-lg overflow-hidden transform transition hover:scale-95 rounded-lg border-none cursor-pointer flex gap-1  ">
            <p className="font-bold text-sm sm:text-lg text-white">Шезлонги</p>
            <p className="text-sm text-light px-1 py-1 bg-green-700 rounded-sm">
              1 продуктов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
