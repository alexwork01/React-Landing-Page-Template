import _ from "lodash";

export const Services = (props) => {
  const { title = "", data = [] } = props.data || {};
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>НАШИ УСЛУГИ</h2>
          <p>{title}</p>
        </div>
        <div className="row">
          {data
            ? _.map(data, (d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
