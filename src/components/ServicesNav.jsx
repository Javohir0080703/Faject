import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Bot_development from "../img/Bot_development.svg";
import SEO from "../img/SEO.svg";
import SMM from "../img/SMM.svg";
import contextual_advertising from "../img/contextual_advertising.svg";
import mobile_development from "../img/mobile-development.svg";
import web_svg from "../img/web-svg.svg";
const ServicesNav = ({ language, setLanguage }) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);
  return (
    <section>
      <div className="containerb">
        <div className={`${language === "ru" ? "" : "hidden"}`}>
          <ul className="flex-1 space-y-4">
            <li className=" ">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/site_development"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/site_development"
              >
                <div className="flex items-center">
                  <img
                    className="mr-1.5 "
                    src={Bot_development}
                    alt="Bot_development"
                  />
                  Разработка бота
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/seo"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={SEO} alt="Bot_development" />
                  SEO
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/smm"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={SMM} alt="Bot_development" />
                  SMM
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/contextual_advertising"
              >
                <div className="flex items-center">
                  {" "}
                  <img
                    className="mr-1.5"
                    src={contextual_advertising}
                    alt="Bot_development"
                  />
                  Контекстная реклама
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/mobile_development"
              >
                <div className="flex items-center">
                  {" "}
                  <img
                    className="mr-1.5"
                    src={mobile_development}
                    alt="Bot_development"
                  />
                  Мобильная разработка
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/website_development"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={web_svg} alt="Bot_development" />
                  Разработка веб-сайта
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`${language === "eng" ? "" : "hidden"}`}>
          <ul className="flex-1 space-y-4">
            <li className=" ">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/site_development"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/site_development"
              >
                <div className="flex items-center">
                  <img
                    className="mr-1.5 "
                    src={Bot_development}
                    alt="Bot_development"
                  />
                  Bot development
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/seo"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={SEO} alt="Bot_development" />
                  SEO
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/smm"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={SMM} alt="Bot_development" />
                  SMM
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/contextual_advertising"
              >
                <div className="flex items-center">
                  {" "}
                  <img
                    className="mr-1.5"
                    src={contextual_advertising}
                    alt="Bot_development"
                  />
                  Contextual advertising
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/mobile_development"
              >
                <div className="flex items-center">
                  {" "}
                  <img
                    className="mr-1.5"
                    src={mobile_development}
                    alt="Bot_development"
                  />
                  Mobile development
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/website_development"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={web_svg} alt="Bot_development" />
                  Website development
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`${language === "uzb" ? "" : "hidden"}`}>
          <ul className="flex-1 space-y-4">
            <li className=" ">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/site_development"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/site_development"
              >
                <div className="flex items-center">
                  <img
                    className="mr-1.5 "
                    src={Bot_development}
                    alt="Bot_development"
                  />
                  Botni rivojlantirish
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/seo"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={SEO} alt="Bot_development" />
                  SEO
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/smm"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={SMM} alt="Bot_development" />
                  SMM
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/contextual_advertising"
              >
                <div className="flex items-center">
                  {" "}
                  <img
                    className="mr-1.5"
                    src={contextual_advertising}
                    alt="Bot_development"
                  />
                  Kontekstli reklama
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/mobile_development"
              >
                <div className="flex items-center">
                  {" "}
                  <img
                    className="mr-1.5"
                    src={mobile_development}
                    alt="Bot_development"
                  />
                  Mobil rivojlanish
                </div>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={`text-base font-semibold leading-8 text-white  py-2 px-[18px] rounded-3xl inline-block ${
                  activePath === "/seo"
                    ? "bg-#9F95FF "
                    : "bg-transparent border-2 border-white"
                }`}
                to="/website_development"
              >
                <div className="flex items-center">
                  {" "}
                  <img className="mr-1.5" src={web_svg} alt="Bot_development" />
                  Veb-sayt ishlab chiqish
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesNav;
