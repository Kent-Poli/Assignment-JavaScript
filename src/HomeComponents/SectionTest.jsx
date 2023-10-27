import Button from "../Components/Button";
import ContentBoxTest from "../Components/ContentBoxTest";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionTest.css";
const SectionTest = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <TitleH2 span="Testimonial" h2="What Our Client Says" />

        <div className="box-wrap">
          <ContentBoxTest />
        </div>
        <div className="center">
          <Button
            type="btn-black btn"
            width="181px"
            height="56px"
            text="All Reviews"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTest;
