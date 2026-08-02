import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    reactjs,
    threejs,
    github,
    c,
    aframe,
    colab,
    maya,
    python,
    unity,
    vagrant,
    vuforia,
    githubblack,
    intrackCap,
    intrackCap2,
    intrackCap3,
    intrackLogo,
} from "../assets";


export const navLinks = [
    {
        id: "#about",
        title: "About Me",
    },
    {
        id: "#work",
        title: "Projects",
    },
    {
        id: "#contact",
        title: "Contact Me",
    },
];

const services = [
    {
        title: "Multimedia Designer",
        icon: web,
    },
    {
        title: "Software Developer Enthusiast",
        icon: mobile,
    },
    {
        title: "3D Artist ",
        icon: backend,
    },
    {
        title: "Motion Graphics Enthusiast",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Vagrant",
        icon: vagrant,
    },
    {
        name: "Vuforia",
        icon: vuforia,
    },
    {
        name: "A-frame",
        icon: aframe,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "GitHub",
        icon: githubblack,
    },
    {
        name: "Colab",
        icon: colab,
    },
    {
        name: "Maya",
        icon: maya,
    },
];

const experiences = [
    {
        title: "InkTrack",
        company_name: "Flutter, Dart",
        icon: github,
        iconBg: "radial-gradient(circle at center, #2d2470ff, #4a37de)",
        iconLink: "https://github.com/JeffersonDevR/INKTRACK_APP",
        date: "November 2025 - Today",
        points: [
            "POS app for a local store made in Flutter and Dart",
            "Has the basic features of a POS app but the implementations or barcode scanner",
            "Later on the idea is implement OCR with the cam for writing of clients that owns or 'Fia'",
            "The application is currently in development and will be implemented in React Native to be used in mobile devices mostly for the BarScanner.",
        ]

    },
    {
        title: "InkTrack in Java",
        company_name: "Java, Vaadin , Spring Boot, H2 DB, html, css, js",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/JeffersonDevR/InkTrack__Java",
        date: "November 2025 - December 2025",
        points: [
            "Web application migrated from InkTrack made in Python(Flet) to Java(Vaadin)",
            "has the same porpuse of manage a local store in Cucuta, Colombia.",
            "The application has the same features as the original, but with a better UI/UX and more functionality.",
            "The application is currently in development and will be implemented in React Native to be used in mobile devices mostly for the BarScanner.",
        ]

    }, {

        title: "InkTrack POS System",
        company_name: "Python,Flet , CRUD , UI/UX",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/JeffersonDevR/InkTrack",
        date: "October 2025 - November 2025",
        points: [
            "POS System for InkTrack, a local store in Cucuta, Colombia.",
            "Has the basics of a POS System, with CRUD operations, UI/UX, and more.",
            "The Project will be implemented in React Native to be used in mobile devices.",
        ],

    },
    {

        title: "Usage of AI in Classes.",
        company_name: "Python,Streamlit",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/JeffersonDevR/UsoDeIAEnFormacion",
        date: "October 2025 - November 2025",
        points: [
            "Usage of AI in Classes.",
            "The main idea was how to present in a clean and interactive way the results of a poll that i made with some teamates.",
            "showing how the AI is used in classes and how it can be used to help students and teachers.",
            "and it's downsides and how to avoid them.",
        ],

    },
    {

        title: "Air Quality Frontend.",
        company_name: "Python,Flet",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/JeffersonDevR/AirQualityFront",
        date: "Octuber 2024 - November 2024",
        points: [
            "The first step was to create a frontend for the air quality data that i fetched from a API.",
            "the backend it's also made with python but using FastApi and a online weather API.",
            "the idea was to create a software that can be use to check the air quality based on some metrics provided by the weather api.",
            "This was my first project a the jumpad to software development.",
        ],

    }
]



const projects = [
    {
        id: "inktrack-app",
        title: "InkTrack App",
        description:
            "A point-of-sale application for a local store: inventory, sales tracking, and barcode scanning, built with Flutter.",
        tags: ["Flutter", "Dart"],
        github: "https://github.com/JeffersonDevR/INKTRACK_APP",
        image: null,
        screenshots: [intrackCap, intrackCap2, intrackCap3],
        featured: true,
    },
    {
        id: "inktrack-web",
        title: "InkTrack Web",
        description:
            "Web migration of the InkTrack POS with improved UI/UX, built with Java, Vaadin and Spring Boot.",
        tags: ["Java", "Vaadin", "Spring Boot"],
        github: "https://github.com/JeffersonDevR/InkTrack__Java",
        image: intrackLogo,
        featured: false,
    },
    {
        id: "inktrack-pos",
        title: "InkTrack POS",
        description:
            "Original InkTrack POS system for a local store: CRUD operations and inventory management, built with Python and Flet.",
        tags: ["Python", "Flet"],
        github: "https://github.com/JeffersonDevR/InkTrack",
        image: intrackLogo,
        featured: false,
    },
    {
        id: "gestor-tickets",
        title: "Gestor de Tickets",
        description:
            "A ticket management tool built with Python to organize and track support requests efficiently.",
        tags: ["Python"],
        github: "https://github.com/JeffersonDevR/Gestor_Tickets",
        image: null,
        featured: false,
    },
    {
        id: "air-quality-frontend",
        title: "Air Quality Frontend",
        description:
            "Frontend that visualizes air quality data fetched from a weather API, built with Python and Flet.",
        tags: ["Python", "Flet"],
        github: "https://github.com/JeffersonDevR/AirQualityFront",
        image: null,
        featured: false,
    },
    {
        id: "uso-ia-formacion",
        title: "AI Usage in Education",
        description:
            "Interactive dashboard presenting the results of a survey about AI usage in classrooms, showing benefits and drawbacks for students and teachers.",
        tags: ["Python", "Streamlit"],
        github: "https://github.com/JeffersonDevR/UsoDeIAEnFormacion",
        image: null,
        featured: false,
    },
    {
        id: "alura-store-data",
        title: "Alura Store Data Challenge",
        description:
            "Data analysis challenge: exploring store data to support data-driven decisions.",
        tags: ["Jupyter", "Python"],
        github: "https://github.com/JeffersonDevR/Alura_Latam_Store_Data_Challengue",
        image: null,
        featured: false,
    },
];


export { services, technologies, experiences, projects };
