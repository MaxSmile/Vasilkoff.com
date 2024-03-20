// data/blogs.js
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const blogsDirectory = join(process.cwd(), "data", "blogs");
const blogs = {};



const getBlogIds = () => {
    return fs.readdirSync(blogsDirectory);
}

export function getPostBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content };
}

export function getAllPosts() {
    const slugs = getBlogIds();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

exports.getBlogIds = getBlogIds;
exports.blogs = getAllPosts;