import TitleH2 from "../../Components/TitleH2";
const SectionFeatures = () => {
  return (
    <section className="features border">
      <div className="container">
        <div className="left-wrap">
          {/* <div className="title">
            <span>Features</span>
            <h2>Our Accounting is trusted by thousand of companies</h2>
          </div> */}
          <TitleH2 />
          <div className="button-wrap">
            <a href="#">
              <button className="btn-yellow">
                Learn More
                <span>
                  <i className="fa-solid fa-arrow-up-right span"></i>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="right-wrap">
          <div className="box">
            <span>
              <i className="fa-light fa-handshake"></i>
            </span>
            <h3>Business Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box">
            <span>
              <i className="fa-regular fa-lightbulb-on"></i>
            </span>
            <h3>Startup Business</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="box">
            <span>
              <i className="fa-light fa-chart-mixed-up-circle-dollar"></i>
            </span>
            <h3>Financial Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="box">
            <span>
              <i className="fa-solid fa-list-check"></i>
            </span>
            <h3>Risk Management</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
