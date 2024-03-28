import { Blog, Member, Portfolio, Service } from "@/interfaces/docTypes";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { getBlogSlugs, getMemberSlugs, getPortfolioSlugs, getServiceSlugs,
  blogsDirectory,
  portfolioDirectory,
  servicesDirectory,
  membersDirectory } from "./fsGetter";




export function getBlogBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Blog;
}

export function getPortfolioBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  //console.log("realSlug", realSlug);
  const fullPath = join(portfolioDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Portfolio;
}

export function getServiceBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(servicesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Service;
}


export function getMemberBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(membersDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Member;
}

export function getAllBlogs(): Blog[] {
  const slugs = getBlogSlugs();
  const Blogs = slugs
    .map((slug: string) => getBlogBySlug(slug))
    // sort Blogs by date in descending order
    .sort((Blog1: Blog, Blog2: Blog) => (Blog1.date > Blog2.date ? -1 : 1));
  return Blogs;
}

export function getAllPortfolios(): Portfolio[] {
  const slugs = getPortfolioSlugs();
  const portfolios = slugs
    .map((slug: string) => getPortfolioBySlug(slug))
    // sort portfolios by date in descending order
    .sort((Port1: Portfolio, Port2: Portfolio) => (Port1.date > Port2.date ? -1 : 1));
  return portfolios;
}


export function getAllServices(): Service[] {
  const slugs = getServiceSlugs();
  const services = slugs
    .map((slug: string) => getServiceBySlug(slug))
    // sort services by date in descending order
    .sort((Service1: Service, Service2: Service) => (Service1.date > Service2.date ? -1 : 1));
  return services;
}

export function getAllMembers(): Member[] {
  const slugs = getMemberSlugs();
  const members = slugs
    .map((slug: string) => getMemberBySlug(slug))
    // sort members by date in descending order
    .sort((Member1: Member, Member2: Member) => (Member1.date > Member2.date ? -1 : 1));
  return members;
}