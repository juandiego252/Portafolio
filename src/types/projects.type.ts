
export type Stack =
    | 'React'
    | 'Tailwind'
    | 'ASP.NET'
    | 'Express'
    | 'Node.js'
    | 'TypeScript'
    | 'JavaScript'
    | 'MongoDB'
    | 'SQL'
    | 'Redis'
    | 'NestJS'
    | 'Cloudinary'
    | 'OpenAI'
    | 'Gemini'
    | 'Next.js';

export interface IProjects {
    title: string;
    description: string;
    link: string;
    github: string;
    image: string;
    tags: Stack[];
    updated?: true,
    fullstack?: boolean;
}