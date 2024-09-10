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
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    let offset = 0;
    const screenWidth = window.innerWidth;

    if (id === "skills") {
      if (screenWidth >= 2560) {
        offset = -430; // Increased offset for 4K screens
      } else {
        offset = -200;
      }
    } else if (id === "certifications") {
      if (screenWidth >= 2560) {
        offset = -120;
      }
    } else {
      offset = -50;
    }

    const topPosition =
      element.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit max-w-4xl px-4">
      <Card className="p-2 flex items-center bg-background/80 backdrop-blur-sm border-borderLight dark:border-0 drop-shadow-md">
        <nav className="flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center space-x-1",
                index === 0 ? "" : "hidden sm:flex",
                activeSection !== item.id &&
                  "hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="sr-only lg:not-sr-only">{item.label}</span>
            </Button>
          ))}
        </nav>
        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="h-6 mx-2 bg-borderLight/60 dark:bg-zinc-700 rounded"
          />
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark"
            asChild
          >
            <a href="mailto:alexluelmo@gmail.com" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-hoverBackgroundLight/60 dark:hover:bg-hoverBackgroundDark"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/alex-luelmo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Separator
            orientation="vertical"
            className="h-6 mx-2 bg-borderLight/60 dark:bg-zinc-700 rounded"
          />
          <ThemeToggle />
        </div>
      </Card>
    </header>
  );
};

export default Header;
