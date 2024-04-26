import React, { useState } from "react";
import axios from "axios";

const Zayavka = ({ language, setLanguage }) => {
  const [channel, setChannel] = useState("");
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [profileName, setProfileName] = useState("");
  const zayavka = [
    {
      title: "Подать заявку",
      lang: "ru",
    },
    {
      title: "Apply now",
      lang: "eng",
    },
    {
      title: "Hozir murojaat qiling",
      lang: "uzb",
    },
  ];
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };
  const handleServicesChange = (event) => {
    setService(event.target.value);
  };
  const handleProfileNameChange = (event) => {
    setProfileName(event.target.value);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    // setNameSend("");
    // setEmailSend("");
    // setMessageSend("");
    // setcontextSend("");
    // setSubjectSend("");
    if (name == "" || channel == "" || service == "" || profileName == "") {
      alert("Iltimos malumotni to'ldiring");
    } else {
      //   setSubject(false);
      const telegram_bot_id = "6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q";
      const chat_id = "5659934636";

      const telegramMessage = `Name: ${name}\nChannel: ${channel}\nServices : ${service}\nProfile name: ${profileName}`;

      axios

        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setChannel("");
          setService("");
          setProfileName("");
        });
      alert("Malumot yuborildi");
    }
  };
  return (
    <section className="bg-#040D12 pt-2.5 h-[70vh]">
      <div className="containerb">
        <div>
          {zayavka.map((lan, index) => {
            if (lan.lang === language) {
              return (
                <h1
                  key={index}
                  className="font-semibold text-[64px] leading-[78px] tracking-[-4%] text-white mb-4"
                >
                  {lan.title}
                </h1>
              );
            }
          })}
        </div>
        <form
          onSubmit={handleSubmitInput}
          className="space-y-4 w-full max-w-[540px]"
        >
          <input
            onChange={handleNameChange}
            value={name}
            className="block py-1.5 pl-4 w-full max-w-[540px] border-white border bg-transparent rounded-[22px] text-white"
            type="search"
            placeholder="Введите ваше имя"
          />
          {/* channel */}
          <select
            onChange={handleChannelChange}
            defaultValue="DEFAULT"
            className="block  bg-transparent optional:font-medium optional:text-base optional:leading-8 optional:bg-#040D12 optional:w-full optional:max-w-[540px] optional:shadow-none  border border-white text-white px-4 py-1.5 w-full max-w-[520px]   rounded-[22px]"
          >
            <option value="DEFAULT" disabled>
              Выберите канал для связи
            </option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Telegram">Telegram</option>
            <option value="Messenger_name">Messenger_name</option>
            <option value="Messenger_name">Messenger_name</option>
            <option value="Messenger_name">Messenger_name</option>
            <option value="Messenger_name">Messenger_name</option>
          </select>

          {/* service */}
          <select
            onChange={handleServicesChange}
            defaultValue="DEFAULT"
            className="block  bg-transparent optional:font-medium optional:text-base optional:leading-8 optional:bg-#040D12 optional:w-full optional:max-w-[540px] optional:shadow-none text-white px-4 py-1.5 w-full max-w-[520px]   rounded-[22px] border-white border "
          >
            <option value="DEFAULT" disabled>
              Выберите услугу
            </option>
            <option value="Мобильная разработка">Мобильная разработка</option>
            <option value="Мобильная разработка">Мобильная разработка</option>
            <option value="Мобильная разработка">Мобильная разработка</option>
            <option value="Мобильная разработка">Мобильная разработка</option>
            <option value="Мобильная разработка">Мобильная разработка</option>
            <option value="Мобильная разработка">Мобильная разработка</option>
          </select>
          {/* profile name */}
          <div className={`${service.length > 0 ? "block" : "hidden"}`}>
            <input
              onChange={handleProfileNameChange}
              type="text"
              value={profileName}
              placeholder="Ваше имя пользователя/телефон"
              className="w-full max-w-[540px] py-1.5 pl-4 border-white border rounded-[22px] bg-transparent text-white"
            />
          </div>
          <button className="block w-full max-w-[123px] ml-auto py-1.5 px-4 font-semibold text-base leading-8 border-2 border-white opacity-[35%] rounded-[22px] text-white ">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Zayavka;
