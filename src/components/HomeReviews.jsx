import React from "react";

const HomeReviews = ({ language, setLanguage }) => {
  const titleLang = [
    {
      title: "Последние отзывы",
      lang: "ru",
    },
    {
      title: "Latest reviews",
      lang: "eng",
    },
    {
      title: "Eng so'nggi sharhlar",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2 key={index} className="font-semibold text-64px leading-78px text-white">
                {lan.title}
              </h2>
            );
          }
        })}
      </div>
    </section>
  );
};

export default HomeReviews;
