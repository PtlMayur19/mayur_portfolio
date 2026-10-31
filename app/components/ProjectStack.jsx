"use client";

import ProjectCard from "./ProjectCard";

/**
 * ProjectStack – Vertical flex container hosting 4 project cards with CSS sticky stacking.
 *
 * Key Behavior:
 * - Desktop card spacing of `12vh` (`lg:gap-[12vh]`).
 * - Stacking order managed via z-index on each card article.
 * - Pure CSS sticky positioning (`lg:sticky lg:top-28`).
 * - Releases naturally into the following section once the last card is traversed.
 */
export default function ProjectStack({ projects }) {
  return (
    <div className="flex flex-col gap-16 px-4 sm:px-8 lg:px-20 lg:gap-[12vh]">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          totalCards={projects.length}
        />
      ))}
    </div>
  );
}
