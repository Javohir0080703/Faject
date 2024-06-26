import React, { useEffect, useState } from "react";
import { PortfolioData } from "../data";
import { Link } from "react-router-dom";
const Portfolio = ({ language }) => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab("developing");
  }, []);

  const handleTabClick = (tip) => {
    setActiveTab(tip);
  };
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        <div
          className={`flex max-950px:justify-center 440px:space-x-4 space-x-2 mb-5 ${
            language === "ru" ? "" : "hidden"
          }`}
        >
          <button
            className={`flex items-center 580px:y-2 580px:px-4 px-2.5 rounded-[22px] 440px:font-semibold font-normal 580px:text-base 440px:text-sm  380px:text-xs text-[9px] leading-8  text-white ${
              activeTab === "developing" ? "bg-#9F95FF" : "border-2"
            }`}
            onClick={() => handleTabClick("developing")}
          >
            <svg
              className="380px:mr-2 mr-1 580px:w-[32px] w-[16px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1376 21.1953C17.6724 21.3834 17.2072 21.5244 16.649 21.5714C13.2531 21.9476 10.4155 19.2676 10.4155 15.9295C10.4155 15.3653 10.5085 14.8011 10.648 14.2369C10.7411 14.0018 11.0202 13.9548 11.1598 14.0958L14.3231 17.2929C14.5557 17.528 14.9278 17.528 15.2069 17.2929L17.4398 15.0362C17.6724 14.8011 17.6724 14.425 17.4398 14.1429L14.2765 10.9458C14.137 10.7577 14.1835 10.4756 14.4161 10.4286C14.9278 10.2875 15.486 10.1935 16.0443 10.1935C19.3471 10.1935 21.9987 13.0615 21.6266 16.4937C21.58 17.0108 21.4405 17.481 21.2544 17.9982L27.1158 23.9222C28.9301 21.7595 30 18.9855 30 16.0235C29.9535 8.73599 23.7199 3 15.9977 3C8.22905 3 2.04201 8.783 2.04201 15.8825C2.04201 18.1392 2.69328 20.255 3.7167 22.1356C3.90278 22.4177 3.94929 22.7939 3.85626 23.123L2.04201 28.1537C1.85593 28.6239 2.32113 29.047 2.78632 28.906L7.8569 26.9783C8.13601 26.8373 8.50817 26.9313 8.8338 27.1193C10.9272 28.2948 13.4392 29 16.1373 29C18.9285 28.953 21.5335 28.1537 23.7199 26.8373L18.1376 21.1953Z"
                fill="#ffffff"
              />
            </svg>
            В разработке
          </button>
          <button
            className={`flex items-center 580px:py-2 580px:px-4 px-2.5 rounded-[22px] 440px:font-semibold font-normal 580px:text-base 440px:text-sm 380px:text-xs text-[9px] leading-8  text-white ${
              activeTab === "Completed projects" ? "bg-#9F95FF" : "border-2"
            }`}
            onClick={() => handleTabClick("Completed projects")}
          >
            <svg
              className="380px:mr-2 mr-1 580px:w-[32px] w-[16px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 28C22.6275 28 28 22.6275 28 16C28 13.5555 27.2691 11.2817 26.0137 9.38521L16.4733 19.9857C15.5499 21.0119 13.9957 21.1635 12.8913 20.3351L8.53333 17.0667C7.94423 16.6248 7.82484 15.7891 8.26667 15.2C8.70849 14.6109 9.54423 14.4915 10.1333 14.9333L14.4912 18.2017L24.2853 7.3194C22.1315 5.26289 19.2132 4 16 4C9.37259 4 4 9.37259 4 16C4 22.6275 9.37259 28 16 28Z"
                fill="white"
              />
            </svg>
            Выполненнные проекты
          </button>
        </div>
        <div
          className={`flex max-950px:justify-center 440px:space-x-4 space-x-2 mb-5 ${
            language === "eng" ? "" : "hidden"
          }`}
        >
          <button
            className={`flex items-center 580px:y-2 580px:px-4 px-2.5 rounded-[22px] 440px:font-semibold font-normal 580px:text-base 440px:text-sm  380px:text-xs text-[9px] leading-8  text-white ${
              activeTab === "developing" ? "bg-#9F95FF" : "border-2"
            }`}
            onClick={() => handleTabClick("developing")}
          >
            <svg
              className="380px:mr-2 mr-1 580px:w-[32px] w-[16px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1376 21.1953C17.6724 21.3834 17.2072 21.5244 16.649 21.5714C13.2531 21.9476 10.4155 19.2676 10.4155 15.9295C10.4155 15.3653 10.5085 14.8011 10.648 14.2369C10.7411 14.0018 11.0202 13.9548 11.1598 14.0958L14.3231 17.2929C14.5557 17.528 14.9278 17.528 15.2069 17.2929L17.4398 15.0362C17.6724 14.8011 17.6724 14.425 17.4398 14.1429L14.2765 10.9458C14.137 10.7577 14.1835 10.4756 14.4161 10.4286C14.9278 10.2875 15.486 10.1935 16.0443 10.1935C19.3471 10.1935 21.9987 13.0615 21.6266 16.4937C21.58 17.0108 21.4405 17.481 21.2544 17.9982L27.1158 23.9222C28.9301 21.7595 30 18.9855 30 16.0235C29.9535 8.73599 23.7199 3 15.9977 3C8.22905 3 2.04201 8.783 2.04201 15.8825C2.04201 18.1392 2.69328 20.255 3.7167 22.1356C3.90278 22.4177 3.94929 22.7939 3.85626 23.123L2.04201 28.1537C1.85593 28.6239 2.32113 29.047 2.78632 28.906L7.8569 26.9783C8.13601 26.8373 8.50817 26.9313 8.8338 27.1193C10.9272 28.2948 13.4392 29 16.1373 29C18.9285 28.953 21.5335 28.1537 23.7199 26.8373L18.1376 21.1953Z"
                fill="#ffffff"
              />
            </svg>
            In developing
          </button>
          <button
            className={`flex items-center 580px:py-2 580px:px-4 px-2.5 rounded-[22px] 440px:font-semibold font-normal 580px:text-base 440px:text-sm 380px:text-xs text-[9px] leading-8  text-white ${
              activeTab === "Completed projects" ? "bg-#9F95FF" : "border-2"
            }`}
            onClick={() => handleTabClick("Completed projects")}
          >
            <svg
              className="380px:mr-2 mr-1 580px:w-[32px] w-[16px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 28C22.6275 28 28 22.6275 28 16C28 13.5555 27.2691 11.2817 26.0137 9.38521L16.4733 19.9857C15.5499 21.0119 13.9957 21.1635 12.8913 20.3351L8.53333 17.0667C7.94423 16.6248 7.82484 15.7891 8.26667 15.2C8.70849 14.6109 9.54423 14.4915 10.1333 14.9333L14.4912 18.2017L24.2853 7.3194C22.1315 5.26289 19.2132 4 16 4C9.37259 4 4 9.37259 4 16C4 22.6275 9.37259 28 16 28Z"
                fill="white"
              />
            </svg>
            Completed projects
          </button>
        </div>
        <div
          className={`flex max-950px:justify-center 440px:space-x-4 space-x-2 mb-5 ${
            language === "uzb" ? "" : "hidden"
          }`}
        >
          <button
            className={`flex items-center 580px:y-2 580px:px-4 px-2.5 rounded-[22px] 440px:font-semibold font-normal 580px:text-base 440px:text-sm  380px:text-xs text-[9px] leading-8  text-white ${
              activeTab === "developing" ? "bg-#9F95FF" : "border-2"
            }`}
            onClick={() => handleTabClick("developing")}
          >
            <svg
              className="380px:mr-2 mr-1 580px:w-[32px] w-[16px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1376 21.1953C17.6724 21.3834 17.2072 21.5244 16.649 21.5714C13.2531 21.9476 10.4155 19.2676 10.4155 15.9295C10.4155 15.3653 10.5085 14.8011 10.648 14.2369C10.7411 14.0018 11.0202 13.9548 11.1598 14.0958L14.3231 17.2929C14.5557 17.528 14.9278 17.528 15.2069 17.2929L17.4398 15.0362C17.6724 14.8011 17.6724 14.425 17.4398 14.1429L14.2765 10.9458C14.137 10.7577 14.1835 10.4756 14.4161 10.4286C14.9278 10.2875 15.486 10.1935 16.0443 10.1935C19.3471 10.1935 21.9987 13.0615 21.6266 16.4937C21.58 17.0108 21.4405 17.481 21.2544 17.9982L27.1158 23.9222C28.9301 21.7595 30 18.9855 30 16.0235C29.9535 8.73599 23.7199 3 15.9977 3C8.22905 3 2.04201 8.783 2.04201 15.8825C2.04201 18.1392 2.69328 20.255 3.7167 22.1356C3.90278 22.4177 3.94929 22.7939 3.85626 23.123L2.04201 28.1537C1.85593 28.6239 2.32113 29.047 2.78632 28.906L7.8569 26.9783C8.13601 26.8373 8.50817 26.9313 8.8338 27.1193C10.9272 28.2948 13.4392 29 16.1373 29C18.9285 28.953 21.5335 28.1537 23.7199 26.8373L18.1376 21.1953Z"
                fill="#ffffff"
              />
            </svg>
            Rivojlanishda
          </button>
          <button
            className={`flex items-center 580px:py-2 580px:px-4 px-2.5 rounded-[22px] 440px:font-semibold font-normal 580px:text-base 440px:text-sm 380px:text-xs text-[9px] leading-8  text-white ${
              activeTab === "Completed projects" ? "bg-#9F95FF" : "border-2"
            }`}
            onClick={() => handleTabClick("Completed projects")}
          >
            <svg
              className="380px:mr-2 mr-1 580px:w-[32px] w-[16px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 28C22.6275 28 28 22.6275 28 16C28 13.5555 27.2691 11.2817 26.0137 9.38521L16.4733 19.9857C15.5499 21.0119 13.9957 21.1635 12.8913 20.3351L8.53333 17.0667C7.94423 16.6248 7.82484 15.7891 8.26667 15.2C8.70849 14.6109 9.54423 14.4915 10.1333 14.9333L14.4912 18.2017L24.2853 7.3194C22.1315 5.26289 19.2132 4 16 4C9.37259 4 4 9.37259 4 16C4 22.6275 9.37259 28 16 28Z"
                fill="white"
              />
            </svg>
            Tugallangan loyihalar
          </button>
        </div>

        <ul className="">
          {PortfolioData.map((e, index) => {
            if (language === e.lang) {
              return (
                <li
                  key={index}
                  className={`${
                    activeTab === e.tip ? "" : "hidden"
                  } flex max-860px:flex-col items-center 860px:justify-between mb-20`}
                >
                  <img
                    className={`${
                      index % 2 === 0 ? "860px:hidden" : ""
                    } w-full 1030px:max-w-[500px] 531px:max-w-[350px] max-w-[250px] 860px:mr-14`}
                    src={e.img}
                    alt="Img"
                  />
                  <div className="w-full max-w-[530px]">
                    <h3 className="font-bold 950px:text-3xl text-2xl leading-8 max-860px:text-center  text-#9F95FF mb-5">
                      {e.title}
                    </h3>
                    <p className="950px:font-bold font-semibold 950px:text-base max-860px:text-center text-sm 950px:leading-8 leading-6 text-white mb-5">
                      {e.text}
                    </p>
                    <div className="max-860px:flex justify-center">
                      <Link
                      to={`/portfolio/${e.id}`}
                        className={`${
                          language === "ru" ? "" : "hidden"
                        } py-1.5 px-5 border-2 rounded-[22px] font-semibold text-base leading-8 text-white inline-block`}
                      >
                        Подробнее
                      </Link>
                      <Link
                      to={`/portfolio/${e.id}`}
                        className={`${
                          language === "eng" ? "" : "hidden"
                        } py-1.5 px-5 border-2 rounded-[22px] font-semibold text-base leading-8 text-white inline-block`}
                      >
                        More details
                      </Link>
                      <Link
                      to={`/portfolio/${e.id}`}
                        className={`${
                          language === "uzb" ? "" : "hidden"
                        } py-1.5 px-5 border-2 rounded-[22px] font-semibold text-base leading-8 text-white inline-block`}
                      >
                        Batafsil ma'lumot
                      </Link>
                    </div>
                  </div>
                  <img
                    className={`${
                      index % 2 === 0 ? "max-860px:hidden" : "hidden"
                    } w-full 1030px:max-w-[500px] 531px:max-w-[350px] max-w-[250px] 860px:ml-14`}
                    src={e.img}
                    alt="Img"
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
