import { cn } from "./utils";

// Define the IconName type with all possible icon names
export type IconName =
    "amazonec2-color.svg" |
    "amazons3-color.svg" |
    "amazonwebservices-color.svg" |
    "apachekafka-color.svg" |
    "apollographql-color.svg" |
    "discord-color.svg" |
    "docker-color.svg" |
    "drizzle-color.svg" |
    "expo-color.svg" |
    "express-color.svg" |
    "firebase-color.svg" |
    "git-color.svg" |
    "github-color.svg" |
    "githubactions-color.svg" |
    "githubcopilot-color.svg" |
    "gitlab-color.svg" |
    "grafana-color.svg" |
    "graphql-color.svg" |
    "jenkins-color.svg" |
    "jira-color.svg" |
    "kubernetes-color.svg" |
    "linkedin-color.svg" |
    "mysql-color.svg" |
    "nestjs-color.svg" |
    "nextdotjs-color.svg" |
    "nginx-color.svg" |
    "nodedotjs-color.svg" |
    "postgresql-color.svg" |
    "postman-color.svg" |
    "prisma-color.svg" |
    "react-color.svg" |
    "reactquery-color.svg" |
    "redis-color.svg" |
    "redux-color.svg" |
    "socketdotio-color.svg" |
    "tailwindcss-color.svg" |
    "typescript-color.svg" |
    "vercel-color.svg" |
    "vite-color.svg" |
    "vscode-color.svg"

// Define the Icon component
const SkyIcon: React.FC<{ iconName: IconName; className?: string; alt?: string }> = ({
    iconName,
    className = 'w-full h-full',
    alt = '',
}) => {
    return <img src={`/assets/icons/${iconName}`}
        alt={alt || iconName}
        className={cn('w-full h-full', className)} />;
};

export default SkyIcon;

