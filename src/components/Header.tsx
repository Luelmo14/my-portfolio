import { Button } from "@/components/ui/button";
import { useScrollspy } from "@/hooks/useScrollspy";

const Header = () => {
  const activeSection = useScrollspy(
    ["home", "experience", "education", "skills", "projects", "about"],
    64,
  );

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {[
            "home",
            "experience",
            "education",
            "skills",
            "projects",
            "about",
          ].map((section) => (
            <Button
              key={section}
              variant={activeSection === section ? "default" : "ghost"}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
