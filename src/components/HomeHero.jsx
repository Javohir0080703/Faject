import React from "react";
import homeHeroImg from "../img/homeHeroImg.png";
import HomeHero2 from '../img/HomeHero2.png'
import { Link } from "react-router-dom";

const HomeHero = ({language,setLanguage}) => {
  const homeHeroLang = [
    {
      title: "Faject",
      text: "Мы помогаем компаниям создавать сервисы и сайты для людей. Делаем бизнес комфортным и удобным в общении с клиентами так, чтобы это было выгодно.",
      button: "Заказать проект",
      lang: "ru",
    },
    {
      title: "Faject",
      text: "We help companies create services and websites for people. We make business comfortable and convenient in communicating with clients in a way that is profitable.",
      button: "Order a project",
      lang: "eng",
    },
    {
      title: "Faject",
      text: "Biz kompaniyalarga odamlar uchun xizmatlar va veb-saytlar yaratishda yordam beramiz. Biz biznesni mijozlar bilan foydali tarzda muloqot qilishda qulay va qulay qilamiz.",
      button: "Loyihaga buyurtma bering",
      lang: "uzb",
    },
  ];
  return (
    <section className="bg-#040D12 pb-[50px]">
      <div className="containerb block 1030px:flex items-end justify-between">
      <img className="1030px:hidden block w-full max-w-[654px] mx-auto" src={HomeHero2} alt="homeHeroImg" />
        <div>
            {
                homeHeroLang.map((lan, index)=>{
                    if(language === lan.lang){
                        return(
                            <div key={index} className="w-full max-w-[600px]">
                                <h1 className="font-extrabold text-[58px] sm:text-[108px] leading-[87px] sm:leading-[161px] text-white mb-1.5 sm:mb-6 ">{lan.title}</h1>
                                <p className="sm:text-2xl text-base leading-6 sm:leading-8 mb-6 text-white ">{lan.text}</p>
                                <Link to="/apply" className=" py-4 px-4 text-white border-#9F95FF border-2 rounded-[22px] ">{lan.button}</Link>
                            </div>
                        )
                    }
                })
            }
        </div>
        <img className="1030px:block hidden" src={homeHeroImg} alt="homeHeroImg" />
      </div>
    </section>
  );
};

export default HomeHero;
