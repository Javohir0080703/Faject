import React, { useEffect, useState } from "react";
import img1 from "../img/popularservicesimg1.png";
import img2 from "../img/popularservicesimg1.png";
import img3 from "../img/popularservicesimg1.png";
import img4 from "../img/popularservicesimg1.png";
import img5 from "../img/popularservicesimg1.png";
import img6 from "../img/popularservicesimg1.png";
const PopularServices = ({ language, setLanguage }) => {
  const PopularServices = [
    // ru
    {
      id: 1,
      text: "Веб-сайт – это не просто ресурс, на котором компания публикует информацию о себе, своих продуктах и услугах. Это важный инструмент маркетинга, позволяющий компании расширить свою аудиторию, привлечь новых клиентов и партнеров, а также укрепить свои позиции на рынке.",
      img: img1,
      lang: "ru",
    },
    {
      id: 2,
      text: "Веб-сайт –  о себе, своих продуктах и услугах. Это важный инструмент маркетинга, позволяющий компании расширить свою аудиторию, привлечь новых клиентов и партнеров, а также укрепить свои это не просто ресурс, на котором компания публикует информацию позиции на рынке.",
      img: img2,
      lang: "ru",
    },
    {
      id: 3,
      text: "Веб-сайт – это не просто ресурс,  и услугах. Это важный инструмент маркетинга, позволяющий компании расширить свою аудиторию, привлечь новых клиентов и партнеров, а также на котором компания публикует информацию о себе, своих продуктах укрепить свои позиции на рынке.",
      img: img3,
      lang: "ru",
    },
    {
      id: 4,
      text: "Веб-сайт – это не просто ресурс, позволяющий компании расширить свою аудиторию, привлечь на котором компания публикует информацию о себе, своих продуктах и услугах. Это важный инструмент маркетинга,  новых клиентов и партнеров, а также укрепить свои позиции на рынке.",
      img: img4,
      lang: "ru",
    },
    {
      id: 5,
      text: "Веб-сайт своих продуктах  – это не просто ресурс, на котором компания публикует информацию о себе, и услугах. Это важный инструмент маркетинга, позволяющий компании расширить свою аудиторию, привлечь новых клиентов и партнеров, а также укрепить свои позиции на рынке.",
      img: img5,
      lang: "ru",
    },
    {
      id: 6,
      text: "Веб-сайт – позволяющий компании расширить свою аудиторию, это не просто ресурс, на котором компания публикует информацию о себе, своих продуктах и услугах. Это важный инструмент маркетинга,  привлечь новых клиентов и партнеров, а также укрепить свои позиции на рынке.",
      img: img6,
      lang: "ru",
    },
    // eng
    {
      id: 1,
      text: "A website is not just a resource on which a company publishes information about itself, its products and services. This is an important marketing tool that allows a company to expand its audience, attract new clients and partners, and strengthen its position in the market.",
      img: img1,
      lang: "eng",
    },
    {
      id: 2,
      text: "Website – about yourself, your products and services. This is an important marketing tool that allows a company to expand its audience, attract new clients and partners, and strengthen its own. It is not just a resource on which the company publishes information about its position in the market.",
      img: img2,
      lang: "eng",
    },
    {
      id: 3,
      text: "A website is not just a resource and a service. This is an important marketing tool that allows the company to expand its audience, attract new clients and partners, and also on which the company publishes information about itself and its products to strengthen its position in the market.",
      img: img3,
      lang: "eng",
    },
    {
      id: 4,
      text: "A website is not just a resource that allows a company to expand its audience and attract where the company publishes information about itself, its products and services. This is an important marketing tool, attracting new clients and partners, as well as strengthening your position in the market.",
      img: img4,
      lang: "eng",
    },
    {
      id: 5,
      text: "A website for its products is not just a resource on which a company publishes information about itself and services. This is an important marketing tool that allows a company to expand its audience, attract new clients and partners, and strengthen its position in the market.",
      img: img5,
      lang: "eng",
    },
    {
      id: 6,
      text: "A website allows a company to expand its audience; it is not just a resource on which the company publishes information about itself, its products and services. This is an important marketing tool to attract new customers and partners, as well as strengthen your position in the market.",
      img: img6,
      lang: "eng",
    },
    // uzb
    {
      id: 1,
      text: "Veb-sayt shunchaki kompaniya o'zi, mahsulot va xizmatlari haqida ma'lumot nashr etadigan manba emas. Bu kompaniyaga o'z auditoriyasini kengaytirish, yangi mijozlar va hamkorlarni jalb qilish, bozorda o'z mavqeini mustahkamlash imkonini beruvchi muhim marketing vositasidir.",
      img: img1,
      lang: "uzb",
    },
    {
      id: 2,
      text: "Veb-sayt - o'zingiz, mahsulot va xizmatlaringiz haqida. Bu kompaniyaga o'z auditoriyasini kengaytirish, yangi mijozlar va hamkorlarni jalb qilish va o'zini mustahkamlash imkonini beradigan muhim marketing vositasidir.",
      img: img2,
      lang: "uzb",
    },
    {
      id: 3,
      text: "Veb-sayt shunchaki resurs va xizmat emas. Bu kompaniyaga o'z auditoriyasini kengaytirish, yangi mijozlar va hamkorlarni jalb qilish imkonini beruvchi muhim marketing vositasi bo'lib, bozorda o'z mavqeini mustahkamlash uchun kompaniya o'zi va mahsulotlari haqida ma'lumotlarni nashr etadi.",
      img: img3,
      lang: "uzb",
    },
    {
      id: 4,
      text: "Veb-sayt kompaniyaga o'z auditoriyasini kengaytirish va kompaniyaning o'zi, mahsulot va xizmatlari haqida ma'lumot nashr etadigan joyni jalb qilish imkonini beradigan resurs emas. Bu muhim marketing vositasi bo'lib, yangi mijozlar va hamkorlarni jalb qilish, shuningdek, bozordagi mavqeingizni mustahkamlaydi.",
      img: img4,
      lang: "uzb",
    },
    {
      id: 5,
      text: "O'z mahsulotlari uchun veb-sayt shunchaki kompaniya o'zi va xizmatlari haqida ma'lumot nashr etadigan resurs emas. Bu kompaniyaga o'z auditoriyasini kengaytirish, yangi mijozlar va hamkorlarni jalb qilish, bozorda o'z mavqeini mustahkamlash imkonini beruvchi muhim marketing vositasidir.",
      img: img5,
      lang: "uzb",
    },
    {
      id: 6,
      text: "Veb-sayt kompaniyaga o'z auditoriyasini kengaytirish imkonini beradi, bu nafaqat kompaniyaning o'zi, uning mahsulotlari va xizmatlari haqida ma'lumotni nashr etadigan manba. Bu yangi mijozlar va hamkorlarni jalb qilish, shuningdek, bozordagi mavqeingizni mustahkamlash uchun muhim marketing vositasidir.",
      img: img6,
      lang: "uzb",
    },
  ];
  const [activeTab, setActiveTab] = useState(PopularServices[0].id);

  useEffect(() => {
    setActiveTab(PopularServices[0].id);
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <section className="py-[66px] bg-#040D12">
      <div className="containerb 1030px:flex items-center justify-between">
        <div>
          {/* ru */}
          <ul className={`1030px:space-y-4 ${language === "ru" ? "1030px:block" : "hidden"}  flex items-center  1030px:scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[0].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[0].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Разработка веб-сайта
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[1].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[1].id
                    ? "bg-#9F95FF"
                    : "border-white border-2 "
                }`}
              >
                Разработка бота
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[2].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[2].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                SMM
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[3].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[3].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                SEO
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[4].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[4].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Мобильная разработка
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[5].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[5].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Контекстная реклама
              </button>
            </li>
          </ul>
          {/* eng */}
          <ul className={`1030px:space-y-4 ${language === "eng" ? "1030px:block" : "hidden"}  flex items-center  1030px:scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[0].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[0].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Website development
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[1].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[1].id
                    ? "bg-#9F95FF"
                    : "border-white border-2 "
                }`}
              >
                Bot development
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[2].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[2].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                SMM
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[3].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[3].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                SEO
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[4].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[4].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Mobile development
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[5].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[5].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Contextual Advertising
              </button>
            </li>
          </ul>
          {/* uzb */}
          <ul className={`1030px:space-y-4 ${language === "uzb" ? "1030px:block" : "hidden"}  flex items-center  1030px:scroll-container whitespace-nowrap mb-5 space-x-1 pb-3`}>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[0].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[0].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Veb-sayt ishlab chiqish
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[1].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[1].id
                    ? "bg-#9F95FF"
                    : "border-white border-2 "
                }`}
              >
                Botni rivojlantirish
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[2].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[2].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                SMM
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[3].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[3].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                SEO
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[4].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[4].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
                Mobil rivojlanish
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick(PopularServices[5].id)}
                className={`py-1.5 px-4 rounded-[22px] font-semibold text-base leading-8 tracking-[-1%] text-white ${
                  activeTab === PopularServices[5].id
                    ? "bg-#9F95FF"
                    : "border-white border-2"
                }`}
              >
              Kontekstli Reklama
              </button>
            </li>
          </ul>
        </div>

        <ul>
          {PopularServices.map((lan, index) => {
            if (language === lan.lang) {
              return (
                <li
                key={index}
                  className={`${
                    activeTab === lan.id ? "" : "hidden"
                  } w-full max-w-[730px]`}
                >
                  <img className="mb-6" src={lan.img} alt="Img" />
                  <p className="text-white text-base md:text-2xl leading-4 md:leading-8">{lan.text}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default PopularServices;
