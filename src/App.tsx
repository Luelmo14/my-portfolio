import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import LicensesAndCertifications from "./components/LicensesAndCertifications";
import Footer from "./components/Footer";

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
