import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "title placeholder",
      company: "company placeholder",
      description: "description placeholder",
      dateRange: "dateRange placeholder",
    },
    {
      title: "title placeholder",
      company: "company placeholder",
      description: "description placeholder",
      dateRange: "dateRange placeholder",
    },
  ];

  return (
    <section id="experience" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {exp.title} at {exp.company}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              {exp.dateRange}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;
