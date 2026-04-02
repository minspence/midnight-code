import Link from "next/link";

const navLinks = {
  main: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "https://late-night-code.midnight-code.tech" }, //Update to correct URL at build time
    { name: "About", href: "/minuit-spence" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/minspence" },
    { name: "LinkedIn", href: "https://linkedin.com/in/minuitspence" },
  ],
};

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div>
          <nav
            aria-label="Footer"
            className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
          >
            {navLinks.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex justify-center gap-x-10">
          {navLinks.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              {item.name}
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
          &copy; 2026 Midnight Code LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
