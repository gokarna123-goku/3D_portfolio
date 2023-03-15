import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";

function App() {
  return (
    <div className="main_section">
      <Hero />
      <Who />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
