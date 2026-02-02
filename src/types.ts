export interface Social {
  name: string;
  url: string;
  faClassName: string;
}

export interface MainData {
  name: string;
  occupation: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  website: string;
  social: Social[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface Award {
  name: string;
  image: string;
}

export interface Resource {
  [key: string]: string | undefined;
}

export interface Publication {
  author: string;
  title: string;
  misc: string;
  resource: Resource;
  award?: Award;
}

export interface Experience {
  title: string;
  place: string;
  years: string;
  description: string;
  resource: Resource;
  award?: Award;
}

export interface Honor {
  name: string;
  years: string;
  resource: Resource;
}

export interface Skill {
  name: string;
  level: string;
}

export interface ResumeData {
  education: Education[];
  publications: Record<string, Publication[]>;
  experience: Record<string, Experience[]>;
  honors: Honor[];
  skills: Skill[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  url: string;
}

export interface PortfolioData {
  projects: Project[];
}

export interface Config {
  main: MainData;
  resume: ResumeData;
  portfolio: PortfolioData;
}
