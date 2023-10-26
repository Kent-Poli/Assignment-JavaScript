import Button from "../Components/Button";
import ContentBoxMeet from "../Components/ContentBoxMeet";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionMeet.css";
const SectionMeet = () => {
  return (
    <section className="meet-our-team">
      <div className="container">
        <TitleH2 span="Meet Our Team" h2="Experience Team Members" />
        <Button
          type="btn btn-yellow "
          width="221px"
          height="56px"
          text="Browse Team"
        />
        {/* <div className="title">
          <span className="span-text">Meet Our Team</span>
          <h2>Experience Team Members</h2>
        </div> */}
        {/* <a href="#" className="btn">
          <button className="btn-yellow">
            Browse Team
            <i className="fa-solid fa-arrow-up-right span"></i>
          </button>
        </a> */}
        <ContentBoxMeet
          type="box1 box"
          src="/images/Image8.png"
          h3="Kristine Palmer"
          p="Chef Operation Officer"
        />
        <ContentBoxMeet
          type="box2 box"
          src="/images/Image9.png"
          h3="Mark Aubri"
          p="Senior Consultant"
        />
        <ContentBoxMeet
          type="box3 box"
          src="/images/Image10.png"
          h3="Kimberly Hansen"
          p="Senior Consultant"
        />
        <ContentBoxMeet
          type="box4 box"
          src="/images/Image11.png"
          h3="Justin Willoman"
          p="Senior Tech Consultant"
        />

        <div className="dot-wrap">
          <div className="dot"></div>
          <div id="dot2" className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionMeet;
