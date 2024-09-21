import freeCodeCamp from "@/assets/images/freeCodeCamp.webp";
import analysis from "@/assets/images/analysis.webp";
import google from "@/assets/images/google.webp";
import css from "@/assets/images/css.webp";
import html from "@/assets/images/html.webp";
import openEDG from "@/assets/images/openEDG.webp";
import python from "@/assets/images/python.webp";
import first from "@/assets/images/first.webp";
import cambridge from "@/assets/images/cambridge.webp";

const certificationData = [
  {
    id: "dataAnalysis",
    issuer: "freeCodeCamp",
    credentialId: "fcc987a7545-306c-4828-875c-6b603a809ddb-dawp",
    credentialLink:
      "https://www.freecodecamp.org/certification/fcc987a7545-306c-4828-875c-6b603a809ddb/data-analysis-with-python-v7",
    logo: freeCodeCamp,
    skillLogo: analysis,
    translate: "translate-x-1.5 translate-y-1.5 -rotate-17",
    size: "w-24 h-24 ss:w-28 ss:h-28 sm:w-32 sm:h-32",
    padding: "py-[2px]",
  },
  {
    id: "google1",
    issuer: "Google Actívate",
    credentialId: "306312174",
    credentialLink:
      "https://skillshop.exceedlms.com/student/award/1bwb6pNByceD1ZBCxoqFWXmA",
    logo: google,
    skillLogo: css,
    translate: "translate-x-0 translate-y-3.5 -rotate-12",
    size: "w-[95px] ss:w-[105px] ssm:w-[105px] sm:w-[110px]",
  },
  {
    id: "google2",
    issuer: "Google Actívate",
    credentialId: "306303461",
    credentialLink:
      "https://skillshop.exceedlms.com/student/award/jiVh7R2mi5kuMarVmWCquauW",
    logo: google,
    skillLogo: html,
    translate: "translate-x-0 translate-y-3.5 -rotate-12",
    size: "w-[95px] ss:w-[105px] ssm:w-[105px] sm:w-[110px]",
  },
  {
    id: "pcep",
    issuer: "OpenEDG Python Institute",
    credentialId: "k5M3.bwpf.J8Ys",
    credentialLink: "https://verify.openedg.org/?id=k5M3.bwpf.J8Ys",
    logo: openEDG,
    skillLogo: python,
    translate:
      "translate-x-6 translate-y-7 ssm:translate-x-4 ssm:translate-y-7 sm:translate-x-7 sm:translate-y-[2.1rem] -rotate-17",
    size: "w-32 h-32 sm:w-40 sm:h-40",
  },
  {
    id: "b2",
    issuer: "Escola d'Idiomes de Montgat",
    logo: first,
    skillLogo: cambridge,
    translate:
      "-translate-x-1 translate-y-4 ssm:-translate-x-1 ssm:translate-y-6 -rotate-12 ss:-rotate-17",
    size: "w-[84px] ss:w-[92px] ssm:w-[100px]",
  },
];

export default certificationData;
