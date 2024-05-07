import React from "react";
import companyImg1 from '../img/aboutCompany1.svg'
import companyImg2 from '../img/aboutCompany2.svg'
import companyImg3 from '../img/aboutCompany3.svg'
import companyImg4 from '../img/aboutCompany4.svg'
const AboutCompany = ({ language, setLanguage }) => {
  const titleLang = [
    {
      title: "О компании",
      lang: "ru",
    },
    {
      title: "О компании",
      lang: "eng",
    },
    {
      title: "О компании",
      lang: "uzb",
    },
  ]; 

  const AboutCompanyData = [
    // ru
    {
        title:"Совместная работа",
        img: companyImg1,
        lang:"ru"
    },
    {
        title:"Большой опыт",
        img: companyImg2,
        lang:"ru"
    },
    {
        title:"Большой опыт",
        img: companyImg3,
        lang:"ru"
    },
    {
        title:"Искусственный интеллект",
        img: companyImg4,
        lang:"ru"
    },
    // eng
    {
        title:"Совместная работа",
        img: companyImg1,
        lang:"eng"
    },
    {
        title:"Большой опыт",
        img: companyImg2,
        lang:"eng"
    },
    {
        title:"Большой опыт",
        img: companyImg3,
        lang:"eng"
    },
    {
        title:"Искусственный интеллект",
        img: companyImg4,
        lang:"eng"
    },
    // uzb
    {
        title:"Совместная работа",
        img: companyImg1,
        lang:"uzb"
    },
    {
        title:"Большой опыт",
        img: companyImg2,
        lang:"uzb"
    },
    {
        title:"Большой опыт",
        img: companyImg3,
        lang:"uzb"
    },
    {
        title:"Искусственный интеллект",
        img: companyImg4,
        lang:"uzb"
    },
  ]
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2 key={index} className="text-white font-semibold 860px:text-64px 580px:text-5xl text-3xl max-860px:text-center leading-78px tracking-[-4%] mb-16">
                {lan.title}
              </h2>
            );
          }
        })}

        <ul className="grid 1030px:grid-cols-4 580px:grid-cols-2 grid-cols-1 justify-between max-580px:space-y-14">
           {
            AboutCompanyData.map((lan, index)=>{
                if(language === lan.lang){
                    return(
                        <li key={index} className={`px-9 w-full max-w-[350px] max-1030px:mx-auto flex flex-col ${
                            index % 2 === 0 ? "580px:pb-[132px]" : "580px:pt-[166px]"
                          }`}>
                            <img className="w-full 580px:max-w-[186px] max-w-[140px] mx-auto mb-8" src={lan.img} alt={lan.title} />
                            <h3 className="580px:font-bold font-semibold 580px:text-29px text-[20px] 580px:leading-8 leading-6 text-center  text-white">{lan.title}</h3>
                        </li>
                    )
                }
            })
           }
        </ul>
      </div>
    </section>
  );
};

export default AboutCompany;
