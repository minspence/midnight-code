import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/", current: false },
  { name: "Blog", href: "/late-night-code", current: false },
  { name: "About", href: "/minuit-spence", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const classNames = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export default function Navbar() {
  return (
    <div className="container mx-auto flex justify-between h-16 items-center">
      <div>
        <Image
            src="/logo.png"
            alt="Midnight Code logo"
            height={128}
            width={128}
        />
      </div>
      <nav>
        <div>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
