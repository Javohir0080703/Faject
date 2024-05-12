import React from "react";
import { lastReporterData } from "../data";
import { Link, useParams } from "react-router-dom";

const LastReporterDetail = ({ language, setLanguage }) => {
  const Language = [
    {
      title:"К другим  новостям...",
      lang:"ru"
    },
    {
      title:"In other news...",
      lang:"eng"
    },
    {
      title:"Boshqa yangiliklarda ...",
      lang:"uzb"
    },
  ]
  const { id } = useParams();
  const detail = lastReporterData.find((last) => last.id.toString() === id);
  return (
    <section>
      {/* hero */}
      <div
        className="bg-cover bg-center h-[700px] w-full"
        style={{ backgroundImage: `url(${detail.img})` }}
      >
        <div className="containerb">
          <div className="pt-[206px] pb-[176px] ">
             <h4 className="text-white 531px:text-2xl text-lg 531px:leading-8 leading-5 mb-8">{detail.data}</h4>
             <h2 className="font-semibold 950px:text-64px 750px:text-5xl 440px:text-3xl text-xl 750px:leading-78px  440px:leading-10 leading-7 tracking-[-4%] text-white mb-8 ">{detail.title}</h2>
             <p className="w-full max-w-[850px] text-white font-medium  750px:text-base 440px:text-sm text-xs 750px:leading-8 leading-6">{detail.text}</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-#040D12">
        <div className="containerb space-y-8">
            <div>
              <h3 className="font-bold 531px:text-3xl text-xl 531px:leading-9 leading-6 tracking-[-1%] text-white mb-4">{detail.articles}</h3>
              <ul className="pl-12 mb-8">
                {
                  detail.articlesText.map((e, index)=>{return(<li className="list-number-style font-medium 531px:text-base text-xs 531px:leading-8  tracking-[-1%] text-white" key={index}>{e}</li>)})
                }
              </ul>
            </div>
            <div>
              <h3 className="font-bold 531px:text-3xl text-xl 531px:leading-9 leading-6 tracking-[-1%] text-#9F95FF mb-4">{detail.why}</h3>
              <p className="font-medium 531px:text-base text-xs leading-8 text-white ">{detail.whyText}</p>
              <ul className="pl-12 mb-8">
                {
                  detail.aboutWhy.map((e, index)=>{return(<li className="list-number-style font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-white" key={index}>{e}</li>)})
                }
              </ul>
            </div>
            <div>
              <h3 className="font-bold 531px:text-3xl text-xl 531px:leading-9 leading-6 tracking-[-1%] text-#9F95FF mb-4">{detail.etap}</h3>
              <p  className="list-number-style font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-white">{detail.etapText}</p>
            </div>
            <div>
              <h3 className="font-bold 531px:text-3xl text-xl 531px:leading-9 leading-6 tracking-[-1%] text-#9F95FF mb-4">{detail.kulayliklar}</h3>
              <p  className="list-number-style font-medium 531px:text-base text-xs leading-8 tracking-[-1%] text-white">{detail.kulayliklarText}</p>
            </div>
            <div className="flex justify-end">
             {
              Language.map((e, index)=>{
                if(language === e.lang){
                  return(
                    <Link key={index} to="/blog" className="531px:py-1.5 531px:px-4 px-2.5 font-semibold 531px:text-base text-sm  leading-8 tracking-[-1%] text-white border-2 border-#CBC6FD rounded-[22px]">{e.title}</Link>
                  )
                }
              })
             }
            </div>
        </div>
      </div>
    </section>
  );
};

export default LastReporterDetail;
