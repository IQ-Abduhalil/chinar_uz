import Link from "next/link";

export function Navs() {
  return (
    <nav className="container mx-auto px-12 pt-24 hidden  md:block">
      <ul className="navs flex justify-between py-11  ">
        <Link href="/">
          <li className="text-sm hover:text-lime-500">Главная</li>
        </Link>
        <Link href="/catalog">
          <li className="text-sm hover:text-lime-500">Каталог</li>
        </Link>
        <Link href="#garanty">
          <li className="text-sm hover:text-lime-500">Гарантии</li>
        </Link>
        <Link href="#product">
          <li className="text-sm hover:text-lime-500">Продукты</li>
        </Link>
        <Link href="#about">
          <li className="text-sm hover:text-lime-500">О компании</li>
        </Link>
        <Link href="#dostavka">
          <li className="text-sm hover:text-lime-500">Доставка</li>
        </Link>
        <Link href="#works">
          <li className="text-sm hover:text-lime-500">Производство</li>
        </Link>
        <Link href="#footer">
          <li className="text-sm hover:text-lime-500">Контакты</li>
        </Link>
      </ul>
    </nav>
  );
}
