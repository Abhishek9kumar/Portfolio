import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Objective from './components/Objective';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-bg">
      <Navbar />
      <Home />
      <Objective Objective="Enthusiastic and highly motivated Computer Science graduate with a solid understanding of full stack web development using technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. Eager to apply my knowledge and passion for coding to real-world projects in a collaborative and growth-oriented environment. Seeking an opportunity to kickstart my career as a Full Stack Developer and contribute to building user-friendly and scalable web applications."/>
      <Aboutme
        about="A B O U T &nbsp; M E"
        description="I am a full stack web developer. I can design the site based on your needs and suggestions."
        explore="EXPLORE"
        development="Development"
        developmentDesc="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
        maintenance="Maintenance"
        maintenanceDesc="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job." />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
