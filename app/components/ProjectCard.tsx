import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/imageUrl'

export type ProjectCardData = {
  _id: string
  title: string | null
  slug: { current: string | null } | null
  image: Record<string, unknown> | null
  description: string | null
  liveUrl: string | null
}

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  const imageUrl = project.image
    ? urlFor(project.image).width(800).height(480).fit('crop').url()
    : null

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={project.title ?? ''}
          width={800}
          height={480}
          className="rounded-xl object-cover mb-3"
        />
      )}
      <h3 className="text-lg font-bold mb-2.5">{project.title}</h3>
      {project.description && (
        <p className="font-mono mb-6">{project.description}</p>
      )}
      <div className="flex gap-3">
        <Link href={`/projects/${project.slug?.current}`}>
          <button className="bg-blue-200 text-black font-bold py-2 px-4 rounded-md">
            View project
          </button>
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-magenta-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Live site
          </a>
        )}
      </div>
    </div>
  )
}
