import React from "react";
import ourgroupimg from "../img/OurGroupImg.png";
const OurGroup = ({ language, setLanguage }) => {
  const titleLang = [
    {
      title: "Наша команда",
      lang: "ru",
    },
    {
      title: "Our team",
      lang: "eng",
    },
    {
      title: "Bizning jamoamiz",
      lang: "uzb",
    },
  ];

  const ourGroup = [
    // ru
    {
        title:"Иннокентий",
        name:"Директор",
        img:"",
        lang:"ru"
    },
    {
        title:"Проджект-менеджер ",
        name:"Директор",
        img:"",
        lang:"ru"
    },
    {
        title:"Иннокентий",
        name:"Проджект-менеджер",
        img:"",
        lang:"ru"
    },
    {
        title:"Иннокентий",
        name:"Дизайнер",
        img:"",
        lang:"ru"
    },
    {
        title:"Иннокентий",
        name:"Директор",
        img:"",
        lang:"ru"
    },
    {
        title:"Иннокентий",
        name:"Директор",
        img:"",
        lang:"ru"
    },
    {
        title:"Иннокентий",
        name:"Директор",
        img:"",
        lang:"ru"
    },
    {
        title:"Иннокентий",
        name:"Директор",
        img:"",
        lang:"ru"
    },
    // eng
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"eng" 
    },
    {
        title:"Проджект-менеджер ",
        name:"Director",
        img:"",
        lang:"eng"
    },
    {
        title:"Innocent",
        name:"Project Manager",
        img:"",
        lang:"eng"
    },
    {
        title:"Innocent",
        name:"Designer",
        img:"",
        lang:"eng"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"eng"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"eng"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"eng"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"eng"
    },
    // uzb
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"uzb"
    },
    {
        title:"Проджект-менеджер ",
        name:"Director",
        img:"",
        lang:"uzb"
    },
    {
        title:"Innocent",
        name:"Loyihalar bo'yicha menejer",
        img:"",
        lang:"uzb"
    },
    {
        title:"Innocent",
        name:"Dizayner",
        img:"",
        lang:"uzb"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"uzb"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"uzb"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"uzb"
    },
    {
        title:"Innocent",
        name:"Director",
        img:"",
        lang:"uzb"
    },
  ]
  return (
    <section className="py-11 bg-#040D12">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2 key={index} className="font-semibold 750px:text-64px 440px:text-4xl text-2xl max-440px:text-center 750px:leading-78px leading-10 text-white mb-8">
                {lan.title}
              </h2>
            );
          }
        })}
        <ul className="grid 950px:grid-cols-4 750px:grid-cols-3 440px:grid-cols-2 gap-y-5">
            {
          ourGroup.map((lan, index)=>{
            if(language === lan.lang){
                return(
                    <li key={index}>
                        <img className="w-full max-w-[120px] mx-auto p-[30px] border border-white rounded-[20px] mb-5" src={lan.img === "" ? ourgroupimg : lan.img} alt="Img" />
                          <h3 className="font-bold text-3xl leading-8 text-#9F95FF text-center">{lan.title}</h3>
                          <p className="font-[300] text-base leading-8 text-white text-center">{lan.name}</p>
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

export default OurGroup;
