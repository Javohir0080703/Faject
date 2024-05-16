import React from "react";
import { PortfolioData } from "../data";
import { useParams } from "react-router-dom";

const PortfolioDetail = ({ language, setLanguage }) => {
  const { id } = useParams();
  const detail = PortfolioData.find((last) => last.id.toString() === id);
  return (
    <section>
      {/* hero */}
      <div
        className="bg-cover bg-center h-[700px] w-full"
        style={{ backgroundImage: `url(${detail.img})` }}
      >
        <div className="containerb">
          <div className="pt-[206px] pb-[176px] ">
            <div className="py-2 px-4 rounded-[22px] border-2 flex items-center w-full max-w-[200px]">
              <img src={detail.tipImg} alt="Img" />
              <p className="text-#CBC6FD font-semibold text-base leading-8 ml-1.5 ">
                {detail.tipText}
              </p>
            </div>
            <h4 className="text-white 531px:text-2xl text-lg 531px:leading-8 leading-5 mb-8">
              {detail.data}
            </h4>
            <h2 className="font-semibold 950px:text-64px 750px:text-5xl 440px:text-3xl text-xl 750px:leading-78px  440px:leading-10 leading-7 tracking-[-4%] text-white mb-8 ">
              {detail.title}
            </h2>
            <p className="w-full max-w-[850px] text-white font-medium  750px:text-base 440px:text-sm text-xs 750px:leading-8 leading-6">
              {detail.text}
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 ">
        <div className="containerb">
          <ul className="flex justify-between flex-wrap mb-8">
            <li className="w-full max-w-[514px]">
              <h3 className="font-bold text-3xl leading-8 text-#9F95FF mb-5">
                {detail.Customer}
              </h3>
              <p className="font-medium text-base leading-8 text-white mb-5">
                {detail.CustomerText}
              </p>
              <a
                href={detail.CustomerLink}
                className={`${
                  language === "ru" ? "" : "hidden"
                } py-1.5 px-4 border-2 rounded-[22px] font-semibold text-base leading-8 text-#CBC6FD inline-block`}
              >
                Перейти на сайт
              </a>
              <a
                href={detail.CustomerLink}
                className={`${
                  language === "eng" ? "" : "hidden"
                } py-1.5 px-4 border-2 rounded-[22px] font-semibold text-base leading-8 text-#CBC6FD inline-block`}
              ></a>
              <a
                href={detail.CustomerLink}
                className={`${
                  language === "uzb" ? "" : "hidden"
                } py-1.5 px-4 border-2 rounded-[22px] font-semibold text-base leading-8 text-#CBC6FD inline-block`}
              >
                Перейти на сайт
              </a>
            </li>
            <li className="w-full max-w-[514px]">
              <h3 className="font-bold text-3xl leading-8 text-#9F95FF mb-5">
                {detail.Objective}
              </h3>
              <p className="font-medium text-base leading-8 text-white mb-5">
                {detail.ObjectiveText}
              </p>
            </li>
            <li className="w-full max-w-[514px]">
              <h3 className="font-bold text-3xl leading-8 text-#9F95FF mb-5">
                {detail.Solutions}
              </h3>
              <p className="font-medium text-base leading-8 text-white mb-5">
                {detail.SolutionsText}
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-between">
            <div className="w-full max-w-[514px]">
              <h3 className="font-bold text-3xl leading-8 text-#9F95FF mb-5">
                {detail.purpose}
              </h3>
              <p className="font-medium text-base leading-8 text-white mb-5">
                {detail.purposeText}
              </p>
            </div>
            <img className="w-full max-w-[500px] h-full max-h-[500px] rounded-[20px] border-[6px] text-white" src={detail.purposeImg} alt="Purpose_Img" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-14">
                <img className="rounded-[20px] border-[6px]" src={detail.aboutImg} alt="Img" />
                <img className="rounded-[20px] border-[6px]" src={detail.aboutImg2} alt="Img" />
            </div>
            <p className="text-white font-medium text-base leading-8 w-full max-w-[540px]">{detail.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;
