import Button from "../Components/Button";
import ContentBox from "../Components/ContentBox";
import "../Style/Home/SectionOurServices.css";

const OurServices = () => {
  return (
    <section className="our-services">
      <img src="/images/Element2.png" alt="" />
      <div className="container">
        <div className="title">
          <span>Our Services</span>
          <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="box1">
          <ContentBox
            classs="line"
            fa="line"
            h3Text="Business Advice"
            pText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus."
          />

          <div className="circel-wrap">
            <div className="circel center">
              <i className="fa-sharp fa-light fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="box2">
          <ContentBox
            classs="line"
            fa="line"
            h3Text="Business Advice"
            pText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus."
          />

          <div className="circel-wrap">
            <div className="circel center">
              <i className="fa-sharp fa-light fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="box3">
          <ContentBox
            classs="line"
            fa="line"
            h3Text="Business Advice"
            pText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus."
          />

          <div className="circel-wrap">
            <div className="circel center">
              <i className="fa-sharp fa-light fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="box4">
          <ContentBox
            classs="line"
            fa="line"
            h3Text="Business Advice"
            pText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            in nam possimus."
          />

          <div className="circel-wrap">
            <div className="circel center">
              <i className="fa-sharp fa-light fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="btn-wrap">
          <Button
            type="btn-trans"
            width="221px"
            height="56px"
            text="Browse Services"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
