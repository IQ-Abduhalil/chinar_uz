import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center px-6 pt-28">
      <p className="font-normal text-4xl md:text-8xl mb-8">
        <span className="text-lime-500">404</span> Страница не найдена
      </p>
      <p className="font-light text-base md:text-3xl max-w-[1100px] mx-auto mb-8">
        Извините, страница не найдена вероятно, ссылка, по которой вы перешли,
        не работает или страница была удалена.{" "}
      </p>
      <p className="font-light text-base md:text-3xl mb-16">
        Пожалуйста, вернитесь на главную страницу
      </p>
      <Link href="/">
        <button className="py-4 px-8 bg-lime-500 rounded-md text-xs text-white font-normal">
          вернуться к главному
        </button>
      </Link>
    </div>
  );
}
