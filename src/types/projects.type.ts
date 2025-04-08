
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

type MultiLanguageDescription = {
    en: string;
    es: string;
}

export interface IProjects {
    id?: string;
    title: string;
    description: MultiLanguageDescription;
    link: string;
    github: string;
    image: string;
    tags: Stack[];
    updated?: true,
    fullstack?: boolean;
}