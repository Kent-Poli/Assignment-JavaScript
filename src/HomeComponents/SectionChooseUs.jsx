import ContentBox2 from "../Components/ContentBox2";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionChooseUs.css";
const SectionChooseUs = () => {
  return (
    <section className="Why-Choose-Us">
      <div className="bg">
        <div className="img"></div>
      </div>
      <div className="container">
        <div className="left">
          <div className="title up">
            <TitleH2
              span="Why Choose Us"
              h2=" Why We Are The Best Business
                  Consulting Agency"
            />
          </div>
          <div className="down">
            <div className="wrapperr">
              <ContentBox2
                fa="fa-sharp fa-regular fa-thumbs-up"
                h3Text="Process Excellence"
              />
            </div>
            <div className="wrapperr">
              <ContentBox2
                fa="fa-sharp fa-light fa-star-christmas"
                h3Text="Strategic Planning"
              />
            </div>
            <div className="wrapperr">
              <ContentBox2
                fa="fa-light fa-bezier-curve"
                h3Text="Experience Design"
              />
            </div>
            <div className="wrapperr">
              <ContentBox2
                fa="fa-light fa-head-side-gear"
                h3Text="Artificial Inteligence"
              />
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default SectionChooseUs;
