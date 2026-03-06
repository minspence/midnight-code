import Image from "next/image";
import Link from "next/link";

import ContactForm from "./components/contactForm";
import CardContainer from "./components/card/card";

export default function Home() {
  return (
    <div>
      <main>
        <section
          id="hero"
          className="bg-[url(/hero-background.jpeg)] h-100 mt-4"
        >
          <div className="container mx-auto sm:px-6 lg:px-8">
            <div>
              <h1 className="text-4xl text-[#2CDDE8] font-bold">
                Midnight Code
              </h1>
              <p className="text-sm">The best ideas come after midnight.</p>
            </div>
          </div>
        </section>
        <section id="featured">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="mb-2.5">
                <h2 className="text-3xl font-semibold">Featured Projects</h2>
              </div>
              <div className="mb-5">
                <ul className="grid grid-cols-3">
                  <li>
                    <CardContainer />
                  </li>
                  <li>
                    <div>
                      <div>image here</div>
                      <div>
                        <h3>Creative Counseling</h3>
                        <p>Nextjs website</p>
                        <Link href="#">
                          <button className="bg-[#FB3998] rounded h-9 w-38">
                            Visit site
                          </button>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>image here</div>
                      <div>
                        <h3>Late night Code</h3>
                        <p>Nextjs Sanity Blog website</p>
                        <Link href="#">
                          <button className="bg-[#FB3998] rounded h-9 w-38">
                            Visit site
                          </button>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="#">
                <button className="bg-[#FB3998] rounded h-9 w-38">
                  View All Projects
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section id="tools" className="my-8 bg-black h-100 ">
          <div className="container grid grid-col bg-red-200 mx-auto h-full">
            <div className="bg-orange-200 max-w-3xs my-4 ">
              <h2 className="text-3xl font-bold">What I build with</h2>
              <p className="text-sm">If you care about that sorta thing.</p>
            </div>
            <ul className="bg-orange-300 grid grid-cols-3 grid-rows-2 p-3 gap-8">
              <li>Nextjs</li>
              <li>Tailwind</li>
              <li>Typescript</li>
              <li>Sanity</li>
              <li>Supabase</li>
              <li>Webflow</li>
            </ul>
          </div>
        </section>
        <section id="contact">
          <div className="container mx-auto grid grid-cols-2">
            <div className="flex flex-col">
              <div>
                <h2>Let build something!</h2>
                <p>
                  Whatever you want to build, website, web application, App. Im
                  here to help drop me a line and lets talk.
                </p>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
            <div>
              <div>
                <ul>
                  <li>
                    Address: 500 W 5th Street, Suite 800, Winston-Salem, NC,
                    27101
                  </li>
                  <li>
                    <p>Phone/WhatsApp: 336-692-6157</p>
                  </li>
                  <li>
                    <p>Email: contact@midnight-code.tech</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
