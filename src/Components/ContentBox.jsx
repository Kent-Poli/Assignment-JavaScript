const ContentBox = ({ fa, h3Text, pText }) => {
  return (
    <div className="box">
      <span>
        <i className={fa}></i>
      </span>
      <h3>{h3Text}</h3>
      <p>{pText}</p>
    </div>
  );
};

export default ContentBox;
