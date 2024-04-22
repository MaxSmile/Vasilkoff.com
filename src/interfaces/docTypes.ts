

export type Blog = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  picture: string;
  time: string;
  description: string;
  content: string;
};

export type Portfolio = {
  slug: string;
  title: string;
  type: string;
  date: string;
  categories: string[];
  link: string;
  picture: string;
  url: string;
  extra: string;
  description: string;
  content: string;

};

export type Service = {
  slug: string;
  title: string;
  type: string;
  date: string;
  picture: string;
  time: string;
  description: string;
  content: string;

};

export type Member = {
  slug: string;
  title: string;
  type: string;
  date: string;
  picture: string;
  time: string;
  description: string;
  content: string;

};
