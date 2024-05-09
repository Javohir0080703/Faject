import React, { useState } from "react";
import smcImg from "../img/SmcImg.svg";
import smile from "../img/HomeSmile.svg";
import plus from "../img/Plus.svg";
import minus from "../img/minus.svg";
import { HomeReviewsData } from "../data";
const Reviews = ({ language, setLanguage }) => {
  const [scroll, setScroll] = useState(false);
  const [iteamsNumber, setIteamsNumber] = useState(2);
  const handleAdd = ()=>{
    setScroll(!scroll)
    setIteamsNumber(10)
  }
  const titleLang = [
    // ru
    {
      title: "Отзывы",
      dawload: "Загрузить ещё ...",
      lang: "ru",
    },
    // eng
    {
      title: "Reviews",
      dawload: "Load more ...",
      lang: "eng",
    },
    // uzb
    {
      title: "Sharhlar",
      dawload: "Ko'proq yuklang ...",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2
                key={index}
                className="font-semibold leading-78px text-64px tracking-[-4%] text-white mb-8"
              >
                {lan.title}
              </h2>
            );
          }
        })}
        <div className="flex justify-between">
          <div className="py-2 px-4 bg-#9F95FF flex items-center  space-x-1.5 rounded-[22px] w-full max-w-[204px] h-full max-h-[50px]">
            <img src={smcImg} alt="Smc" />
            <p className="text-base leading-8 font-semibold text-white">
              Оставить отзыв
            </p>
          </div>
          <ul className={`space-y-7 h-[800px] ${scroll ? "reviews pr-5":""}`}>
            {HomeReviewsData.slice(0, iteamsNumber).map((lan, index) => {
              if (language === lan.lang) {
                return (
                  <li
                    key={index}
                    className="w-full 440px:max-w-780px max-w-440px py-4 px-7 border-white border rounded-20px "
                  >
                    <div className="flex items-center mb-2.5">
                      <img
                        className="max-531px:w-[46px]"
                        src={smile}
                        alt="Smile"
                      />
                      <h3 className="text-white font-bold 531px:text-29px text-[20px]  leading-8 tracking-[-1%] ml-5">
                        {lan.title}
                      </h3>
                    </div>
                    <div>
                      <div className="flex items-center ">
                        <img
                          className="max-531px:w-[16px]"
                          src={plus}
                          alt="Plus"
                        />
                        <p className="font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-#CBC6FD ml-2.5">
                          {lan.plus}
                        </p>
                      </div>
                      <p className="text-white 531px:text-base text-xs leading-5 tracking-[-1%] pl-[34px]">
                        {lan.text}
                        <span
                          className={`${
                            lan.text.length > 0 ? "hidden" : "block"
                          }`}
                        >
                          {lan.default}
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center ">
                        <img
                          className="max-531px:w-[16px] "
                          src={minus}
                          alt="minus"
                        />
                        <p className="font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-#CBC6FD ml-2.5">
                          {lan.minus}
                        </p>
                      </div>
                      <p className="text-white 531px:text-base text-xs leading-5 tracking-[-1%] pl-[34px]">
                        {lan.negativeText}
                        <span
                          className={`${
                            lan.negativeText.length > 0 ? "hidden" : "block"
                          }`}
                        >
                          {lan.default}
                        </span>
                      </p>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <div key={index} className="flex items-end justify-end mt-7">
                <button onClick={handleAdd} className="py-1.5 px-4 border-2 border-white rounded-[22px] font-semibold text-base leading-8 text-white ">
                  {lan.dawload}
                </button>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Reviews;
