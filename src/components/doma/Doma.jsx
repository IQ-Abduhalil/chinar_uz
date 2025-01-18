export function Doma() {
  return (
    <section>
      <div id="dostavka" className="container mx-auto px-6 md:px-12 pb-16">
        <p className="text-2xl md:text-4xl font-bold max-w-[814px] mb-8">
          ДОСТАВКА ПО ВСЕМУ МИРУ, ОПЛАТА ПО ФАКТУ ОСМОТРА У ВАС ДОМА
        </p>

        <div className="flex flex-wrap gap-6">
          <div className="grow pt-20 pb-6 px-5 bg-lime-500 rounded-md">
            <p className="text-lg md:text-2xl font-bold mb-3">
              Условия доставки
            </p>
            <p className="max-w-[525px] text-normal text-sm md:text-lg">
              Доставка по Ташкенту от 30.000 сум. Отправляем мебель в другие
              города Узбекистана, условия доставки обсуждается индивидуально.
              Доставка до клиента производиться нашими сотрудниками, которые
              также помогут поднять и собрать мебель
            </p>
          </div>

          <div className="grow pt-20 pb-6 px-5 bg-lime-500 rounded-md">
            <p className="text-lg md:text-2xl font-bold mb-3">Способы оплаты</p>
            <p className="max-w-[525px] text-normal text-sm md:text-lg">
              Любая форма оплаты-безналичные, наличные и перечислением. Вы
              можете оплатить 100% стоимости товара или внести 10% от общей
              суммы, оставшуюся часть оплатить уже после осмотра и привоза
              мебели к вам домой
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
