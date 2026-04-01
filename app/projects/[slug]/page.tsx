import { notFound } from "next/navigation";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import {
  PROJECT_BY_SLUG_QUERY,
  ALL_PROJECT_SLUGS_QUERY,
} from "@/sanity/queries/projects";
import { urlFor } from "@/sanity/lib/imageUrl";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await client
    .withConfig({ useCdn: false })
    .fetch(ALL_PROJECT_SLUGS_QUERY);
  return slugs.map((item: { slug: string }) => ({ slug: item.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: project } = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!project) notFound();

  const imageUrl = project.image
    ? urlFor(project.image).width(1200).height(630).fit("crop").url()
    : null;

  return (
    <div className="container mx-auto max-w-3xl lg:max-w-5xl px-5 py-12">
      <div className="mb-8">
        <Link href="/projects">&larr; Return to projects</Link>
      </div>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={project.title ?? ""}
          width={1200}
          height={630}
          className="rounded-xl object-cover mb-8 w-full"
          priority
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      {project.description && (
        <p className="font-mono text-lg mb-8 max-w-2xl">
          {project.description}
        </p>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-200 text-black font-bold py-2 px-6 rounded-md inline-block"
        >
          Visit site
        </a>
      )}
    </div>
  );
}
