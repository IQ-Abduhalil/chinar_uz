import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";

import ChinarLogo from "../assets/icons/chinar_bigLogo.svg";
import axios from "axios";

export default function Question() {
  const sendMyMessage = (e) => {
    e.preventDefault();
    const myToken = "7569931997:AAFp7ynvMpbyoaUclXh39PU8L5jld4lRGzw";
    const chatId = 2101420823;
    const url = `https://api.telegram.org/bot${myToken}/sendMessage`;
    const inputName = document.getElementById("name").value;
    const inputNumber = document.getElementById("inputNumber").value;
    const inputQuestion = document.getElementById("inputQuestion").value;
    const message = ` "number": ${inputNumber},
    "name": ${inputName},
    "question": ${inputQuestion},`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: message,
      },
    })
      .then((res) => {
        alert("muvaffaqiyatli yuborildi!");
      })
      .catch((err) => {
        console.log("xato bor", err);
      });
  };
  return (
    <div>
      <div className="container mx-auto px-6 md:px-12 py-3 flex flex-col justify-center items-center">
        <Link href="/">
          <Image src={ChinarLogo} alt="logo" />
        </Link>
        <p className="text-4xl md:text-7xl font-normal mb-3 text-center">
          Задайте свой вопрос
        </p>
        <p className="text-lg  md:text-xl max-w-[420px] text-center text-light mb-12">
          Оставьте свой вопрос и информацию и наши специалисты свяжутся с вами
        </p>

        <form
          onSubmit={sendMyMessage}
          id="myForm"
          className="flex flex-col items-center gap-3"
        >
          <input
            id="name"
            className="py-4 ps-4 pe-32 md:pe-72 rounded-md border"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            id="inputNumber"
            className="py-4 ps-4 pe-32 md:pe-72 rounded-md border"
            type="number"
            placeholder="+998"
          />
          <input
            id="inputQuestion"
            className="pt-3 pb-12 ps-4 pe-32 md:pe-72 rounded-md border"
            type="text"
            placeholder="Ваш вопрос"
          />
          <button
            className="py-4 px-[100px] md:px-[185px] rounded-md border bg-lime-500"
            type="submit"
          >
            отправить вопрос
          </button>
        </form>
      </div>
    </div>
  );
}
