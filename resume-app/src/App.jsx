import './index.css';
import Navbar from './components/Navbar';
import NewsTicker from './components/NewsTicker';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      <NewsTicker />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
