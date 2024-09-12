import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  MapPin,
  BriefcaseBusiness,
  ExternalLink,
  Info,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      company: "Nexiona Connectocrats, S.L.",
      position: "DESARROLLADOR DE SOFTWARE FULL-STACK",
      info: "Empresa especializada en soluciones IoT.",
      location: "Barcelona, España",
      dateRange: "2023 — 2024",
      description:
        "Desarrollo y mantenimiento de aplicaciones web.\n" +
        "Implementación de nuevas funcionalidades y optimización del código existente. Desarrollo back-end con Python.\n" +
        "Colaboración en el diseño y desarrollo de APIs REST.\n" +
        "Resolución de incidencias y soporte técnico.",
      logo: "src/assets/images/nexiona.webp",
      padding: "p-2",
      website: "https://nexiona.com/es/",
    },
    {
      company: "Fujitsu Technology Solutions, SA",
      position: "DEPARTAMENTO TÉCNICO, VALIDACIÓN DE SOFTWARE (Becario)",
      info: "Compañía global japonesa en el sector de las TIC.",
      location: "Barcelona, España",
      dateRange: "2019 — 2020",
      description:
        "Verificación de las diferentes funcionalidades de los programas/softwares desarrollados por la empresa con el fin de completar su validación.",
      logo: "src/assets/images/fujitsu.webp",
      padding: "p-1",
      website: "https://global.fujitsu/es-es",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, experiences.length);
  }, [experiences]);

  return (
    <section id="experience" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4"
          >
            <header
              className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-zinc-600/90 sm:col-span-2 dark:text-slate-200/60"
              aria-label={exp.dateRange}
            >
              {exp.dateRange}
            </header>
            <div className="z-10 sm:col-span-6">
              <div
                className="flex items-center cursor-pointer group/accordion"
                onClick={() => toggleAccordion(index)}
              >
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/avatar"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Avatar className="h-[4.5rem] w-[4.5rem] mr-4 border-2 bg-background/80 dark:bg-slate-200 border-borderLight dark:border-borderDark relative">
                    <AvatarImage
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className={`object-contain ${exp.padding} transition-all duration-300 group-hover/avatar:blur-sm group-hover/avatar:scale-105`}
                    />
                    <AvatarFallback>{exp.company[0]}</AvatarFallback>
                    <ExternalLink
                      className="absolute inset-0 m-auto h-6 w-6 text-black opacity-0 transition-opacity duration-300 group-hover/avatar:opacity-100"
                      strokeWidth={2}
                    />
                  </Avatar>
                </a>
                <div className="flex-grow">
                  <h3 className="font-medium leading-[1.3] text-black/85 dark:text-slate-100 flex items-center">
                    <span>{exp.company}</span>
                    <ChevronRight
                      className={cn(
                        "ml-2 h-4 w-4 shrink-0 transition-transform duration-300",
                        "opacity-0 group-hover/accordion:opacity-100",
                        openIndex === index && "transform rotate-90"
                      )}
                    />
                  </h3>
                  <div className="mt-[10px] leading-tight font-normal text-opaqueTextLight dark:text-opaqueTextDark/95">
                    <div className="flex items-center">
                      <BriefcaseBusiness
                        className="mr-[9px] -mt-[2px] h-[17px] w-[17px]"
                        strokeWidth={2}
                      />
                      <span>{exp.position}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <Info
                        className="mr-[9px] -mt-[2px] h-[17px] w-[17px]"
                        strokeWidth={2}
                      />
                      <span>{exp.info}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin
                        className="mr-[9px] -mt-[2px] h-[17px] w-[17px]"
                        strokeWidth={2}
                      />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={cn(
                  "mt-2 pl-[5.6rem] text-base text-opaqueTextLight dark:text-opaqueTextDark/95",
                  "transition-all duration-500 ease-in-out",
                  "overflow-hidden"
                )}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0",
                  opacity: openIndex === index ? 1 : 0,
                  transitionProperty: "max-height, opacity",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  className={cn(
                    "transform transition-all duration-500 ease-in-out",
                    openIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[-10px] opacity-0"
                  )}
                >
                  {exp.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
