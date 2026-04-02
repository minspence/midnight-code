import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const profile = {
  name: "Minuit Spence",
  email: "minspence@midnight-code.tech",
  avatar: "/minuitspence.jpg",
  backgroundImage: "/rebecca_CP.png",
  fields: [
    ["Phone", "(336) 692-6157 "],
    ["Email", "minspence@midnight-code.tech"],
    ["Title", "Full Stack Developer"],
    ["Location", "Winston-Salem"],
    ["Birthday", "March 8, 1990"],
  ],
};

export default function MinuitSpencePortfolio() {
  return (
    <div>
      <div className="relative h-32 w-full lg:h-48">
        <Image
          alt=""
          src={profile.backgroundImage}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              alt={profile.name}
              src={profile.avatar}
              height={100}
              width={100}
              sizes="128px"
              className="size-24 rounded-full ring-4 ring-white sm:size-32 dark:ring-gray-900 dark:outline dark:-outline-offset-1 dark:outline-white/10"
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-white">
                {profile.name}
              </h1>
              <p>{profile.fields.find(([label]) => label === "Title")?.[1]}</p>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20"
              >
                <EnvelopeIcon
                  aria-hidden="true"
                  className="mr-1.5 -ml-0.5 size-5 text-gray-400 dark:text-gray-300"
                />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20"
              >
                <PhoneIcon
                  aria-hidden="true"
                  className="mr-1.5 -ml-0.5 size-5 text-gray-400 dark:text-gray-300"
                />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900 dark:text-white">
            {profile.name}
          </h1>
        </div>
        <div className="mt-6">
          <p className="text-gray-300 max-w-125 mx-auto">
            Fullstack freelance website developer based in Winston-Salem, North Carolina. I like to build responsive websites and web applications. I&apos;m always looking for new challenges and opportunities to grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}
