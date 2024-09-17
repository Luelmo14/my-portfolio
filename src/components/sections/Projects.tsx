import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
}
const projectsData: Project[] = [
  {
    title: "OpenEvents · Proyecto Vue.js",
    type: "Featured project",
    description:
      "Desarrollo de una página web desde cero utilizando HTML, CSS y Vue.js. El proyecto incluía la implementación de diseño responsive, y integración con la API de OpenEvents. Funcionalidades clave: gestión de usuarios, eventos, y relaciones entre ellos. El desarrollo implicó organización del código en vistas y componentes, manejo de rutas, y realización de peticiones a la API.",
    tags: ["Vue.js", "HTML", "CSS", "API", "Responsive Design"],
    image: "src/assets/images/webProject.webp",
  },
  {
    title: "OpenEvents · API REST",
    type: "Featured project",
    description:
      "Creación de una API REST basada en OpenEvents usando Node.js y JavaScript. Implementa gestión de eventos, usuarios, asistencias, mensajes y amistades. Incluye autenticación, encriptación de contraseñas y usa Planet Scale para base de datos MySQL en la nube. El proyecto abarcó desarrollo de rutas, DAOs y documentación completa.",
    tags: ["Node.js", "JavaScript", "REST API", "MySQL", "Planet Scale"],
    image: "/path/to/project-image-2.jpg",
  },
  {
    title: "CornFlix · Aplicación Flutter",
    type: "Relevant practice",
    description:
      "Desarrollo de una aplicación móvil multiplataforma usando Flutter, que brinda información sobre películas. Integra geolocalización, autenticación con Firebase, y utiliza la API de TheMovieDB. Incluye funciones como búsqueda, favoritos, y recomendaciones basadas en ubicación y preferencias del usuario.",
    tags: ["Flutter", "Firebase", "API", "Geolocation"],
    image: "src/assets/images/cornflix.webp",
  },
  {
    title: "Case Study CCNA3",
    type: "Relevant practice",
    description:
      "Implementación de una red compleja utilizando Cisco Packet Tracer, abarcando conceptos de CCNA3. El proyecto incluyó configuración de routers y switches, implementación de HSRP, NAT, routing estático y dinámico, túneles GRE, DHCP, y ACLs. Se realizaron pruebas de conectividad y se documentó el proceso completo.",
    tags: [
      "CCNA3",
      "Networking",
      "Cisco Packet Tracer",
      "Routing",
      "Switching",
      "Security",
    ],
    image: "/path/to/project-image-4.jpg",
  },
  {
    title:
      "MenteCapaz - Portal web para gestión de alumnos con discapacidades mentales",
    type: "Trabajo final de grado",
    description:
      "Desarrollo de un portal web para la gestión de alumnos con discapacidades mentales. Utiliza React, Tailwind CSS, MySQL y Express. Incluye funcionalidades como gestión de usuarios, centros y estudiantes, integración con Google Maps, y sistema de autenticación. El proyecto aborda la necesidad de mejorar la experiencia educativa de estudiantes con necesidades especiales.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "Express.js",
      "Google Maps API",
      "Firebase",
    ],
    image: "/path/to/project-image-5.jpg",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative">
    <div className="h-48 mx-2 -mb-3 relative z-10">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover rounded-xl border border-borderLight dark:border-0 shadow-md dark:shadow-lg"
      />
    </div>
    <Card className="overflow-hidden bg-[#F8F3EB] dark:bg-[#1F242E] relative z-20">
      <CardHeader className="space-y-0.5 py-4 px-5">
        <CardTitle className="text-sm font-medium text-opaqueTextLight/75 dark:text-opaqueTextDark/80 tracking-wider">
          {project.type}
        </CardTitle>
        <CardTitle className="text-lg font-semibold mb-3.5 leading-tight">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-5 pb-4">
        <p className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 leading-tight">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="px-5 pb-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="default"
              className="hover:cursor-default hover:bg-primary/100"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
