import React from "react";
import ServicesNav from "../components/ServicesNav";

const Site_development = ({ language, setLanguage }) => {
  return (
    <section className="pt-[66px]">
      <div className="containerb">
        <h1 className="text-6xl leading-[78px] font-semibold mb-8 text-white">
          Услуги
        </h1>
        <div>
          <ServicesNav language={language} setLanguage={setLanguage} />
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Site_development;
