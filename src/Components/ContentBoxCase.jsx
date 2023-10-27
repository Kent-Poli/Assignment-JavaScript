import Button from "./Button";

const ContentBoxCase = ({ href, img, h3 }) => {
  return (
    <>
      <a href={href}>
        <img src={img} alt="" />
      </a>
      <h3>{h3}</h3>
      <div className="under-line"></div>
      <div className="btn-wrap">
        <Button type="btn-trans center" width="" text="Read More" />
      </div>
    </>
  );
};

export default ContentBoxCase;
