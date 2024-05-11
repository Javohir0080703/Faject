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
             <h4 className="text-white text-2xl leading-8 mb-8">{detail.data}</h4>
             <h2 className="font-semibold text-64px leading-78px  tracking-[-4%] text-white mb-8 ">{detail.title}</h2>
             <p className="w-full max-w-[850px] text-white font-medium  text-base leading-8">{detail.text}</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-#040D12">
        <div className="containerb space-y-8">
            <div>
              <h3 className="font-bold text-3xl leading-9 tracking-[-1%] text-white mb-4">{detail.articles}</h3>
              <ul className="pl-12 mb-8">
                {
                  detail.articlesText.map((e, index)=>{return(<li className="list-number-style font-medium text-base leading-8 tracking-[-1%] text-white" key={index}>{e}</li>)})
                }
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-3xl leading-9 tracking-[-1%] text-#9F95FF mb-4">{detail.why}</h3>
              <p className="font-medium text-base leading-8 text-white ">{detail.whyText}</p>
              <ul className="pl-12 mb-8">
                {
                  detail.aboutWhy.map((e, index)=>{return(<li className="list-number-style font-medium text-base leading-8 tracking-[-1%] text-white" key={index}>{e}</li>)})
                }
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-3xl leading-9 tracking-[-1%] text-#9F95FF mb-4">{detail.etap}</h3>
              <p  className="list-number-style font-medium text-base leading-8 tracking-[-1%] text-white">{detail.etapText}</p>
            </div>
            <div>
              <h3 className="font-bold text-3xl leading-9 tracking-[-1%] text-#9F95FF mb-4">{detail.kulayliklar}</h3>
              <p  className="list-number-style font-medium text-base leading-8 tracking-[-1%] text-white">{detail.kulayliklarText}</p>
            </div>
            <div className="flex justify-end">
             {
              Language.map((e, index)=>{
                if(language === e.lang){
                  return(
                    <Link to="/blog" className="py-1.5 px-4 font-semibold text-base leading-8 tracking-[-1%] text-white border-2 border-#CBC6FD rounded-[22px]">{e.title}</Link>
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
