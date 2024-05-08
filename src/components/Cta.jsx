import React from "react";

const Cta = ({ language, setLanguage }) => {
  const CtaData = [
    // ru
    {
      title: "Проектов",
      number: "150",
      belgi: "+",
      lang: "ru",
    },
    {
      title: "Человек посещают сайты и сервисы, разарботанные  нами ежедневно",
      number: "1 000 000",
      belgi: ">",
      lang: "ru",
    },
    {
      title: "Профессионалов в международной команде",
      number: "17",
      belgi: "+",
      lang: "ru",
    },
    // eng
    {
      title: "Projects",
      number: "150",
      belgi: "+",
      lang: "eng",
    },
    {
      title: "Man visiting sites and services developed us daily",
      number: "1 000 000",
      belgi: ">",
      lang: "eng",
    },
    {
      title: "Professionals in an international team",
      number: "17",
      belgi: "+",
      lang: "eng",
    },
    //  uzb
    {
      title: "Loyihalar",
      number: "150",
      belgi: "+",
      lang: "uzb",
    },
    {
      title:
        "Saytlarga tashrif buyuradigan odam va xizmatlar ishlab chiqildi bizni har kuni",
      number: "1 000 000",
      belgi: ">",
      lang: "uzb",
    },
    {
      title: "Professionallar xalqaro jamoada",
      number: "17",
      belgi: "+",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        <ul className="flex flex-wrap items-center justify-center space-y-10 1120px:space-y-0">
          {CtaData.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <li key={index} className="w-full max-w-[364px]">
                  <div className="flex items-center justify-center">
                    <span className="text-white font-semibold 580px:text-64px text-4xl 580px:leading-78px leading-10">{lan.belgi}</span>
                    <p
                      className={`font-semibold 580px:text-64px text-4xl 580px:leading-78px leading-10 text-#9F95FF `}
                    >
                      {lan.number}
                    </p>
                  </div>
                  <p className="580px:text-2xl text-base 580px:leading-8 leading-6 text-white text-center">{lan.title}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Cta;
