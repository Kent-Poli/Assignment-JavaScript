import "../Style/Home/sectionHero.css";
import Button from "../Components/Button";
const SectionHero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="stripes">
          <img src="/images/Element1.png" alt="" />
        </div>
        <div className="left-wrap">
          <h1>We Provide The Best Business Solutions</h1>
          <p>
            Establish your vision and value proposition and turn them into
            testable prototypes.
          </p>
          <div className="button-wrap">
            <Button
              type="btn-yellow"
              width="208px"
              height="56px"
              text="Get Consulting"
            />
            <Button
              type="btn-trans"
              width="180px"
              height="56px"
              text="Learn More"
            />
            {/* <a href="#">
              <button className="btn-yellow">
                Get Consulting
                <i className="fa-solid fa-arrow-up-right"></i>
              </button>
            </a>
            <a href="#">
              <button className="btn-trans">
                Learn More
                <span>
                  <i className="fa-solid fa-arrow-up-right"></i>
                </span>
              </button>
            </a> */}
          </div>
        </div>
        <div className="right-wrap">
          <img src="/images/Image1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
