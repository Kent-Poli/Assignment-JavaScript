import Logos from "./Logos";

const SectionLogos = () => {
  const imgs = [
    "/images/Logo1.png",
    "/images/Logo2.png",
    "/images/Logo3.png",
    "/images/Logo4.png",
    "/images/Logo5.png",
  ];

  console.log(imgs);
  return (
    <section className="logos container">
      {imgs.map((item, index) => (
        <Logos key={index} src={item} />
      ))}
    </section>
  );
};

export default SectionLogos;
