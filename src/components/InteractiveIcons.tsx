import IconCloud from "@/components/magicui/icon-cloud";
import WordPullUp from "./magicui/word-pull-up";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
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
  "visualstudiocode",
  "androidstudio",
];

export function IconCloudComponent() {
  return (
    <div>
      <div>
        <WordPullUp
          className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          words="Skills"
        />
      </div>
      <div className="w-full min-h-dvh flex justify-center">
        <div className="relative flex h-full w-max max-w-full items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
