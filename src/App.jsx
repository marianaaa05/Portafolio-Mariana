import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Participations from "./components/Participations";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Participations />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
