import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SectionHero from "../HomeComponents/SectionHero";
import SectionFeatures from "../HomeComponents/SectionFeatures";
import SectionLogos from "../HomeComponents/SectionLogos/SectionLogos";
import SectionAbout from "../HomeComponents/SectionAbout";
import OurServices from "../HomeComponents/OurServices";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionLogos />
        <SectionFeatures />
        <SectionAbout />
        <OurServices />
      </main>
      <Footer />
    </>
  );
};

export default Home;
