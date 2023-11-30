import "./App.css"
// import Routings from "./routes/Routings";
import Home from "./modules/Home";
import About from "./modules/About";
import Portfolio from "./modules/Portfolio";
import Experiences from "./modules/Experiences";
import Contact from "./modules/Contact"

function App() {
  return (
    <div>
       <Home />
      <About />
      <Portfolio />
      <Experiences />
      <Contact />
        {/* <Routings /> */}
    </div>
  );
}

export default App;
