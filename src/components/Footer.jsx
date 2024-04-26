import React from "react";
import { Link } from "react-router-dom";
import instagram from "../img/Instagram.svg";
import watstapp from "../img/WhatsApp.svg";
import telegram from "../img/Telegram.svg";
const Footer = ({ language, setLanguage }) => {
  const getLang = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <footer className="bg-#040D12 py-8 ">
      <div className="containerb">
        <div className="860px:hidden flex justify-between items-center mb-5">
          <div className="bg-#040D12  text-white leading-8 text-sm font-semibold tracking-[-1%]">
            <ul className="flex items-center space-x-[12px]">
              <li className="flex items-center flex-col">
                <div className={`${language === "ru" ? "" : "invisible"}`}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[7.5px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.6553 5.88367C8.97364 6.31286 9.27159 6.7568 9.54816 7.21403C10.3999 8.62474 11.1892 10.4122 11.3571 12.3444C11.5767 14.8855 13.0946 16.4783 15.0178 16.4997C15.2308 16.498 15.4367 16.4237 15.6017 16.289C15.7482 16.1658 15.7749 16.0604 15.7749 15.9944C15.7732 15.7801 15.7392 15.539 15.6767 15.298C15.4367 14.4334 15.5127 13.5116 15.891 12.698C16.5017 11.3926 17.4089 10.5855 18.2803 9.98902C18.6499 9.73545 19.0321 9.50688 19.3678 9.30688L19.4999 9.2301C19.8839 8.99974 20.2035 8.80153 20.4928 8.58724C21.1428 8.10331 21.4999 7.75331 21.5857 7.61581C22.0093 6.89696 22.2997 6.10751 22.4428 5.28546C20.5624 4.15153 18.3571 3.49974 15.9999 3.49974C13.3609 3.49539 10.7888 4.33025 8.6553 5.88367ZM25.6374 23.9622C25.2214 24.0158 24.7785 24.0462 24.3071 24.0515H24.2696C23.602 24.0727 22.9384 24.1624 22.2892 24.3194C21.1178 24.6069 20.2499 25.0908 19.9071 25.7372C19.5053 26.4926 19.4517 27.3122 19.5339 27.9926C21.9244 27.2871 24.0498 25.8837 25.6374 23.9622ZM6.44286 7.94271C4.60714 10.1177 3.5 12.9284 3.5 15.9999C3.50067 17.6895 3.84373 19.3614 4.50846 20.9148C5.1732 22.4682 6.14583 23.8707 7.36762 25.0378C8.58942 26.2048 10.035 27.1122 11.6172 27.7051C13.1994 28.298 14.8853 28.5641 16.5732 28.4873C16.3982 27.2695 16.4875 25.7802 17.2554 24.332C18.2304 22.4945 20.2161 21.7373 21.5714 21.4052C22.3807 21.2088 23.2073 21.0921 24.0393 21.057L24.2107 21.0516H24.2768C26.3803 21.0302 27.2286 20.3552 27.6518 19.807C27.8913 19.4947 28.0744 19.143 28.1928 18.7677C28.3928 17.8749 28.5 16.9499 28.5 15.9999C28.5044 12.7642 27.2498 9.65378 25.0018 7.32664C24.7625 8.02664 24.4536 8.69986 24.1196 9.22485C23.6964 9.88914 22.9018 10.5338 22.2857 10.9927C21.8625 11.307 21.425 11.5731 21.0393 11.8034L20.9018 11.8856C20.5589 12.0891 20.2625 12.2677 19.9768 12.4641C19.3625 12.8838 18.9125 13.3177 18.6089 13.9677C18.5278 14.1444 18.5157 14.3451 18.575 14.5302C18.6929 14.9731 18.775 15.4731 18.775 15.9856C18.7803 18.2284 16.7 19.5177 14.9839 19.4998C11.0125 19.4552 8.67143 16.1213 8.36785 12.6034C8.25357 11.2927 7.69821 9.94985 6.98036 8.76414C6.80536 8.47307 6.625 8.19807 6.44286 7.94271Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <input
                  type="radio"
                  id="ru"
                  name="lang"
                  className=" hidden"
                  value={"ru"}
                  onChange={getLang}
                />
                <label htmlFor="ru">RU</label>
              </li>
              <li className="flex items-center flex-col">
                <div className={`${language === "eng" ? "" : "invisible"}`}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[7.5px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.6553 5.88367C8.97364 6.31286 9.27159 6.7568 9.54816 7.21403C10.3999 8.62474 11.1892 10.4122 11.3571 12.3444C11.5767 14.8855 13.0946 16.4783 15.0178 16.4997C15.2308 16.498 15.4367 16.4237 15.6017 16.289C15.7482 16.1658 15.7749 16.0604 15.7749 15.9944C15.7732 15.7801 15.7392 15.539 15.6767 15.298C15.4367 14.4334 15.5127 13.5116 15.891 12.698C16.5017 11.3926 17.4089 10.5855 18.2803 9.98902C18.6499 9.73545 19.0321 9.50688 19.3678 9.30688L19.4999 9.2301C19.8839 8.99974 20.2035 8.80153 20.4928 8.58724C21.1428 8.10331 21.4999 7.75331 21.5857 7.61581C22.0093 6.89696 22.2997 6.10751 22.4428 5.28546C20.5624 4.15153 18.3571 3.49974 15.9999 3.49974C13.3609 3.49539 10.7888 4.33025 8.6553 5.88367ZM25.6374 23.9622C25.2214 24.0158 24.7785 24.0462 24.3071 24.0515H24.2696C23.602 24.0727 22.9384 24.1624 22.2892 24.3194C21.1178 24.6069 20.2499 25.0908 19.9071 25.7372C19.5053 26.4926 19.4517 27.3122 19.5339 27.9926C21.9244 27.2871 24.0498 25.8837 25.6374 23.9622ZM6.44286 7.94271C4.60714 10.1177 3.5 12.9284 3.5 15.9999C3.50067 17.6895 3.84373 19.3614 4.50846 20.9148C5.1732 22.4682 6.14583 23.8707 7.36762 25.0378C8.58942 26.2048 10.035 27.1122 11.6172 27.7051C13.1994 28.298 14.8853 28.5641 16.5732 28.4873C16.3982 27.2695 16.4875 25.7802 17.2554 24.332C18.2304 22.4945 20.2161 21.7373 21.5714 21.4052C22.3807 21.2088 23.2073 21.0921 24.0393 21.057L24.2107 21.0516H24.2768C26.3803 21.0302 27.2286 20.3552 27.6518 19.807C27.8913 19.4947 28.0744 19.143 28.1928 18.7677C28.3928 17.8749 28.5 16.9499 28.5 15.9999C28.5044 12.7642 27.2498 9.65378 25.0018 7.32664C24.7625 8.02664 24.4536 8.69986 24.1196 9.22485C23.6964 9.88914 22.9018 10.5338 22.2857 10.9927C21.8625 11.307 21.425 11.5731 21.0393 11.8034L20.9018 11.8856C20.5589 12.0891 20.2625 12.2677 19.9768 12.4641C19.3625 12.8838 18.9125 13.3177 18.6089 13.9677C18.5278 14.1444 18.5157 14.3451 18.575 14.5302C18.6929 14.9731 18.775 15.4731 18.775 15.9856C18.7803 18.2284 16.7 19.5177 14.9839 19.4998C11.0125 19.4552 8.67143 16.1213 8.36785 12.6034C8.25357 11.2927 7.69821 9.94985 6.98036 8.76414C6.80536 8.47307 6.625 8.19807 6.44286 7.94271Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <input
                  type="radio"
                  id="eng"
                  name="lang"
                  className=" hidden"
                  value={"eng"}
                  onChange={getLang}
                />
                <label htmlFor="eng">ENG</label>
              </li>
              <li className="flex items-center flex-col">
                <div className={`${language === "uzb" ? "" : "invisible"}`}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-[7.5px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.6553 5.88367C8.97364 6.31286 9.27159 6.7568 9.54816 7.21403C10.3999 8.62474 11.1892 10.4122 11.3571 12.3444C11.5767 14.8855 13.0946 16.4783 15.0178 16.4997C15.2308 16.498 15.4367 16.4237 15.6017 16.289C15.7482 16.1658 15.7749 16.0604 15.7749 15.9944C15.7732 15.7801 15.7392 15.539 15.6767 15.298C15.4367 14.4334 15.5127 13.5116 15.891 12.698C16.5017 11.3926 17.4089 10.5855 18.2803 9.98902C18.6499 9.73545 19.0321 9.50688 19.3678 9.30688L19.4999 9.2301C19.8839 8.99974 20.2035 8.80153 20.4928 8.58724C21.1428 8.10331 21.4999 7.75331 21.5857 7.61581C22.0093 6.89696 22.2997 6.10751 22.4428 5.28546C20.5624 4.15153 18.3571 3.49974 15.9999 3.49974C13.3609 3.49539 10.7888 4.33025 8.6553 5.88367ZM25.6374 23.9622C25.2214 24.0158 24.7785 24.0462 24.3071 24.0515H24.2696C23.602 24.0727 22.9384 24.1624 22.2892 24.3194C21.1178 24.6069 20.2499 25.0908 19.9071 25.7372C19.5053 26.4926 19.4517 27.3122 19.5339 27.9926C21.9244 27.2871 24.0498 25.8837 25.6374 23.9622ZM6.44286 7.94271C4.60714 10.1177 3.5 12.9284 3.5 15.9999C3.50067 17.6895 3.84373 19.3614 4.50846 20.9148C5.1732 22.4682 6.14583 23.8707 7.36762 25.0378C8.58942 26.2048 10.035 27.1122 11.6172 27.7051C13.1994 28.298 14.8853 28.5641 16.5732 28.4873C16.3982 27.2695 16.4875 25.7802 17.2554 24.332C18.2304 22.4945 20.2161 21.7373 21.5714 21.4052C22.3807 21.2088 23.2073 21.0921 24.0393 21.057L24.2107 21.0516H24.2768C26.3803 21.0302 27.2286 20.3552 27.6518 19.807C27.8913 19.4947 28.0744 19.143 28.1928 18.7677C28.3928 17.8749 28.5 16.9499 28.5 15.9999C28.5044 12.7642 27.2498 9.65378 25.0018 7.32664C24.7625 8.02664 24.4536 8.69986 24.1196 9.22485C23.6964 9.88914 22.9018 10.5338 22.2857 10.9927C21.8625 11.307 21.425 11.5731 21.0393 11.8034L20.9018 11.8856C20.5589 12.0891 20.2625 12.2677 19.9768 12.4641C19.3625 12.8838 18.9125 13.3177 18.6089 13.9677C18.5278 14.1444 18.5157 14.3451 18.575 14.5302C18.6929 14.9731 18.775 15.4731 18.775 15.9856C18.7803 18.2284 16.7 19.5177 14.9839 19.4998C11.0125 19.4552 8.67143 16.1213 8.36785 12.6034C8.25357 11.2927 7.69821 9.94985 6.98036 8.76414C6.80536 8.47307 6.625 8.19807 6.44286 7.94271Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <input
                  type="radio"
                  id="uzb"
                  name="lang"
                  className=" hidden"
                  value={"uzb"}
                  onChange={getLang}
                />
                <label htmlFor="uzb">UZB</label>
              </li>
            </ul>
          </div>
          <div>
            <p
              className={`${
                language === "ru" ? "block" : "hidden"
              } font-medium text-xs leading-8 text-white mb-1.5 w-full max-w-[65px] ml-auto`}
            >
              Мы здесь!
            </p>
            <p
              className={`${
                language === "eng" ? "block" : "hidden"
              } font-medium text-xs leading-8 text-white mb-1.5 w-full max-w-[77px] ml-auto`}
            >
              We are here!
            </p>
            <p
              className={`${
                language === "uzb" ? "block" : "hidden"
              } font-medium text-xs leading-8 text-white mb-1.5 w-full max-w-[110px] ml-auto`}
            >
              Biz shu yerdamiz!
            </p>
            <div className="flex items-center space-x-[26px]">
              <a target="_blank" href="https://telegram.org/">
                <img src={telegram} alt="telegram" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <img src={instagram} alt="instagram" />
              </a>
              <a target="_blank" href="https://www.whatsapp.com/">
                <img src={watstapp} alt="watstap" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          {/* ru */}
          <div className={`${language === "ru" ? "block" : "hidden"}`}>
            <Link className="font-medium text-base leading-8 text-white tracking-[-1%] block">
              Условия & Положения
            </Link>
            <Link className="font-medium text-base leading-8 text-white tracking-[-1%] block">
              Политика конфиденциальности
            </Link>
            <p className="font-medium text-base leading-8 text-white tracking-[-1%]">
              ©2018—2023 Faject
            </p>
          </div>
          {/* eng */}
          <div className={`${language === "eng" ? "block" : "hidden"}`}>
            <Link className="font-medium text-base leading-8 text-white tracking-[-1%] block">
              Terms & Conditions
            </Link>
            <Link className="font-medium text-base leading-8 text-white tracking-[-1%] block">
              Privacy Policy
            </Link>
            <p className="font-medium text-base leading-8 text-white tracking-[-1%]">
              ©2018—2023 Faject
            </p>
          </div>
          {/* uzb */}
          <div className={`${language === "uzb" ? "block" : "hidden"}`}>
            <Link className="font-medium text-base leading-8 text-white tracking-[-1%] block">
              Foydalanish shartlari
            </Link>
            <Link className="font-medium text-base leading-8 text-white tracking-[-1%] block">
              Maxfiylik siyosati
            </Link>
            <p className="font-medium text-base leading-8 text-white tracking-[-1%]">
              ©2018—2023 Faject
            </p>
          </div>
          <div className="860px:block hidden">
            <p
              className={`${
                language === "ru" ? "block" : "hidden"
              } font-medium text-xs leading-8 text-white mb-1.5 w-full max-w-[65px] ml-auto`}
            >
              Мы здесь!
            </p>
            <p
              className={`${
                language === "eng" ? "block" : "hidden"
              } font-medium text-xs leading-8 text-white mb-1.5 w-full max-w-[77px] ml-auto`}
            >
              We are here!
            </p>
            <p
              className={`${
                language === "uzb" ? "block" : "hidden"
              } font-medium text-xs leading-8 text-white mb-1.5 w-full max-w-[110px] ml-auto`}
            >
              Biz shu yerdamiz!
            </p>
            <div className="flex items-center space-x-[26px]">
              <a target="_blank" href="https://telegram.org/">
                <img src={telegram} alt="telegram" />
              </a>
              <a target="_blank" href="https://www.instagram.com/">
                <img src={instagram} alt="instagram" />
              </a>
              <a target="_blank" href="https://www.whatsapp.com/">
                <img src={watstapp} alt="watstap" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
