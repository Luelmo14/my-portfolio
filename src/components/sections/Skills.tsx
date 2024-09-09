import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "React", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Node.js", proficiency: 80 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "TypeScript", proficiency: 75 },
    { name: "Python", proficiency: 70 },
  ];

  return (
    <section id="skills" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <Badge variant="outline">{skill.name}</Badge>
              <span className="text-sm text-muted-foreground">
                {skill.proficiency}%
              </span>
            </div>
            <Progress value={skill.proficiency} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
