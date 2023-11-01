import Button from "../Components/Button";
import ContentBoxArticle from "../Components/ContentBoxArticle";
import TitleH2 from "../Components/TitleH2";
import "../Style/Home/sectionArticle.css";
const SectionArticle = () => {
  return (
    <section className="article-news container">
      <div className="up-wrapper">
        <TitleH2 span="Article & News" h2="Get Every Single Articles & News" />
        <div className="btn-wrap center">
          <Button
            type="btn-trans"
            width="221px"
            height="56px"
            text="Browse Articles"
          />
        </div>
      </div>
      <div className="down-wrapper">
        <ContentBoxArticle />
      </div>
      <div className="dot-wrap">
        <div id="dot2" className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
};

export default SectionArticle;
