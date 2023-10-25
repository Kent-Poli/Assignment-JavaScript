import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SectionHero from "../HomeComponents/SectionHero";
import SectionLogos from "../HomeComponents/SectionLogos/SectionLogos";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionLogos />
      </main>
      <Footer />
    </>
  );
};

export default Home;
