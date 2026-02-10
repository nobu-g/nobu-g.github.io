export interface SocialLink {
  name: string;
  url: string;
  faClassName: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface MainData {
  name: string;
  occupation: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  social: SocialLink[];
  contactmessage?: string;
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

export interface Publication {
  author: string;
  title: string;
  misc: string;
  resource: Record<string, string>;
  award?: Award;
}

export interface Experience {
  title: string;
  place: string;
  years: string;
  description: string;
  resource: Record<string, string>;
  award?: Award;
}

export interface Honor {
  name: string;
  years: string;
  resource: Record<string, string>;
}

export interface Skill {
  name: string;
  level: string;
}

export interface ResumeSection {
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

export interface ResumeData {
  main: MainData;
  resume: ResumeSection;
  portfolio: PortfolioData;
}
