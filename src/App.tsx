import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Equipment from "./components/Equipamiento/Equipment";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Videos from "./components/Videos/Videos";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutUs />
      <Equipment />
      <Services />
      <Gallery />
      <Videos />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
