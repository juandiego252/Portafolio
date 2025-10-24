import type { IProjects } from "../types/projects.type";

export const Projects: IProjects[] = [
    {
        id: "penguin",
        title: "Penguin GPT",
        description: {

            en: "🐧 Intelligent assistance application with artificial intelligence tools. It combines multiple functionalities, including spell checking, text-to-speech and speech-to-text conversion, as well as image generation and recreation for animation studies. Its interface prioritizes usability with elements that highlight the main functions.",
            es: "🐧 Aplicación de asistencia inteligente con herramientas de inteligencia artificial. Combina múltiples funcionalidades, incluyendo correción ortográfica, conversión de texto a audio y de audio a texto, así como generación y recreación de imágenes orientadas a estudios de animación. Su interfaz prioriza la usabilidad con elementos que resaltan las funciones principales.",
        },
        github: "https://github.com/juandiego252/ReactGTP-Project.git",
        link: "https://penguin-gpt-five.vercel.app",
        favIcon: "/assets/projects-images/PenguinGPT.svg",
        image: [
            {
                src: "/assets/projects-mocks/PenguinGPTOne.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/PenguinGPTwo.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/PenguinGPThree.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/PenguinGPTFour.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/PenguinGPTFive.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/PenguinGPTSix.png",
                alt: "URL Shortener - Home Page"
            },
        ],
        tags: ['React', 'Tailwind', 'NestJS', 'OpenAI', 'Gemini', 'Azure', 'Vercel'],
        fullstack: true,
        updated: true,
    },
    {
        id: "url",
        title: "URL Shortener",
        description: {
            en: "🌱 Link shortening service developed with ASP.NET Core, designed to transform long URLs into short, easy-to-share links. It has optimized performance thanks to the use of cache, which guarantees fast and efficient responses. In addition, it offers a detailed statistics system that allows you to track the use of each link.",
            es: "🌱 Servicio de acortamiento de enlaces desarrollado con ASP.NET Core, diseñado para transformar URLs largas en enlaces cortos y fáciles de compartir. Posee un redimiento optimizado gracias al uso de caché, lo que garantiza respuestas rápidas y eficientes. Además, ofrece un sistema de estadísticas detalladas que permite rastrear el uso de cada enlace.",

        },
        github: "https://github.com/juandiego252/URLShortenerApp.git",
        link: "https://url-shortener-app-virid.vercel.app/",
        favIcon: "/assets/projects-images/link.svg",
        image: [
            {
                src: "/assets/projects-mocks/URLShorterAppOne.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/URLShorterAppTwo.png",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "/assets/projects-mocks/URLShorterAppThree.png",
                alt: "URL Shortener - Home Page"
            }
        ],
        tags: ['React', 'Tailwind', 'ASP.NET', 'Redis', 'Azure', 'Vercel'],
        updated: true,
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
        favIcon: "/assets/projects-images/wallpaper.svg",
        image: [
            {
                src: "/assets/projects-images/wallpaper-app-1.png",
                alt: "Wallpapers App - Home Page"
            },
        ],
        tags: ['React', 'MongoDB', 'Express', 'Cloudinary'],
        fullstack: true
    },
    {
        id: "carfaith",
        title: "Carfaith - App",
        description: {
            en: "🚗 Car dealership app with admin panel.",
            es: "🚗 Aplicación para manejo de productos",
        },
        link: "",
        github: "",
        favIcon: "/assets/projects-images/carfaith.svg",
        image: [
            {
                src: "/assets/projects-images/carfaith-1.png",
                alt: "Carfaith App - Home Page"
            },
        ],
        tags: ['React', 'ASP.NET', 'Azure', 'PostgreSQL'],
        fullstack: true
    }

]
