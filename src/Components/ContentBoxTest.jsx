import Stars from "../Components/Stars";

const ContentBoxTest = () => {
  const content = [
    {
      h3: "Cassandra Warren",
      img: "/images/Ellipse 2.png",
      span: "Business Manager, Dorfus",
    },

    {
      h3: "Amanda Tulling",
      img: "/images/Ellipse 3.png",
      span: "Senior Developer, Square",
    },

    {
      h3: "Jack McDogglas",
      img: "/images/Ellipse 4.png",
      span: "Key Account Manager, Gobona",
    },
  ];

  return (
    <>
      {content.map((item, index) => (
        <div key={index} className="box box-1 border">
          <div className="star-wrap">
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
            <Stars />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
            nesciunt nemo eligendi numquam voluptate
          </p>
          <div className="person-wrap center">
            <div className="img-wrap">
              <img src={item.img} alt="" />
            </div>
            <div className="text-wrap">
              <h3>{item.h3}</h3>
              <span className="span-text">{item.span}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContentBoxTest;
