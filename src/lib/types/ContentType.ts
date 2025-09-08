

export interface HeaderSection {
    about: string,
    experience: string,
    projects: string,
    contact: string
}

export interface HeroSection {
    hi_my_name_is: string,
    i_do_this: string,
    i_am_right_now: string
    download_cv: string
}

export interface AboutSection {
    title: string,
    about: string,
    some_programming_languages: string,
}


export interface ExpSecion {
    tabName: string, company: string, link?: string, role: string, from: string, to: string, tasks: string[]
}


export interface ProjectsSection {
    name:string,
    description:string,
    tags: string,
    repoLink:string,
    liveLink: string | null
}


export interface ContactSection {
    title:string,
    get_in_touch: string,
    motivate: string,
    say_hello: string,
    all_rights_reserved?: string
}

interface Titles {
    about:string,
    exp:string,
    projets:string,
    contact:string
}

export default interface ContentType {
    header: HeaderSection,
    hero: HeroSection,
    about: AboutSection,
    experiences:{title:string, exps: ExpSecion[]},
    projects: { title: string , projs: ProjectsSection[]},
    contact: ContactSection
}
