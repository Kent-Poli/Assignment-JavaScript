import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SectionHero from "../HomeComponents/SectionHero";
import SectionFeatures from "../HomeComponents/SectionFeatures";
import SectionLogos from "../HomeComponents/SectionLogos/SectionLogos";
import SectionAbout from "../HomeComponents/SectionAbout";
import OurServices from "../HomeComponents/OurServices";
import SectionChooseUs from "../HomeComponents/SectionChooseUs";
import SectionCase from "../HomeComponents/SectionCase";
import SectionMeet from "../HomeComponents/SectionMeet";

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
        <SectionChooseUs />
        <SectionCase />
        <SectionMeet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
