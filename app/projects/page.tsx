import { sanityFetch } from "@/sanity/lib/live";
import { ALL_PROJECTS_QUERY } from "@/sanity/queries/projects";
import ProjectCard, { type ProjectCardData } from "../components/ProjectCard";
import Link from "next/link";

export default async function ProjectsPage() {
  const { data: projects } = await sanityFetch({ query: ALL_PROJECTS_QUERY });

  return (
    <div className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-12">
      <div className="mb-8">
        <Link href="/">&larr; Return Home</Link>
      </div>
      <h1 className="text-4xl font-bold mb-2.5">My Projects</h1>
      <p className="font-mono mb-12">Here are some of my projects</p>
      {projects.length === 0 ? (
        <p className="font-mono">No projects yet — check back soon.</p>
      ) : (
        <div className="grid gap-9 grid-cols-[repeat(auto-fit,minmax(15.62rem,1fr))]">
          {(projects as ProjectCardData[]).map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
