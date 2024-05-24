import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Experiences } from './pages/Experiences';
import { Education } from './pages/Education';
import { Certificates } from './pages/Certificates';
import { Contact } from './pages/Contact';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contactme" element={<Contact />} />
          </Routes>
    </Router>
  );
};

export default App;
