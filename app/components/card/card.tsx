import Image from "next/image";
import Link from "next/link";

const cardContent = {
  name: "Hayes Valley Interior Design",
  type: "Webflow website",
  projectHref: "/project/[..slug]",
  href: "https://hayes-valley-interior-design-stage.webflow.io/",
  image: "/Hayes-valley.jpg",
  description:
    "Hayes Valley Interior Design is a Webflow mock website built while completing the learn course work.",
};

export default function CardContainer() {
  return (
    <div className="w-60 p-2 rounded-xl bg-gray-400/5 outline-2 grid grid-col">
      <Image
        src={cardContent.image}
        alt={cardContent.name}
        height={400}
        width={300}
        className="h-40 rounded-xl object-cover"
      />
      <div className="p-2">
        <h3 className="text-xl">{cardContent.name}</h3>
        <p className="text-sm">{cardContent.type}</p>

        <Link
          href={cardContent.href}
          target="_blank"
          className="bg-magenta-500 hover:bg-magenta-200 m-2 rounded-md px-3 py-1"
        >
          <button>Visit site</button>
        </Link>
      </div>
    </div>
  );
}
