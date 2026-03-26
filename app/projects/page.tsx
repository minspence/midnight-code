import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
        <div>
            <h1>My projects</h1>
            <p>Here are some of my projects</p>
            <div>
                <Link href="/project/hayes-valley-interior-design">
                <Image src="/Hayes-valley.jpg" alt="Hayes Valley Interior Design" width={500} height={300} className="rounded-xl object-cover mb-3"/>
                <h2 className="mb-2">Hayes Valley Interior Design</h2>
                </Link>
                <p>Description</p>
            </div>
        </div>
    </div>
  );
}
