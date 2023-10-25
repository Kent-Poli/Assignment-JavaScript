const ContentBox2 = ({ fa, h3Text }) => {
  return (
    <>
      <div className="icon center">
        <i className={fa}></i>
      </div>
      <div className="text-wrapper">
        <h3>{h3Text}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur.</p>
      </div>
    </>
  );
};

export default ContentBox2;
