import Image from "next/image";
import ContactForm from "./components/contactForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        {/* hero section */}
        <section
          id="hero"
          className="container mx-auto max-w-3xl sm:mb-7 lg:max-w-7xl px-5 py-12 grid gap-5 lg:grid-cols-2 items-center">
            <div className="md:col-span-2">
              <h1 className="font-inter font-bold mb-2 sm:mb-2.5 md:text-9xl sm:text-7xl text-5xl tracking-tight leading-[97.52%] max-w-200 max-h-62 ">Midnight Code</h1>
              <p className="font-mono">&#34;The best ideas come after midnight.&#34;</p>
            </div>
            <div className="flex gap-5">
              <Link href='/contact'>
              <button>Let&#39;s Chat</button>
              </Link>
              <Link href='/projects'>
              <button>View Work</button>
              </Link>
            </div>
        </section>

        {/* featured section */}
        <section id="featured" className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-12">


          <div className="grid gap-9 grid-cols-[repeat(auto-fit,minmax(15.62rem,1fr))]">
            <h2 className="text-3xl font-bold text-center col-span-full mb-7">Featured Projects</h2>
            <div>
              <Image src="/Hayes-valley.jpg" alt="Hayes Valley Interior Design" width={500} height={300} className="rounded-xl object-cover mb-3"/>
              <h3 className="text-lg font-bold mb-2.5">Project Name</h3>
              <p className="font-mono mb-6">Lorem, ipsum dolor sit amet consectetur adipisicng elit. Labore, praesentium. </p>
              <Link href="/project/hayes-valley-interior-design">
              <button className="bg-blue-200">View project</button>
              </Link>
            </div>
            <div>
              <Image src="/Hayes-valley.jpg" alt="Hayes Valley Interior Design" width={500} height={300} className="rounded-xl object-cover mb-3"/>
              <h3 className="text-lg font-bold mb-2.5">Project Name</h3>
              <p className="font-mono mb-6">Lorem, ipsum dolor sit amet consectetur adipisicng elit. Labore, praesentium. </p>
              <Link href="/project/hayes-valley-interior-design">
              <button className="bg-blue-200">View project</button>
              </Link>
            </div>
            <div>
              <Image src="/Hayes-valley.jpg" alt="Hayes Valley Interior Design" width={500} height={300} className="rounded-xl object-cover mb-3"/>
              <h3 className="text-lg font-bold mb-2.5">Project Name</h3>
              <p className="font-mono mb-6">Lorem, ipsum dolor sit amet consectetur adipisicng elit. Labore, praesentium. </p>
              <Link href="/project/hayes-valley-interior-design">
              <button className="bg-blue-200 text-black font-bold py-2.5 px-4 rounded-md">View project</button>
              </Link>
            </div>
          </div>
        </section>

        {/* tools section */}
        <section id="tools" className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-12">
          <div className="mb-7">
            <h2 className="text-3xl font-bold mb-2.5">Tools I use</h2>
            <p className="font-mono">&#34;If you care about that sorta thing.&#34;</p>
          </div>
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(90px,1fr))] items-center">
            <Image src="/logos/Next.js.svg" alt="Next.js logo" width={100} height={100}/>
            <Image src="/logos/ts-logo.png" alt="TypeScript logo" width={100} height={100}/>
            <Image src="/logos/Tailwind.png" alt="Tailwind CSS logo" width={100} height={100}/>
            <Image src="/logos/Supabase.png" alt="Supabase logo" width={100} height={100}/>
            <Image src="/logos/Sanity.png" alt="Sanity logo" width={100} height={100}/>
            <Image src="/logos/Webflow.jpeg" alt="Webflow logo" width={100} height={100}/>
          </div>

        </section>
        {/* contact section */}
        <section id="contact" className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-12 grid gird-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <ContactForm />
          </div>
          <div>
            <h2 className="font-bold text-4xl mb-2.5">Let build something!</h2>
            <p className="font-mono font-sm max-w-100 ">
              &#34;Whatever you want to build, website, web application, or have an App. idea Im
              here to help drop me a line and lets talk.&#34;
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
