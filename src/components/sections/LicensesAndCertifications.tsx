import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialLink: string;
}

const certifications: Certification[] = [
  {
    title: "title1",
    issuer: "issuer1",
    date: "date1",
    description: "description1.",
    credentialLink: "link1",
  },
  {
    title: "title2",
    issuer: "issuer2",
    date: "date2",
    description: "description2.",
    credentialLink: "link2",
  },
];

const LicensesAndCertifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Licenses and Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{cert.title}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-2">
                {cert.description}
              </p>
              <Badge variant="secondary">{cert.date}</Badge>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LicensesAndCertifications;
