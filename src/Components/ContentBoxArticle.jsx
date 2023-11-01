const ContentBoxArticle = () => {
  const content = [
    {
      imgUrl: "/images/Image12.png",
      span: "25",
      h3: "How To Use Digitalization In The Classroom",
    },
    {
      imgUrl: "/images/Image13.png",
      span: "17",
      h3: "How To Implement Chat GPT In Your Projects",
    },
    {
      imgUrl: "/images/Image14.png",
      span: "12",
      h3: "The Guide To Support Modern CSS Design",
    },
  ];
  return (
    <>
      {content.map((item, index) => (
        <div key={index} className="box center">
          <div className="img-wrap center">
            <img src={item.imgUrl} alt="" />
            <div className="date">
              <span>{item.span}</span>
              <p>Mar</p>
            </div>
          </div>
          <span className="span">Business</span>
          <h3>{item.h3}</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sed hic libero.
          </p>
        </div>
      ))}
    </>
  );
};

export default ContentBoxArticle;
