const ContentBox = ({ classs, fa, h3Text, pText }) => {
  return (
    <div className="box">
      <span>
        <div className={classs}></div>
        <i className={fa}></i>
      </span>
      <h3>{h3Text}</h3>
      <p>{pText}</p>
    </div>
  );
};

export default ContentBox;
