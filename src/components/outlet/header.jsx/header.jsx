import { Link } from "react-router-dom";
import i18n from 'i18next'
import './header.css'
import { useTranslation } from 'react-i18next' // copy

const Header = () => {
  const { t } = useTranslation(); // copy

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <header className="shadow-md font-sans">
        <section className="py-2 bg-gray-800 text-white text-right px-10">
          <p className="text-sm">
            <strong className="mx-2">{t("nav.address")}:</strong>Tashkent vil.
            <strong className="mx-2">Contact No:</strong>+9981076294
          </p>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 relative bg-white min-h-[70px]">
          <Link href="javascript:void(0)">
            <h1 className="text-2xl font-bold">{t("nav.logo")}</h1>
          </Link>
          <button id="toggle" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
          <div className="flex max-lg:ml-auto lg:order-1">
            <button id="toggle" className="lg:hidden"></button>
          </div>
          <ul
            id="collapseMenu"
            className="lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
          >
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={"/"}
                className="lg:hover:text-[#007bff] block font-semibold text-[15px]"
              >
                {t("nav.home")}
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={"/about"}
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                {t("nav.about")}
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={"/contect"}
                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Contact
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={"/reservation"}
                className="lg:hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Reservation
              </Link>
            </li>
            <li>
              <button className="">
                <label className="dropdown">
                  <div className="dd-button">
                    Chane language
                  </div>
                  <input type="checkbox" className="dd-input" id="test" />
                  <ul className="dd-menu">
                    <li onClick={() => handleClick("uz")}>Uzbek</li>
                    <li onClick={() => handleClick("ru")}>Pусский</li>
                    <li onClick={() => handleClick("eng")}>English</li>
                    <li onClick={() => handleClick("ko")}>한국인</li>
                  </ul>
                </label>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
