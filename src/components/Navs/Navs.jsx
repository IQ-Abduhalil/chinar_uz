import Link from "next/link";

export function Navs() {
  return (
    <nav className="container mx-auto px-12 hidden  md:block">
      <ul className="navs flex justify-between py-11  ">
        <Link href="/">
          <li className="text-sm">Главная</li>
        </Link>
        <Link href="/catalog">
          <li className="text-sm">Каталог</li>
        </Link>
        <Link href="#">
          <li className="text-sm">Гарантии</li>
        </Link>
        <Link href="#">
          <li className="text-sm">Продукты</li>
        </Link>
        <Link href="/about">
          <li className="text-sm">О компании</li>
        </Link>
        <Link href="#">
          <li className="text-sm">Доставка</li>
        </Link>
        <Link href="#">
          <li className="text-sm">Производство</li>
        </Link>
        <Link href="/question">
          <li className="text-sm">Контакты</li>
        </Link>
      </ul>
    </nav>
  );
}
