import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact";
function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowPrograms] = useState(true);

  return (
    <div className="App">
      <Header
        setShowAbout={setShowAbout}
        showAbout={showAbout}
        showPrograms={showProjects}
        setShowPrograms={setShowPrograms}
      ></Header>
      {showAbout && <About></About>}
      {showProjects && <Projects></Projects>}
      <Contact></Contact>;
    </div>
  );
}

export default App;
