import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import projectsData from "@/constants/projectsData";
import ScrollableContent from "@/modules/scrollable-content/ScrollableContent";
import { Project } from "@/types/project";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="relative">
    <div className="h-64 mx-2 -mb-3 relative z-10">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover rounded-xl border border-borderLight dark:border-0 shadow-md dark:shadow-lg"
        loading="lazy"
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
        <ScrollableContent maxHeight="11rem">
          <p className="text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 leading-tight mr-2">
            {project.description}
          </p>
        </ScrollableContent>
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

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectList = projectsData.map((item) => ({
    ...item,
    ...(t(`projects.projectsData.${item.id}`, { returnObjects: true }) as Omit<
      Project,
      keyof typeof item
    >),
  }));

  return (
    <section id="projects" className="py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10">
      <h2 className="text-2xl font-bold mb-6">{t("projects.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 mlg:gap-y-8 lg:gap-y-10 gap-x-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
