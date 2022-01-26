import { useCallback } from "react";
import { logToAnalytics, EVENT_TYPE } from "../services/analytics";

export const Header = (props) => {
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
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="logo">
                  {props.data ? props.data.logo : "Loading"}
                  <span></span>
                </div>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <h3>
                  {props.data ? props.data.description : ""}
                  <span></span>
                </h3>
                <p>{props.data ? props.data.paragraph : ""}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleClick}
                >
                  подробнее
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
