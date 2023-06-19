import './App.css';
import About from './components/About/About1';
import Footer from './components/Footer/Footer';
import Projects from './components/projects/Projects';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
          <Header id="head"/>
          <About/>
          <Projects/>
          <Skills/>
          <Footer id="foot"/>
    </div>
  );
}

export default App;
