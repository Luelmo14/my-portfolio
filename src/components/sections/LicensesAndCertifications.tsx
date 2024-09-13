import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Signature } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialLink?: string;
  logo?: string;
  skillLogo?: string;
  translate?: string;
  size?: string;
  padding?: string;
}

const certifications: Certification[] = [
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "Aug. 2024",
    credentialId: "fcc987a7545-306c-4828-875c-6b603a809ddb-dawp",
    credentialLink: "#",
    logo: "src/assets/images/freeCodeCamp.webp",
    skillLogo: "src/assets/images/analysis.webp",
    translate: "translate-x-1.5 translate-y-1.5 -rotate-17",
    size: "w-32 h-32",
    padding: "py-[2px]",
  },
  {
    title: "Curso de introducción al desarrollo web: HTML y CSS (2/2)",
    issuer: "Google Actívate",
    date: "Jul. 2024",
    credentialId: "306312174",
    credentialLink: "#",
    logo: "src/assets/images/google.webp",
    skillLogo: "src/assets/images/css.webp",
    translate: "translate-x-0 translate-y-3.5 -rotate-12",
    size: "w-[120px]",
  },
  {
    title: "Curso de introducción al desarrollo web: HTML y CSS (1/2)",
    issuer: "Google Actívate",
    date: "Jun. 2024",
    credentialId: "306303461",
    credentialLink: "#",
    logo: "src/assets/images/google.webp",
    skillLogo: "src/assets/images/html.webp",
    translate: "translate-x-0 translate-y-3.5 -rotate-12",
    size: "w-[120px]",
  },
  {
    title: "PCEP – Certified Entry-Level Python Programmer",
    issuer: "OpenEDG Python Institute",
    date: "Jun. 2024",
    credentialId: "k5M3.bwpf.J8Ys",
    credentialLink: "#",
    logo: "src/assets/images/openEDG.webp",
    skillLogo: "src/assets/images/python.webp",
    translate: "translate-x-7 translate-y-[2.1rem] -rotate-17",
    size: "w-40 h-40",
  },
  {
    title: "First Certificate B2",
    issuer: "Escola d'Idiomes de Montgat",
    date: "Jan. 2017",
    credentialId: "N/A",
    credentialLink: "#",
    logo: "src/assets/images/first.webp",
  },
];

const LicensesAndCertifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Licenses and Certifications</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-5 pt-4 pb-0">
              <CardTitle className="flex items-center justify-between">
                <Avatar className="h-12 w-12 border-2 border-borderLight dark:border-borderDark aspect-square bg-white">
                  {cert.logo ? (
                    <AvatarImage src={cert.logo} alt={cert.issuer} />
                  ) : (
                    <AvatarFallback>{cert.issuer[0]}</AvatarFallback>
                  )}
                </Avatar>
                <p className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95">
                  Date of issue: {cert.date}
                </p>
              </CardTitle>
              <CardDescription className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 pt-4">
                {cert.issuer}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-5 pb-5 pt-0">
              <h3 className="text-lg font-semibold mb-3.5 leading-tight">
                {cert.title}
              </h3>
              <div
                className={`flex items-center text-opaqueTextLight dark:text-opaqueTextDark/95 ${cert.padding}`}
              >
                <Signature className="h-[22px] w-[22px] mr-2" strokeWidth={2} />
                <p className="font-medium leading-tight w-2/3">
                  {cert.credentialId}
                </p>
              </div>
            </CardContent>
            <CardFooter className="relative p-5 pt-0 pb-4">
              <Button variant="default" className="w-full mr-[27%]">
                Show credential
              </Button>
              {cert.skillLogo && (
                <div className={`absolute -bottom-1 -right-2 ${cert.size}`}>
                  <img
                    src={cert.skillLogo}
                    alt={`Skill for ${cert.title}`}
                    className={`w-full h-full transform ${cert.translate}`}
                  />
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LicensesAndCertifications;
