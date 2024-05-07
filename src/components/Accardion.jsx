import React from "react";
// import { AccardionData } from "../data";
const Accardion = ({ language, setLanguage }) => {
  const titleLang = [
    {
      title: "FAQ",
      lang: "ru",
    },
    {
      title: "FAQ",
      lang: "eng",
    },
    {
      title: "TSS",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12 ">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2
                key={index}
                className="font-semibold text-64px leading-78px tracking-[-4%] text-white mb-8"
              >
                {lan.title}
              </h2>
            );
          }
        })}

        {
            AccardionData.map((lan, index)=>{
                return(
                    <p>{lan.text["Аудит и разбор сайта"]}</p>
                )
            })
        }
      </div>
    </section>
  );
};

export default Accardion;
