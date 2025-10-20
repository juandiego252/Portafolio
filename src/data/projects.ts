import type { IProjects } from "../types/projects.type";

export const Projects: IProjects[] = [
    {
        id: "penguin",
        title: "Penguin GPT",
        description: {

            en: "🐧 Application with AI for different tasks.",
            es: "🐧 Aplicación con IA para diferentes tareas.",
        },
        github: "https://github.com/juandiego252/ReactGTP-Project.git",
        link: "",
        favIcon: "/assets/projects-images/PenguinGPT.svg",
        image: [
            {
                src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "https://img.freepik.com/free-photo/person-warm-coat-standing-rocky-mountain-looking-trees_181624-5409.jpg?semt=ais_hybrid&w=740",
                alt: "URL Shortener - Home Page"
            },
            {
                src: "https://t4.ftcdn.net/jpg/06/25/82/63/360_F_625826397_CYcCuHP8h8KZRBzhZ0WgNtVWBJQNobxB.jpg",
                alt: "URL Shortener - Home Page"
            },
        ],
        tags: ['React', 'Tailwind', 'NestJS', 'OpenAI', 'Gemini'],
        fullstack: true,
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
        tags: ['React', 'Tailwind', 'ASP.NET', 'Redis', 'Azure'],
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
