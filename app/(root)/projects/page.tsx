"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/types/projects";
import HeroSection from "@/components/shared/HeroSection";

const ProjectsPage = () => {
  return (
    <section>
      <HeroSection
        title="PROJECTS"
        description="Let's change the world together"
      />
      <div className="mb-24 md:pb-24">
        <div className="grid w-full grid-cols-1 justify-between justify-items-stretch gap-6 p-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="hero-bg flex flex-col items-center justify-center rounded-lg p-4 shadow-lg transition delay-75 hover:scale-110 hover:border-my-color  hover:ease-in-out"
              aria-label={`View projects ${project.name}`}
              rel="preload"
            >
              <Image
                src={project.photo}
                alt={project.name}
                width={300}
                height={300}
                className="max-h-40 w-full rounded-lg object-cover"
              />
              <p className="monserrat-a py-5 text-4xl font-semibold text-my-color-light md:text-2xl">
                {project.name}
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
