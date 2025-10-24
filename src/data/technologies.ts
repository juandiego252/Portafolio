import type { Stack } from "../types/projects.type";
import {
    NextJS,
    Tailwind,
    React,
    NodeJS,
    AspNet,
    MongoDB,
    Express,
    Cloudinary,
    Redis,
    SqlServer,
    OpenIA,
    NestJS,
    Gemini,
    Azure,
    PostgreSQL,
    Vercel
} from "../icons";

interface Technologies {
    stack: Stack;
    icon: (props: astroHTML.JSX.SVGAttributes) => any;
}

export const technologies: Technologies[] = [
    {
        stack: 'React',
        icon: React,
    },
    {
        stack: 'Tailwind',
        icon: Tailwind
    },
    {
        stack: 'ASP.NET',
        icon: AspNet
    },
    {
        stack: 'Express',
        icon: Express
    },
    {
        stack: 'Node.js',
        icon: NodeJS
    },
    {
        stack: 'TypeScript',
        icon: React,
    },
    {
        stack: 'JavaScript',
        icon: React,
    },
    {
        stack: 'MongoDB',
        icon: MongoDB,
    },
    {
        stack: 'SQL',
        icon: SqlServer,
    },
    {
        stack: 'Redis',
        icon: Redis,
    },
    {
        stack: 'NestJS',
        icon: NestJS,
    },
    {
        stack: 'Cloudinary',
        icon: Cloudinary,
    },
    {
        stack: 'OpenAI',
        icon: OpenIA,
    },
    {
        stack: 'Gemini',
        icon: Gemini,
    },
    {
        stack: 'Next.js',
        icon: NextJS,
    },
    {
        stack: 'Azure',
        icon: Azure,
    },
    {
        stack: 'PostgreSQL',
        icon: PostgreSQL,
    },
    {
        stack: 'Vercel',
        icon: Vercel,
    }
]   