import Button from "../Components/Button";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionAbout.css";

const SectionAbout = () => {
  return (
    <section className="about-company container">
      <div className="left-wrap">
        <img src="/images/Image2.png" alt="" />
        <div className="label">
          <h4>
            Samantha Brown, <span>Founder</span>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="right-wrap">
        <div className="title">
          <TitleH2
            span="About Company"
            h2="We Are Business Consulting & Credit Repair Experts"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officiis quas assumenda esse obcaecati? Ex esse error voluptates
            iure vel totam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
            quasi incidunt adipisci accusantium libero provident voluptate amet.
          </p>
          <div className="btn-wrap">
            <Button
              type="btn-black"
              width="180px"
              height="56px"
              text="Learn More"
            />

            <div className="circel center">
              <i className="fa-sharp fa-solid fa-play"></i>
            </div>
            <span className="span1">Intro Video</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
