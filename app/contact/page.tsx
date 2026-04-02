import Contact from "../components/contactForm";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl lg:max-w-7xl px-5 py-16 md:py-20 lg:py-28 flex flex-col items-center">
      <h1 className="font-inter font-bold text-3xl mb-8 w-full max-w-xl text-center">Let&#39;s chat</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 w-full max-w-xl">
        <div className="flex items-start gap-3">
          <PhoneIcon className="h-5 w-5 shrink-0 mt-0.5 text-blue-200" />
          <p className="font-mono text-sm text-gray-200">(336) 692-6157</p>
        </div>
        <div className="flex items-start gap-3">
          <EnvelopeIcon className="h-5 w-5 shrink-0 mt-0.5 text-blue-200" />
          <p className="font-mono text-sm text-gray-200">contact@midnight-code.tech</p>
        </div>
        <div className="flex items-start gap-3">
          <MapPinIcon className="h-5 w-5 shrink-0 mt-0.5 text-blue-200" />
          <p className="font-mono text-sm text-gray-200">
            500 W 5th Street Suite 800,<br />
            Winston-Salem, NC, USA
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
}
