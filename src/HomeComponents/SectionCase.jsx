import Button from "../Components/Button";
import ContentBoxCase from "../Components/ContentBoxCase";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionCase.css";

const SectionCase = () => {
  return (
    <section className="project-case-studies container">
      <TitleH2
        span="Project & Case Studies"
        h2="Let’s Looks Our Global Projects"
      />
      <div className="box1 box">
        <ContentBoxCase img="/images/Image4.png" h3="Grow your business" />
      </div>
      <div className="box2 box">
        <ContentBoxCase img="/images/Image4.png" h3="Grow your business" />
      </div>
      <div className="box3 box">
        <ContentBoxCase img="/images/Image4.png" h3="Grow your business" />
      </div>
      <div className="box4 box">
        <ContentBoxCase img="/images/Image4.png" h3="Grow your business" />
      </div>
      <Button
        type="btn-black btn"
        width="238px"
        height="56px"
        text="All Recent Projects"
      />
      {/* <a href="#" className="btn">
        <button className="btn-black">
          All Recent Projects
          <i className="fa-solid fa-arrow-up-right span"></i>
        </button>
      </a> */}
    </section>
  );
};

export default SectionCase;
