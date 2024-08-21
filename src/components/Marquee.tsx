import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import WordPullUp from "./magicui/word-pull-up";
import SkyIcon, { IconName } from "@/lib/skyicon";
const Skills = [{
  name: 'React',
  image: 'react-color.svg',
  description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
},
{
  name: 'GraphQL',
  image: 'graphql-color.svg',
  description: 'GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.'
},
{
  name: 'NodeJS',
  image: 'nodedotjs-color.svg',
  description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
},
{
  name: 'TypeScript',
  image: 'typescript-color.svg',
  description: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.'
},
{
  name: 'My SQL',
  image: 'mysql-color.svg',
  description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius daughter, and "SQL", the abbreviation for Structured Query Language.'
},
{
  name: 'MongoDB',
  image: 'mongodb-color.svg',
  description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
},
{
  name: 'JavaScript',
  image: 'javascript-color.svg',
  description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.'
},
{
  name: 'ExpressJS',
  image: 'express-color.svg',
  description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.'
},
{
  name: 'TailwindCSS',
  image: 'tailwindcss-color.svg',
  description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'
},
{
  name: 'Git',
  image: 'git-color.svg',
  description: 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.'
},
{
  name: 'Docker',
  image: 'docker-color.svg',
  description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.'
},
{
  name: 'Kubernetes',
  image: 'kubernetes-color.svg',
  description: 'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.'
},
{
  name: "Nginx",
  image: "nginx-color.svg",
  description: "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache."
},
{
  name: "Apache Kafka",
  image: "apachekafka-color.svg",
  description: "Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications."
},
{
  name: "Redis",
  image: "redis-color.svg",
  description: "Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker."
},
{
  name: "Jenkins",
  image: "jenkins-color.svg",
  description: "Jenkins is an open-source automation server that helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery."
},
{
  name: "AWS",
  image: "amazonwebservices-color.svg",
  description: "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis."
},
{
  name: "NextJS",
  image: "nestjs-color.svg",
  description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
},
]
const firstRow = Skills.slice(0, Skills.length / 2);
const secondRow = Skills.slice(Skills.length / 2);

const ReviewCard = ({
  name,
  image,
  description,
}: {
  name: string;
  image: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
      <SkyIcon iconName={image as IconName} className="w-12 h-12" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

export function MarqueeComponent() {
  return (
    <div className="w-full flex-col justify-between items-center my-5 mt-16">
      <WordPullUp
        className="text-4xl my-16 font-bold tracking-[-0.02em] 
          text-black dark:text-white md:text-7xl md:leading-[5rem]"
        words="Skills"
      />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((skill) => (
            <ReviewCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((skill) => (
            <ReviewCard key={skill.name} {...skill}  />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
