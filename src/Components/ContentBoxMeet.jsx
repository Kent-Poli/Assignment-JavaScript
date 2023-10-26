const ContentBoxMeet = ({ type, src, h3, p }) => {
  return (
    <div className={type}>
      <a href="#">
        <img src={src} alt="" />
      </a>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default ContentBoxMeet;
