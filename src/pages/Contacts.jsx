import React from "react";

const Contacts = ({ language, setLanguage }) => {
  return (
    <section className="py-16 bg-#040D12">
      <div className="containerb">
        <ul className={`${language === "ru" ? "" : "hidden"} flex items-center justify-between flex-wrap `}>
          <li className="w-full max-w-[264px] h-[200px]  space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
              Директор:
            </h3>
            <p className="text-white text-base leading-8 font-medium">
              John Doe
            </p>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Техподдержка:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Web-отдел:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            График работы:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
              Пн-Чт: с 9:00 до 18:00
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Пт: с 9:00 до 17:00
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Сб-Вс: Выходной
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4 ">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Реквизиты:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
              ИНН 1234123412
              </p>
              <p className="text-white text-base leading-8 font-medium">
              КПП 123412345
              </p>
              <p className="text-white text-base leading-8 font-medium">
              ОГРН 1234123412341
              </p>\  <p className="text-white text-base leading-8 font-medium">
              P/c 12341234123412341234
              </p>
            </div>
          </li>
        </ul>
        <ul className={`${language === "eng" ? "" : "hidden"} flex items-center justify-between flex-wrap `}>
          <li className="w-full max-w-[264px] h-[200px]  space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Director:
            </h3>
            <p className="text-white text-base leading-8 font-medium">
              John Doe
            </p>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Technical support:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Web department:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Schedule:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
              Mon-Thu: с 9:00 до 18:00
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Fri: с 9:00 до 17:00
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Sat-Sun: Выходной
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4 ">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Requisites:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
              TIN 1234123412
              </p>
              <p className="text-white text-base leading-8 font-medium">
              checkpoint 123412345
              </p>
              <p className="text-white text-base leading-8 font-medium">
              OGRN 1234123412341
              </p>\  <p className="text-white text-base leading-8 font-medium">
              P/c 12341234123412341234
              </p>
            </div>
          </li>
        </ul>
        <ul className={`${language === "uzb" ? "" : "hidden"} flex items-center justify-between flex-wrap `}>
          <li className="w-full max-w-[264px] h-[200px]  space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Direktor:
            </h3>
            <p className="text-white text-base leading-8 font-medium">
              John Doe
            </p>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Texnik yordam:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Veb-bo'lim:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
                +7 (3519) 533-890
              </p>
              <p className="text-white text-base leading-8 font-medium">
                faject@studio.pro
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Ish grafigi:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
              Dushanbadan payshanbagacha:9:00 dan 18:00 gacha
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Juma: 9:00 dan 17:00 gacha
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Shanba-Yakshanba: Dam olish kuni
              </p>
            </div>
          </li>
          <li className="w-full max-w-[264px] h-[200px] space-y-4 ">
            <h3 className="font-bold text-3xl leading-8 text-#9F95FF">
            Rekvizitlar:
            </h3>
            <div>
              <p className="text-white text-base leading-8 font-medium">
              TIN 1234123412
              </p>
              <p className="text-white text-base leading-8 font-medium">
              Nazorat punkti 123412345
              </p>
              <p className="text-white text-base leading-8 font-medium">
              OGRN 1234123412341
              </p>\  <p className="text-white text-base leading-8 font-medium">
              P/c 12341234123412341234
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
