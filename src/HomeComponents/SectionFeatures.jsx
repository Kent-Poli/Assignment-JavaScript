import Button from "../Components/Button";
import ContentBox from "../Components/ContentBox";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionFeatures.css";
const SectionFeatures = () => {
  return (
    <section className="features border">
      <div className="container">
        <div className="left-wrap">
          {/* <div className="title">
            <span>Features</span>
            <h2>Our Accounting is trusted by thousand of companies</h2>
          </div> */}
          <TitleH2
            span="Features"
            h2="Our Accounting is trusted by thousand of companies"
          />
          <div className="button-wrap">
            <Button
              type="btn-yellow"
              width="100%"
              height="56px"
              text="Get Consulting"
            />
          </div>
        </div>
        <div className="right-wrap">
          <ContentBox
            fa="fa-light fa-handshake"
            h3Text="Business Advice"
            pText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <ContentBox
            fa="fa-regular fa-lightbulb-on"
            h3Text="Startup Business"
            pText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <ContentBox
            fa="fa-light fa-chart-mixed-up-circle-dollar"
            h3Text="Financial Advice"
            pText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <ContentBox
            fa="fa-solid fa-list-check"
            h3Text="Risk Management"
            pText="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
