import { BrowserRouter } from "react-router-dom";
import About from "././Components/About.jsx";
import Experience from "./Components/Experience.jsx";
import Contact from "./Components/Contact.jsx";
import Feedback from "./Components/Feedback.jsx";
import Project from "./Components/Project.jsx";
import SkillSet from "./Components/SkillSet.jsx";
import Header from "./Components/Header.jsx";

// import {About, Experience, Contact, Feedback, Project, skillSet} from "./Components"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className=''>
          <About />
          <Contact />
        </div>

        <div>
          <Experience />
          <Project />
          <Feedback />
          <SkillSet />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
