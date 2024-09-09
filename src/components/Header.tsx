import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useScrollspy } from "@/hooks/useScrollspy";
import {
  Home,
  Briefcase,
  GraduationCap,
  Code,
  FolderOpen,
  User,
  Mail,
  Linkedin,
  Award,
} from "lucide-react";

const Header = () => {
  const activeSection = useScrollspy(
    [
      "home",
      "about",
      "experience",
      "education",
      "certifications",
      "skills",
      "projects",
    ],
    100
  );

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "certifications", icon: Award, label: "Certifications" },
    { id: "skills", icon: Code, label: "Skills" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit max-w-3xl px-4">
      <Card className="p-2 flex items-center bg-background/80 backdrop-blur-sm">
        <nav className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className="flex items-center space-x-1"
            >
              <item.icon className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">{item.label}</span>
            </Button>
          ))}
        </nav>
        <div className="flex items-center">
          <Separator orientation="vertical" className="h-6 mx-2" />
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:alexluelmo@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://www.linkedin.com/in/alex-luelmo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </header>
  );
};

export default Header;
