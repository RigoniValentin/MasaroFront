import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import BannerHeader from "./components/Banner/BannerHeader";
import AboutUs from "./components/AboutUs/AboutUs";
import Equipment from "./components/Equipamiento/Equipment";
import Bottom from "./components/Bottom/Bottom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerHeader />
              <AboutUs />
              <Equipment />
              <Bottom />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
