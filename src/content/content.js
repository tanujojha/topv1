export const main = {
    greet: "Hi, my name is",
    name: "Tanuj ojha.",
    whatdo: "I craft the online world.",
    whoami: "I’m a Full-Stack Developer who codes with passion, powered by caffeine and a knack for crafting scalable, efficient and intuitive applications.",
    current: "Crafting web magic and sipping coffee @MNB Soft Solution.",
    button: "Check out my Projects"
}

// export const about = {
//     greet: "Hey there !",
//     para1: "I’m a Full-Stack Developer with a knack for building reliable and user-friendly web applications using the MERN stack. I’m passionate about turning ideas into functional, scalable, and efficient digital solutions.",
//     para2: `Currently, I’m working at MNB Soft Solution Pvt. Ltd., where I focus on creating everything from project management tools with real-time chat to e-commerce backends with secure payment systems. Whether it’s designing RESTful APIs or implementing complex features, I enjoy tackling challenges and delivering results that make a difference.`,
//     para3: "In the past, I’ve built SaaS platforms with multi-tenant architectures and contributed to tools that streamline workflows and improve collaboration. My work gives me the chance to mix creativity with problem-solving, and I love every bit of it.",
//     para4: "When I’m not coding, you can find me doing anything that doesn’t involve debugging at 2 AM.",
// }
export const about = {
    greet: "Hey there !",
    para1: `I’m a Full-Stack Developer with a passion for turning ideas into powerful, production-ready applications. Using the MERN stack as my toolkit, I’ve built everything from **multi-tenant SaaS platforms** to **real-time chat systems** to **secure e-commerce backends**.`,
    para2: `Right now, I’m crafting scalable systems at MNB Soft Solution Pvt. Ltd., where my day can go from architecting database structures to perfecting a drag-and-drop Kanban board… and sometimes debugging things that “shouldn’t” break.`,
    para3: `I thrive on projects where performance, user experience, and clean architecture all meet. In my past work, I’ve tackled complex role-based permissions, real-time notifications, and multi-industry dashboards that adapt dynamically to client needs.`,
    para4: "When I’m not coding, you can find me doing anything that doesn’t involve debugging at 2 AM.",
}

// export const experience = [
//     {
//         id: 0,
//         name: "MNB SOFT SOLUTION",
//         duration: "July 2023 - Present",
//         companyUrl: "https://mnbsoft.com/",
//         designation: "Full-Stack Developer",
//         content: [
//             `Develop, maintain and ship high-quality and robust production code for a diverse array of projects for the company and 
//             clients including MNB CRM, MNB Project Management, MNB School Management, CentralizedExchange and numerous others.`,

//             `Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities.`,

//             `Implemented seamless chat functionality using 'socket.io' to facilitate communication among administrators, employees and clients within the MNB Project Management system.`,
//         ]

//     },
// ]
export const experience = [
    {
        id: 0,
        name: "MNB SOFT SOLUTION",
        duration: "July 2023 - Present",
        companyUrl: "https://mnbsoft.com/",
        designation: "Full-Stack Developer",
        content: [
            `Designed and maintained scalable multi-tenant SaaS architectures used by businesses across multiple industries.`,
            `Built real-time chat, notifications, and activity tracking systems using Socket.io & Web Push API.`,
            `Developed secure, role-based dashboards for admins, employees, and clients with JWT authentication.`,
            `Engineered backend services for e-commerce, including secure payment integration (PhonePe) and order lifecycle management.`,
            `Managed deployments on AWS EC2 with Nginx + PM2, ensuring smooth CI/CD and server monitoring.`,
            `Collaborated with designers, PMs, and developers to deliver projects that meet both client goals and technical best practices.`,
        ]

    },
]


export const skills = [
    {
        "title": "MongoDB",
        "img": "/assets/skills/mongodb.png",
        "link": "https://www.mongodb.com/",
    },
    {
        "title": "Express",
        "img": "/assets/skills/express.png",
        "link": "https://expressjs.com/",
    },
    {
        "title": "React",
        "img": "/assets/skills/react1.png",
        "link": "https://react.dev/",
    },
    {
        "title": "Node",
        "img": "/assets/skills/node.png",
        "link": "https://nodejs.org/",
    },
    {
        "title": "HTML",
        "img": "/assets/skills/html.png",
        "link": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        "title": "CSS",
        "img": "/assets/skills/css.png",
        "link": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        "title": "JavaScript",
        "img": "/assets/skills/js.png",
        "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        "title": "BootStrap",
        "img": "/assets/skills/bootstrap.png",
        "link": "https://getbootstrap.com/",
    },
    {
        "title": "Material UI",
        "img": "/assets/skills/mui.png",
        "link": "https://mui.com/",
    },
    {
        "title": "Git",
        "img": "/assets/skills/git.png",
        "link": "https://git-scm.com/",
    },
    {
        "title": "Github",
        "img": "/assets/skills/github.png",
        "link": "https://github.com/",
    },
    {
        "title": "JQuery",
        "img": "/assets/skills/jquery.png",
        "link": "https://jquery.com/",
    },
    {
        "title": "Mongoose",
        "img": "/assets/skills/mongoose1.png",
        "link": "https://mongoose.com/",
    },
    {
        "title": "AWS",
        "img": "/assets/skills/aws.png",
        "link": "https://aws.amazon.com/",
    },
    {
        "title": "BASH",
        "img": "/assets/skills/bash.png",
        "link": "https://www.gnu.org/software/bash/",
    },
    
]



