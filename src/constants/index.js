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



export { services, technologies, experiences };
