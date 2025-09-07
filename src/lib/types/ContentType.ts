import ContentType from "@/locals/ContentType"

const  EnglishContentType : ContentType = 
{
    titles: { about: "About Me", exp: "My Experience", projets: "Projects i worked on", contact: "Let's Connect" },
    header: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
    },
    hero: {
        hi_my_name_is: "Hi, my name is",
        i_do_this: "I build things for the web",
        i_am_right_now: "I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on improving my skills at different levels along with my cursus at 1337 Coding School",
        download_cv: "Download my CV"
    },
    about: {
        about: "I'm a developer with solid knowledge of front-end technologies and design principles, but my main focus is on backend development and microservices architecture. I enjoy building scalable systems, working with APIs, and structuring clean backend logic. Alongside my core backend work, I'm comfortable using tools like Docker and writing scripts in Python when needed. I approach every project with a practical mindset and a strong drive to create efficient, reliable software.",
        some_programming_languages: "some programming languages and technologies i recently used"
    },
    experiences: [
        {
            tabNam: "common core",
            company: "1337 Coding School",
            role: "Junior developper",
            from: "Oct 2024",
            to: "Present",
            tasks: [
                "Completed over 15+ real-world projects covering low-level programming in C, memory management, and data structures.",
                "Developed full-stack applications and implemented Docker containers, microservices, and RESTful APIs in later stages.",
                "Gained strong problem-solving skills, autonomy, and the ability to learn and adapt quickly in unfamiliar technical domains."
            ]
        }
    ],
    projects: [
            {
                name: "minishell",
                description: "A custom Unix shell in C with support for pipes, redirections, and built-in commands. Handled parsing, process management, and signals to replicate basic bash behavior.",
                tags: 'UNIX . C language . Bash',
                repoLink : "https://github.com/aalahyan3/msh",
                liveLink: null
            },
            {
                name: "moovie-hub",
                description: "A React frontend app that uses the TMDB API to show movie details and lets users watch trailers. It fetches data like titles, images, and ratings, and displays them in a clean, easy-to-use interface.",
                tags:"React . Front-end . API",
                repoLink: "https://github.com/aalahyan3/moovie_hub",
                liveLink: "https://moovie-hub.vercel.app/"
            },
            {
                name: "gtkm",
                description: "basic Full stack training, A user sign in and see other users data based on his permessions",
                tags:"React . Express . MongoDb",
                repoLink: "https://github.com/aalahyan3/gtkm",
                liveLink: null
            },
            {
                name: "stockify",
                description: "backend application designed to manage and track stock items for businesses or personal use. It allows admins to perform CRUD (Create, Read, Update, Delete) operations on stock data and provides secure authentication for users.",
                tags:"Express . PostgreSQL . JWT",
                repoLink: "https://github.com/aalahyan3/stockify",
                liveLink: null
            },
            {
                name: "multi",
                description: "full-stack web application for a chatting platform.it is built with next.js and provides secure authentication using google OAuth and real-time chatting using web sockets",
                tags:"OAuth . Sockets . next.js",
                repoLink: "https://github.com/aalahyan3/multi",
                liveLink: "https://multichat.up.railway.app"
            }
    ],
    contact: {
        get_in_touch: "Get In Touch",
        motivate: "i always check my inbox, if you have any questions or just wanna say hello go ahead and send me an email",
        say_hello: "Say Hi!!"
    }
}