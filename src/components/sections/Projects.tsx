import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    title: "Práctica de desarrollo Web",
    type: "Featured project",
    description:
      "Creación de una página web desde cero (HTML y CSS), utilizando el framework de VUE.js, y comunicación con una API ya establecida.",
    tags: ["Vue.js", "HTML", "CSS", "API"],
    image: "/path/to/project-image-1.jpg",
  },
  {
    title: "Práctica de desarrollo de una API",
    type: "Relevant practice",
    description: "Creación de una API REST con funcionalidades CRUD.",
    tags: ["API", "REST", "CRUD"],
    image: "/path/to/project-image-2.jpg",
  },
  {
    title: "Práctica de desarrollo de una aplicación Android",
    type: "Relevant practice",
    description:
      "Creación de una aplicación de móvil Android con el lenguaje Java. La App tenía comunicación con una API.",
    tags: ["Android", "Java", "API"],
    image: "/path/to/project-image-3.jpg",
  },
  {
    title: "Práctica de arquitectura y protocolos de Internet",
    type: "Relevant practice",
    description:
      "Desarrollo de un Case Study que comprendía todos los conceptos de CCNA3 (ACLs, NAT, WAN, VPNs, etc.)",
    tags: ["CCNA3", "Networking", "VPN"],
    image: "/path/to/project-image-4.jpg",
  },
  {
    title: "Trabajo final de grado universitario",
    type: "Relevant practice",
    description:
      "Desarrollo de un portal web para la gestión de alumnos con discapacidades mentales. Creación de un portal web para gestionar alumnos con discapacidades mentales, usando React, Tailwind, MySQL, NodeJS, la API de Google Maps, entre otras tecnologías y herramientas, para mejorar su experiencia escolar.",
    tags: ["React", "Tailwind", "MySQL", "NodeJS", "Google Maps API"],
    image: "/path/to/project-image-5.jpg",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div>
    <div className="h-48 bg-red-400 rounded-xl mx-2 -mb-3"></div>
    <Card className="overflow-hidden bg-[#F8F3EB] dark:bg-[#1F242E]">
      <CardHeader className="space-y-0.5 py-4 px-5">
        <CardTitle className="text-sm font-normal text-opaqueTextLight/90 dark:text-opaqueTextDark/80">
          Featured project
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
    </Card>
    <div className="flex flex-wrap gap-2 mx-2 mt-3">
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
