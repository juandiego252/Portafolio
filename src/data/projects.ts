import type { IProjects } from "../types/projects.type";

export const Projects: IProjects[] = [
    {
        title: "Wallpapers - App",
        description: "📱 Minimalist Collection of iPhone Wallpapers",
        link: "https://tabler.io/icons",
        github: "https://github.com/juandiego252/WallPapers-App.git",
        image: "/assets/projects-images/wallpaper.svg",
        tags: ['React', 'MongoDB', 'Express', 'Cloudinary'],
        fullstack: true
    },
    {
        title: "URL Shortener",
        description: "🌱 An open-source URL shortener.",
        github: "https://github.com/juandiego252/URLShortenerApp.git",
        link: "https://url-shorten-app-three.vercel.app/",
        image: "/assets/projects-images/link.svg",
        tags: ['React', 'Tailwind', 'ASP.NET', 'Redis', 'SQL'],
        updated: true,
        fullstack: true,
    },
    {
        title: "Penguin GPT",
        description: "🐧Application with AI for different tasks.",
        github: "https://github.com/juandiego252/ReactGTP-Project.git",
        link: "https://url-shorten-app-three.vercel.app/",
        image: "/assets/projects-images/PenguinGPT.svg",
        tags: ['React', 'Tailwind', 'NestJS', 'OpenAI', 'Gemini'],
        fullstack: true,
    },
]
