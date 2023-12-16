import Button from "./components/Button/Button/Button.jsx";
import Searchbar from "./components/Button/SearchBar/Searchbar.jsx";
import Logo from './components/Button/Logo/Logo.jsx'
import Hero from './components/HeroText/Hero.jsx'
import './App.css'
import FaqText from "./components/Faq/FaqText.jsx";
import HeroImage from "./components/HeroImage/HeroImage.jsx";

function App() {
  return (
    <>
      
      <nav className="navbar">
        <Logo/>
        <Searchbar placeholder={"Search a album of your choice"}></Searchbar>
        <Button children={"Give Feedback"}></Button>
      </nav>

      <div className="heroSection">
        <Hero/>
        <HeroImage/>
      </div>

      <div className="faqSection">
        <FaqText/>
      </div>
    </>
  );
}

export default App;