export const projects = {
    artsocials: {
        img: "/assets/projects/artsocials.png",
        desc: `ArtSocials is a flexible Content sharing Website, where users are able to post their content of any kind such as text, photo or a video, and can look at their friend's posts and have the options to react and comment on a post.`,
        tool1: "MERN",
        tool2: "JWT",
        tool3: "Cookie-Parser",
        github: "https://github.com/tanujojha/ArtSocials",
        site: "https://artsocials.netlify.app/"
    },
    chatapp: {
        desc: `A quirky chat application with a login register functionality, where users can interact with other users. It also has option to send images.`,
        tool1: "MERN",
        tool2: "JWT",
        tool3: "Cookie-Parser",
        tool4: "Socket.io"
    },
    keeperapp: {
        img: "/assets/projects/keeperapp.png",
        desc: "Keeper App is a note-taking service like Google Keep which allows users to add, update and delete notes.",
        tool1: "ReactJS",
        tool2: "CSS",
        tool3: "BootStrap",
        github: "https://github.com/tanujojha/Keeper-App",
        site: "https://keepy.netlify.app"
    },
    tindog: {
        img: "/assets/projects/tindog.png",
        desc: "Tindog is a Tinder for dogs made with pure HTML and CSS. It is a quirky website where users can find a friend for their dog. It has options such as pricing and defferent breeds.",
        tool1: "HTML",
        tool2: "CSS",
        tool3: "BootStrap",
        github: "https://github.com/tanujojha/tindog",
        site: "https://tinderdogo.netlify.app"
    },
    simongame: {
        img: "/assets/projects/simongame.png",
        desc: "A game in which the player has to remember the order of the colors as computer and click the colors in the same order.",
        tool1: "HTML",
        tool2: "CSS",
        tool3: "JQuery",
        github: "https://github.com/tanujojha/simonGame",
        site: "https://tanujojha.github.io/simonGame/"
    },
    drumkit: {
        img: "/assets/projects/drumkit.png",
        desc: "DrumKit is a game which includes different instruments that form a typical Drum set such as base, symbols etc. One can hear different sounds by clicking on the instruments.",
        tool1: "HTML",
        tool2: "CSS",
        tool3: "BootStrap",
        github: "https://github.com/tanujojha/drumkit-",
        site: "https://tanujojha.github.io/drumkit-/"
    }
}


export const newProjects = {
    taskflier: {
        img: "/assets/projects/taskflier.png",
        desc: `Taskflier is a comprehensive SaaS project management platform with a multi-tenant 
                architecture for client isolation. The platform utilizes role-based access control with 
                dedicated admin, employee, and client dashboards.`,
        tool1: "MERN",
        tool2: "JWT",
        tool3: "socket.io",
        github: "https://github.com/tanujojha/ArtSocials",
        site: "https://taskflier.com"
    },
    mnbMart: {
        img: "/assets/projects/mnbmart.png",
        desc: `MNB Mart is a feature-rich multi-vendor Ecommerce platform. Built with Node.js and MongoDB for performance and flexibility. 
                Integrated secure payments (PhonePe) and implemented a real-time order tracking 
                system for enhanced customer experience. MNB Mart boasts a user-friendly interface 
                with comprehensive features, ensuring a seamless and secure shopping experience 
                for customers. `,
        tool1: "MERN",
        tool2: "JWT",
        tool3: "socket.io",
        github: "https://github.com/tanujojha/ArtSocials",
        site: "https://mnbmart.com"
    },
    mnbsoft: {
        img: "/assets/projects/mnbsoft.png",
        desc: `Taskflier is a comprehensive SaaS project management platform with a multi-tenant 
                architecture for client isolation. The platform utilizes role-based access control with 
                dedicated admin, employee, and client dashboards.`,
        tool1: "React.js",
        tool2: "node.js",
        tool3: "express.js",
        github: "https://github.com/tanujojha/ArtSocials",
        site: "https://artsocials.netlify.app/"
    },
    mnbschool: {
        img: "/assets/projects/artsocials.png",
        desc: `Taskflier is a comprehensive SaaS project management platform with a multi-tenant 
                architecture for client isolation. The platform utilizes role-based access control with 
                dedicated admin, employee, and client dashboards.`,
        tool1: "MERN",
        tool2: "JWT",
        tool3: "socket.io",
        github: "https://github.com/tanujojha/ArtSocials",
        site: "https://artsocials.netlify.app/"
    },
    
}

export const contactContent = {
    para1: "Feel free to drop me a message if you have",
    para2: "suggestions, ideas, or just want to collaborate!",
    para3: "My inbox is open for anyone with exciting projects to share."
}

export const deets = {
    resume: "https://drive.google.com/file/d/1fSQEy3fOTQRpvUFMpNpYidK4VJ310CH1/view?usp=drive_link",
    github: "https://github.com/tanujojha",
    linkedin: "https://www.linkedin.com/in/tanujojha/"
}