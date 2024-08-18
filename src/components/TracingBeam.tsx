"use client";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import WordPullUp from "./magicui/word-pull-up";
import { TracingBeam } from "./ui/tracing-beam";
import { ArrowRightIcon, Github } from "lucide-react";

export function TracingBeamComponent() {
  return (
    <div className="px-2">
      <div>
        <WordPullUp
          className="text-4xl mb-5 font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Projects" />
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased py-2 relative pl-2">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} 
            className={cn(index + 1 === dummyContent.length ? "" : "border-b", "my-5")}>
              <h1 className="text-2xl text-transparent my-1 text-white font-sans font-bold">
                {item.title}
              </h1>
              <h2 className="text-black bg-white rounded-full text-sm w-fit px-4 my-2 py-1 border">
                {item.badge}
              </h2>
              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg object-cover userNotSelectImg"
                  />
                )}
                <div className="h-5" />
                {item.description}
                <a
                  target="_blank"
                  href={item.link}
                  className="z-10 flex items-center justify-center w-max my-4">
                  <div
                    className={cn(
                      "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                  >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 gap-2">
                      <Github /> <span> Github Repository</span>
                      <ArrowRightIcon className="mx-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "SkyLight",
    description: (
      <>
        <p>
          This is a complete social media application backend created using NestJS and a client-side application developed with Next.js. The backend offers a strong API for social media features like authentication, user management, and post interactions. The client-side application provides a user-friendly and responsive interface for users to engage with the social media platform.
        </p>
        <div>
          <h1>Tech Stack</h1>
          <p>
            Nextjs, Redux toolkit, TailwindCSS, shadcn ui, react-hook-form, socket io, zod
          </p>
        </div>
        <div>
          <h1 className="text-xl text-transparent my-2
            text-white font-sans font-bold">Features</h1>
          <ul className="list-disc mx-5">
            <li>User authentication with JWT and NextAuth.js</li>
            <li>Real-time chat using Socket io</li>
            <li>Image uploading feature</li>
            <li>Share Photo with your friends</li>
            <li>Light/dark mode toggle</li>
            <li>Application is fully responsive</li>
          </ul>
        </div>
      </>
    ),
    badge: "Next.js, NestJS",
    image:
      "/assets/app/mobile.png",
    link: "https://github.com/AkashMondal0/Skylight.git",
  },
  {
    title: "Sky Chat",
    description: (
      <>
        <p>
          This is a real-time chat application developed using Expo React Native and Nodejs. It has features like WhatsApp, Realtime Chat, Push messages, upload status, and share photos with your friends.
        </p>
        <div>
          <h1 className="text-xl text-transparent my-2
            text-white font-sans font-bold">Features</h1>
          <ul className="list-disc mx-5">
            <li>User authentication with JWT and bcrypt</li>
            <li>Real-time chat using Socket io</li>
            <li>Image uploading feature with Multer</li>
            <li>Share your Status with your friends</li>
            <li>Light/dark mode toggle</li>
          </ul>
        </div>
      </>
    ),
    badge: "React Native, Nodejs",
    image:
      "/assets/app/sky chat.png",
    link: "https://github.com/AkashMondal0/Sky-Chat-App-Expo.git",
  },
];
