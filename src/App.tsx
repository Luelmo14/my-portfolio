import Header from "./components/layout/Header";
import Home from "./components/sections/Home";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import LicensesAndCertifications from "./components/sections/LicensesAndCertifications";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <Experience />
        <Education />
        <LicensesAndCertifications />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
