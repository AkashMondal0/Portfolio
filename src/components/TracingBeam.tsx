"use client";
import WordPullUp from "./magicui/word-pull-up";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamComponent() {
  return (
    <div className="px-2 mt-5">
      <div>
      <WordPullUp
      className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      words="Projects"/>
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="text-black bg-white rounded-full text-sm w-fit px-4 py-1 border">
                {item.badge}
              </h2>
              <h1 className="text-4xl text-transparent my-2
            text-neutral-800 font-sans font-bold">
                {item.title}
              </h1>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover userNotSelectImg"
                  />
                )}
                {item.description}
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
    title: "SkyLight App",
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
            text-neutral-800 font-sans font-bold">Features</h1>
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
  },
  {
    title: "Sky Chat, Android App",
    description: (
      <>
        <p>
          This is a real-time chat application developed using Expo React Native and Nodejs. It has features like WhatsApp, Realtime Chat, Push messages, upload status, and share photos with your friends.
        </p>
        <div>
          <h1 className="text-xl text-transparent my-2
            text-neutral-800 font-sans font-bold">Features</h1>
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
  }
];
