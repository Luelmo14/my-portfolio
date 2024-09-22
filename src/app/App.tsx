import { lazy, Suspense } from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import Header from "../components/layout/Header";
import Home from "../components/sections/Home";
import Footer from "../components/layout/Footer";
import GrainBackground from "../modules/grain-background/GrainBackground";
import LoadingSpinner from "../modules/loading-spinner/LoadingSpinner";

const About = lazy(() => import("../components/sections/About"));
const Education = lazy(() => import("../components/sections/Education"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Projects = lazy(() => import("../components/sections/Projects"));
const LicensesAndCertifications = lazy(
  () => import("../components/sections/LicensesAndCertifications")
);

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <GrainBackground />
        <div
          className="min-h-screen flex flex-col font-geist"
          style={{ width: "var(--content-width, 100vw)" }}
        >
          <Header />
          <main className="flex-grow container mx-auto md:px-14 lg:px-4">
            <Home />
            <About />
            <Education />
            <Experience />
            <LicensesAndCertifications />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
