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
import { useTranslation } from "react-i18next";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialLink?: string;
  logo?: string;
  skillLogo?: string;
  translate?: string;
  size?: string;
  padding?: string;
}

const LicensesAndCertifications: React.FC = () => {
  const { t } = useTranslation();

  const certificationData = [
    {
      id: "dataAnalysis",
      issuer: "freeCodeCamp",
      credentialId: "fcc987a7545-306c-4828-875c-6b603a809ddb-dawp",
      credentialLink:
        "https://www.freecodecamp.org/certification/fcc987a7545-306c-4828-875c-6b603a809ddb/data-analysis-with-python-v7",
      logo: "src/assets/images/freeCodeCamp.webp",
      skillLogo: "src/assets/images/analysis.webp",
      translate: "translate-x-1.5 translate-y-1.5 -rotate-17",
      size: "w-32 h-32",
      padding: "py-[2px]",
    },
    {
      id: "google1",
      issuer: "Google Actívate",
      credentialId: "306312174",
      credentialLink:
        "https://skillshop.exceedlms.com/student/award/1bwb6pNByceD1ZBCxoqFWXmA",
      logo: "src/assets/images/google.webp",
      skillLogo: "src/assets/images/css.webp",
      translate: "translate-x-0 translate-y-3.5 -rotate-12",
      size: "w-[120px]",
    },
    {
      id: "google2",
      issuer: "Google Actívate",
      credentialId: "306303461",
      credentialLink:
        "https://skillshop.exceedlms.com/student/award/jiVh7R2mi5kuMarVmWCquauW",
      logo: "src/assets/images/google.webp",
      skillLogo: "src/assets/images/html.webp",
      translate: "translate-x-0 translate-y-3.5 -rotate-12",
      size: "w-[120px]",
    },
    {
      id: "pcep",
      issuer: "OpenEDG Python Institute",
      credentialId: "k5M3.bwpf.J8Ys",
      credentialLink: "https://verify.openedg.org/?id=k5M3.bwpf.J8Ys",
      logo: "src/assets/images/openEDG.webp",
      skillLogo: "src/assets/images/python.webp",
      translate: "translate-x-7 translate-y-[2.1rem] -rotate-17",
      size: "w-40 h-40",
    },
    {
      id: "b2",
      issuer: "Escola d'Idiomes de Montgat",
      logo: "src/assets/images/first.webp",
      skillLogo: "src/assets/images/cambridge.webp",
      translate: "-translate-x-1 translate-y-6 -rotate-17",
      size: "w-[100px]",
    },
  ];

  const certificationList = certificationData.map((item) => ({
    ...item,
    ...(t(`certifications.certificates.${item.id}`, {
      returnObjects: true,
    }) as Omit<Certification, keyof typeof item>),
  }));

  return (
    <section id="certifications" className="py-10">
      <h2 className="text-2xl font-bold mb-6">{t("certifications.title")}</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {certificationList.map((cert, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-5 pt-4 pb-0">
              <CardTitle className="flex items-center justify-between">
                <Avatar className="h-12 w-12 border-2 border-borderLight dark:border-borderDark aspect-square">
                  {cert.logo ? (
                    <AvatarImage src={cert.logo} alt={cert.issuer} />
                  ) : (
                    <AvatarFallback>{cert.issuer[0]}</AvatarFallback>
                  )}
                </Avatar>
                <p className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95">
                  {t("certifications.dateTitle")}{" "}
                  {t(`certifications.certificates.${cert.id}.date`)}
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
              {cert.credentialId && (
                <div
                  className={`flex items-center text-opaqueTextLight dark:text-opaqueTextDark/95 ${cert.padding}`}
                >
                  <Signature
                    className="h-[22px] w-[22px] mr-2"
                    strokeWidth={2}
                  />
                  <p className="font-medium leading-tight w-2/3">
                    {cert.credentialId}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="relative p-5 pt-0 pb-4">
              {cert.credentialLink && (
                <Button variant="default" className="w-full mr-[27%]" asChild>
                  <a
                    className="flex items-center"
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("certifications.credentialButton")}
                  </a>
                </Button>
              )}
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
