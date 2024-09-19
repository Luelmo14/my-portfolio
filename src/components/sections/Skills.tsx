import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Tailwind" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "Python" },
    { name: "SQL" },
    { name: "Git" },
    { name: "Figma" },
    { name: "TypeScript" },
    { name: "Vue.js" },
    { name: "Docker" },
    { name: "RESTful APIs" },
    { name: "Firebase" },
  ];
  return (
    <section id="skills" className="py-10">
      <h2 className="text-2xl font-bold mb-6">{t("skills.title")}</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="default"
            className="hover:cursor-default hover:bg-primary/100"
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
