import "../../styles.css";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'

import background1 from "../../../public/bg1.jpg";
import background2 from "../../../public/bg2.jpg";
import background3 from "../../../public/bg3.jpg";
import bgKlasse from "../../../public/klasse.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  const [currentBackground, setCurrentBackground] = useState(0);
  const backgroundImages = [background1, background2, background3];

  const updateBackground = () => {
    setCurrentBackground(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(updateBackground, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <div
        className="bannerr"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="containir animate">
          <h1 className="banner-title">HANSTAR CORP</h1>
          <p>
            Ремонт и техническое обслуживание автомобилей в Ташкенте. Мы можем
            исправить любые ошибки.
          </p>
          <form>
            <input
              type="text"
              placeholder="Поиск..."
              className="search-input"
            />
          </form>
        </div>
      </div>

      <section className="design" id="design">
        <div className="containir">
          <div className="title">
            <h2 className="pt-4">Наши услуги</h2>
            <h4>
              {t("home.desibscription")}
            </h4>
          </div>

          <div className="design-img2">
            <img src={bgKlasse} alt="" className="m-auto pt-4 pb-4" width={1000} />

            <button className="btn1 btn">
              <Link to={"/shoptoli"}>Кузов</Link>
            </button>
            <button className="btn2 btn">
              <Link to={"/mator"}>Двигатель</Link>
            </button>
            <button className="btn3 btn">
              <Link to={"/elektr"}>Электрооборудование</Link>
            </button>
            <button className="btn4 btn">
              <Link to={"/hadavoy"}>Ходовая часть</Link>
            </button>
            <button className="btn5 btn">
              <Link to={"/trans"}>Трансмиссия</Link>
            </button>
          </div>
        </div>
      </section>

      <div className="xxx">
        <h1 className="text-center mt-7">Запчасти</h1>
      </div>
    </div>
  );
};

export default Home;
