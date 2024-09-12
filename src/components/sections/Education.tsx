import { University, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Education = () => {
  const educationList = [
    {
      degree: "Grado Universitario en Técnicas de Aplicaciones de Software",
      institution: "La Salle Universitat Ramon Llull",
      location: "Barcelona",
      dateRange: "2020 — 2023",
      logo: "src/assets/images/laSalle.webp",
      padding: "p-1",
    },
    {
      degree:
        "Grado Superior de Administración de Sistemas Informáticos en Red",
      institution: "Stucom Centre d'Estudis",
      location: "Barcelona",
      dateRange: "2018 — 2020",
      logo: "src/assets/images/stucom.webp",
      padding: "p-3",
    },
    {
      degree: "Bachillerato Tecnológico",
      institution: "Institut Thalassa",
      location: "Montgat",
      dateRange: "2016 — 2018",
      logo: "src/assets/images/thalassa.webp",
      padding: "p-0.5",
    },
  ];

  return (
    <section id="education" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <header
              className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-zinc-600/90 sm:col-span-2 dark:text-slate-200/60"
              aria-label={edu.dateRange}
            >
              {edu.dateRange}
            </header>
            <div className="z-10 sm:col-span-6 flex items-center">
              <Avatar className="h-[4.5rem] w-[4.5rem] mr-4 border-2 bg-background/80 dark:bg-slate-200 border-borderLight dark:border-borderDark">
                <AvatarImage
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className={`object-contain ${edu.padding}`}
                />
                <AvatarFallback>{edu.institution[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium leading-[1.3] text-black/85 dark:text-slate-200">
                  <div>{edu.degree}</div>
                </h3>
                <div className="mt-[10px] leading-tight font-normal text-opaqueTextLight dark:text-opaqueTextDark">
                  <div className="flex items-center">
                    <University
                      className="mr-[9px] -mt-[3px] h-[17px] w-[17px]"
                      strokeWidth={2}
                    />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <MapPin
                      className="mr-[9px] -mt-[2px] h-[17px] w-[17px]"
                      strokeWidth={2}
                    />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
