import ContentType from "@/lib/types/ContentType";

const FrenchContent : ContentType = 
{
    header: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        contact: "Contact"
    },
    hero: {
        hi_my_name_is: "Salut, je m'appelle",
        i_do_this: "Je construis des choses pour le web",
        i_am_right_now: "Je suis ingénieur logiciel spécialisé dans la création d'expériences numériques exceptionnelles. Actuellement, je me concentre sur l'amélioration de mes compétences à différents niveaux tout en suivant mon cursus à l'école de codage 1337",
        download_cv: "Télécharger mon CV"
    },
    about: {
        title: "À propos de moi",
        about: "Je suis un développeur avec de solides connaissances en technologies front-end et en principes de design, mais mon focus principal est le développement backend et l'architecture de microservices. J'aime construire des systèmes évolutifs, travailler avec des APIs et structurer une logique backend propre. En parallèle de mon travail backend principal, je maîtrise des outils comme Docker et j'écris des scripts en Python quand c'est nécessaire. J'aborde chaque projet avec un état d'esprit pratique et une forte motivation pour créer des logiciels efficaces et fiables.",
        some_programming_languages: "quelques langages de programmation et technologies que j'ai récemment utilisés"
    },
    experiences: {title: "Mon Expérience", exps: [
        {
            tabName: "tronc commun",
            company: "École de Codage 1337",
            role: "Développeur Junior",
            from: "Oct 2024",
            to: "Présent",
            tasks: [
                "Réalisation de plus de 15 projets concrets couvrant la programmation de bas niveau en C, la gestion mémoire et les structures de données.",
                "Développement d'applications full-stack et implémentation de conteneurs Docker, microservices et APIs RESTful dans les étapes avancées.",
                "Acquisition de solides compétences en résolution de problèmes, d'autonomie et de la capacité d'apprendre et s'adapter rapidement dans des domaines techniques inconnus."
            ]
        }
    ]},
    projects: { title: "Projets sur lesquels j'ai travaillé", projs:[
            {
                name: "minishell",
                description: "Un shell Unix personnalisé en C avec support des pipes, redirections et commandes intégrées. Gestion du parsing, de la gestion des processus et des signaux pour reproduire le comportement de base de bash.",
                tags: 'UNIX . Langage C . Bash',
                repoLink : "https://github.com/aalahyan3/msh",
                liveLink: null
            },
            {
                name: "moovie-hub",
                description: "Une application frontend React qui utilise l'API TMDB pour afficher les détails des films et permet aux utilisateurs de regarder les bandes-annonces. Elle récupère des données comme les titres, images et évaluations, et les affiche dans une interface propre et facile à utiliser.",
                tags:"React . Front-end . API",
                repoLink: "https://github.com/aalahyan3/moovie_hub",
                liveLink: "https://moovie-hub.vercel.app/"
            },
            {
                name: "gtkm",
                description: "Formation full stack basique, un utilisateur se connecte et voit les données d'autres utilisateurs en fonction de ses permissions",
                tags:"React . Express . MongoDb",
                repoLink: "https://github.com/aalahyan3/gtkm",
                liveLink: null
            },
            {
                name: "stockify",
                description: "Application backend conçue pour gérer et suivre les articles en stock pour les entreprises ou l'usage personnel. Elle permet aux administrateurs d'effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les données de stock et fournit une authentification sécurisée pour les utilisateurs.",
                tags:"Express . PostgreSQL . JWT",
                repoLink: "https://github.com/aalahyan3/stockify",
                liveLink: null
            },
            {
                name: "multi",
                description: "Application web full-stack pour une plateforme de chat. Elle est construite avec next.js et fournit une authentification sécurisée utilisant Google OAuth et un chat en temps réel utilisant les web sockets",
                tags:"OAuth . Sockets . next.js",
                repoLink: "https://github.com/aalahyan3/multi",
                liveLink: "https://multichat.up.railway.app"
            }
    ]},
    contact: {
        title: "connectons-nous",
        get_in_touch: "Entrer en Contact",
        motivate: "je vérifie toujours ma boîte de réception, si vous avez des questions ou voulez juste dire bonjour, n'hésitez pas à m'envoyer un email",
        say_hello: "Dites Salut !!"
    }
}

export default FrenchContent;