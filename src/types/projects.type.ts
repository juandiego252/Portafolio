
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
    | 'Next.js'
    | 'Azure'
    | 'PostgreSQL'
    | 'Dotnet';

type MultiLanguageDescription = {
    en: string;
    es: string;
}

type Images = {
    src: string;
    alt: string;
}

export interface IProjects {
    id?: string;
    title: string;
    description: MultiLanguageDescription;
    link: string;
    github: string;
    favIcon: string;
    image: Images[];
    tags: Stack[];
    updated?: true,
    fullstack?: boolean;
}