import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Education = () => {
  const educationList = [
    {
      degree: "Degree placeholder",
      institution: "institution placeholder",
      description: "description placeholder",
      dateRange: "dateRange placeholder",
    },
    {
      degree: "degree placeholder",
      institution: "institution placeholder",
      description: "description placeholder",
      dateRange: "dateRange placeholder",
    },
  ];

  return (
    <section id="education" className="py-10 bg-muted">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">{edu.institution}</p>
              <p>{edu.description}</p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              {edu.dateRange}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
