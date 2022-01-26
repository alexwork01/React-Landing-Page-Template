import { useCallback } from "react";
import { logToAnalytics, EVENT_TYPE } from "../services/analytics";

export const Navigation = (props) => {
  const handleClick = useCallback((e) => {
    try {
      if (e.target?.href) {
        const url = new URL(e.target.href);
        const page = url?.hash;
        logToAnalytics(EVENT_TYPE.navigation, page);
      }
    } catch (e) {}
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Переключить навигацию</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            onClick={handleClick}
          >
            KOREA-AUTO.COM.UA
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll" onClick={handleClick}>
                Преимущества
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={handleClick}>
                О нас
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={handleClick}>
                Услуги
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={handleClick}
              >
                Галерея
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={handleClick}
              >
                Отзывы
              </a>
            </li>
            {/*<li>
              <a href="#team" className="page-scroll">
                Команда
              </a>
            </li>*/}
            <li>
              <a href="#contact" className="page-scroll" onClick={handleClick}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
