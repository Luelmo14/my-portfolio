import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/Header";
import Home from "./components/sections/Home";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import LicensesAndCertifications from "./components/sections/LicensesAndCertifications";
import Footer from "./components/layout/Footer";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-geist">
        <Header />
        <main className="flex-grow container mx-auto px-4">
          <Home />
          <Separator className="my-2 w-10/12 mx-auto" />
          <About />
          <Separator className="my-2 w-10/12 mx-auto" />
          <Experience />
          <Separator className="my-2 w-10/12 mx-auto" />
          <Education />
          <Separator className="my-2 w-10/12 mx-auto" />
          <LicensesAndCertifications />
          <Separator className="my-2 w-10/12 mx-auto" />
          <Skills />
          <Separator className="my-2 w-10/12 mx-auto" />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
