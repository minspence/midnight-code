import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Midnight Code | Web Development in Winston-Salem, NC",
  description:
    "Midnight Code builds responsive websites and web apps using Next.js, Sanity, and Supabase. Based in Winston-Salem, NC — let's build your next project.",
  alternates: { canonical: "https://midnight-code.tech" },
  openGraph: {
    title: "Midnight Code | Web Development in Winston-Salem, NC",
    description:
      "Midnight Code builds responsive websites and web apps using Next.js, Sanity, and Supabase. Based in Winston-Salem, NC — let's build your next project.",
    url: "https://midnight-code.tech",
    type: "website",
  },
};
import ContactForm from "./components/contactForm";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { FEATURED_PROJECTS_QUERY } from "@/sanity/queries/projects";
import ProjectCard, { ProjectCardData } from "./components/ProjectCard";

export default async function Home() {
  const { data: featuredProjects } = await sanityFetch({
    query: FEATURED_PROJECTS_QUERY,
  });

  return (
    <div>
      <main>
        {/* hero section */}
        <section
          id="hero"
          className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-16 md:py-20 lg:py-28 grid gap-5 lg:grid-cols-2 items-center"
        >
          <div className="md:col-span-2 mb-7">
            <h1 className="font-inter font-bold mb-2 sm:mb-2.5 lg:text-9xl md:text-7xl sm:text-5xl text-4xl tracking-tight leading-[97.52%] uppercase text-center">
              Midnight Code
            </h1>
            <p className="font-mono lg:text-end sm:text-center text-center text-sm/6">
              &#34;The best ideas come after midnight.&#34;
            </p>
          </div>
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-5 md:items-center">
            <p className="font-mono text-center md:text-left md:flex-1 max-w-150">
              Website development company based in Winston-Salem, North
              Carolina. Specializing in creating responsive websites, utilizing
              Next.js, Sanity, Supabase, and Webflow. Take a look at our work
              and let&#39;s build your next project!
            </p>
            <div className="flex gap-5 justify-center md:justify-end md:shrink-0">
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-blue-200 text-black font-bold py-2 px-4 rounded-md"
                >
                  Let&#39;s Chat
                </button>
              </Link>
              <Link href="/projects">
                <button
                  type="button"
                  className="bg-magenta-500 text-white font-bold py-2 px-4 rounded-md"
                >
                  View Work
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* featured section */}
        <section
          id="featured"
          className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-16 md:py-20 lg:py-28"
        >
          <h2 className="text-3xl font-bold text-center col-span-full mb-7">
            Featured Projects
          </h2>
          {featuredProjects.length > 0 ? (
            <div className="grid gap-9 grid-cols-[repeat(auto-fit,minmax(15.62rem,1fr))]">
              {featuredProjects.map((project: ProjectCardData) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          ) : (
            <p className="font-mono text-center">No featured projects yet.</p>
          )}
        </section>

        {/* tools section */}
        <section
          id="tools"
          className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-16 md:py-20 lg:py-28"
        >
          <div className="mb-7">
            <h2 className="text-3xl font-bold mb-2.5">Tools I use</h2>
            <p className="font-mono">
              &#34;If you care about that sorta thing.&#34;
            </p>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(90px,1fr))] items-center">
            <Image
              src="/logos/Next.js.svg"
              alt="Next.js logo"
              width={100}
              height={100}
            />
            <Image
              src="/logos/ts-logo.png"
              alt="TypeScript logo"
              width={100}
              height={100}
            />
            <Image
              src="/logos/Tailwind.png"
              alt="Tailwind CSS logo"
              width={100}
              height={100}
            />
            <Image
              src="/logos/Supabase.png"
              alt="Supabase logo"
              width={100}
              height={100}
            />
            <Image
              src="/logos/Sanity.png"
              alt="Sanity logo"
              width={100}
              height={100}
            />
            <Image
              src="/logos/Webflow.jpeg"
              alt="Webflow logo"
              width={100}
              height={100}
            />
          </div>
        </section>
        {/* contact section */}
        <section
          id="contact"
          className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-16 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="font-bold text-4xl mb-2.5">Let build something!</h2>
            <p className="font-mono text-sm max-w-100 mx-auto md:mx-0">
              &#34;Whatever you want to build, website, web application, or have
              an App. idea Im here to help drop me a line and lets talk.&#34;
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
