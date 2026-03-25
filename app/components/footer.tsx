import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="container mx-auto sm:px-6 lg:px-8 grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-end">
          <Image
            src="/logo.png"
            alt="Midnight code logo"
            height={68}
            width={260}
          />
          <div className="flex flex-col gap-y-2.5 text-end">
            <Link href="/">Home</Link>
            <Link href="https://late-night-code.midnight-code.tech/">Blog</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 text-start justify-center uppercase">
          <p>
            Address: 500 W 5th Street,
            <br /> Suite 800, Winston-Salem, NC
          </p>
          <p>Phone/WhatsApp: +1 (336) 692-6157</p>
          <p>Email: contact@midnight-code.tech</p>
        </div>
      </div>
    </div>
  );
}
