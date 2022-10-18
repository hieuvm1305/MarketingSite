import "./App.css";
import "./style.scss";
import TopPage from "./Components/TopPage";
import Packake from "./Components/Packake";
import WhoWeAre from "./Components/WhoWeAre";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import AboutUs from "./Components/AboutUs";
function App() {
  return (
    <div className="App">
      <TopPage />
      <Packake />
      <WhoWeAre />
      <Portfolio />
      <Blog />
      <AboutUs />
    </div>
  );
}

export default App;
