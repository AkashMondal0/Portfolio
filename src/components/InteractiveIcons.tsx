import IconCloud from "@/components/magicui/icon-cloud";
import WordPullUp from "./magicui/word-pull-up";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "visualstudiocode",
  //
  "nodedotjs",
  "express",
  "nextdotjs",
  'expo',
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "intellijidea",
  "postman",
  "insomnia",
  "redis",
  "mongodb",
  "mysql",
  "kubernetes",
  "jenkins",
  "tailwindcss",
  "githubactions",
  "nestjs",
  "drizzle",
  "redux",
  "graphql",
  "grafana"
];

export function IconCloudComponent() {
  return (
    <div className="mb-10">
      <div className="py-20">
        <WordPullUp
          className="text-4xl my-5 font-bold tracking-[-0.02em] 
          text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Tools & Services"
        />
        <p className="text-neutral-500 my-5 max-w-lg mx-auto text-sm text-center relative z-10 px-4">
          Here are some of the tools and services I use to build amazing things for the web, mobile, and cloud.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative flex
        rounded-full h-full w-max max-w-full items-center 
        justify-center overflow-hidden bg-background aspect-square">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
