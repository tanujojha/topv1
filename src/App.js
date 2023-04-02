import './App.css';
import Navbar from './components/navbar/nav';
import LftFlt from './components/lftflt/lftflt';
import RgtFlt from './components/rgtflt/rgtflt';
import Footer from './pages/footer/footer';
import Main from './pages/main/main';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LftFlt/>
      <RgtFlt/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
