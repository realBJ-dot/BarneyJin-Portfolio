export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface NavigationItem {
  icon: string;
  label: string;
  href: string;
}

