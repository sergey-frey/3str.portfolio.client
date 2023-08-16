"use client";

import { ProjectsResearch } from "@/widgets/projects-research";

export default function ProjectsPage() {
  return (
    <main className="px-4 lg:px-10 py-[100px]">
      <h1 className="text-h2 font-h2 lg:text-h1 lg:font-h1">
        Мои навыки и примеры их применения
      </h1>
      <ProjectsResearch />
    </main>
  );
}
