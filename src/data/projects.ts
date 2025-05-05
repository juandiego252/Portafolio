import type { IProjects } from "../types/projects.type";

export const Projects: IProjects[] = [
    {
        id: "url",
        title: "URL Shortener",
        description: {
            en: "🌱 An open-source URL shortener.",
            es: "🌱 Un acortador de URL de código abierto.",

        },
        github: "https://github.com/juandiego252/URLShortenerApp.git",
        link: "https://url-shorten-app-three.vercel.app/",
        image: "/assets/projects-images/link.svg",
        tags: ['React', 'Tailwind', 'ASP.NET', 'Redis', 'Azure'],
        updated: true,
        fullstack: true,
    },
    {
        id: "penguin",
        title: "Penguin GPT",
        description: {

            en: "🐧 Application with AI for different tasks.",
            es: "🐧 Aplicación con IA para diferentes tareas.",
        },
        github: "https://github.com/juandiego252/ReactGTP-Project.git",
        link: "",
        image: "/assets/projects-images/PenguinGPT.svg",
        tags: ['React', 'Tailwind', 'NestJS', 'OpenAI', 'Gemini'],
        fullstack: true,
    },
    {
        id: "wallpaper",
        title: "Wallpapers - App",
        description: {
            en: "📱 Minimalist Collection of iPhone Wallpapers",
            es: "📱 Colección minimalista de fondos de pantalla para iPhone"
        },
        link: "",
        github: "https://github.com/juandiego252/WallPapers-App.git",
        image: "/assets/projects-images/wallpaper.svg",
        tags: ['React', 'MongoDB', 'Express', 'Cloudinary'],
        fullstack: true
    },

]
