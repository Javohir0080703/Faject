import React from "react";
import accardionOpen from '../img/accardionOpen.svg'
import accardionClose from '../img/accardionClose.svg'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Icon({ id, open }) {
  return (
  <img className="750px:min-w-[24px] min-w-[20px]"  src={id === open ? accardionClose : accardionOpen} alt="" />
  );
}
import { AccardionData } from "../data";
const Accardion = ({ language, setLanguage }) => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const titleLang = [
    {
      title: "FAQ",
      lang: "ru",
    },
    {
      title: "FAQ",
      lang: "eng",
    },
    {
      title: "TSS",
      lang: "uzb",
    },
  ];
  return (
    <section className="py-16 bg-#040D12 ">
      <div className="containerb">
        {titleLang.map((lan, index) => {
          if (language === lan.lang) {
            return (
              <h2
                key={index}
                className="font-semibold 750px:text-64px text-4xl 750px:leading-78px leading-10 max-750px:text-center tracking-[-4%] text-white mb-8"
              >
                {lan.title}
              </h2>
            );
          }
        })}

        <div>
          {AccardionData.map((faq, index) => {
            if (language === faq.lang) {
              return (
                <Accordion
                  key={index}
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                >
                  <AccordionHeader
                    className="text-white 950px:text-2xl 750px:text-lg text-sm 750px:leading-8 leading-5 pt-1.5 pl-4 950px:pb-5 pb-3 border-b-2 border-#9F95FF "
                    onClick={() => handleOpen(index)}
                  >
                    {faq.title}
                  </AccordionHeader>
                  <AccordionBody
                    onClick={() => handleOpen(index)}
                    className={`font-medium pl-[34px] text-white text-xs 750px:text-base 750px:leading-8 leading-5  ${
                      open === index ? "" : "hidden"
                    }`}
                  >
                    <div>
                      {faq.text.map((e, index) => {
                        return <p key={index}>{e}</p>;
                      })}
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Accardion;
