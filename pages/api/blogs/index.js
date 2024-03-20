import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const blogsDirectory = join(process.cwd(), 'lib', 'blogs');

export default function handler(req, res) {
    const slugs = fs.readdirSync(blogsDirectory);
    const blogs = slugs.map((slug) => {
        const realSlug = slug.replace(/\.md$/, '');
        const fullPath = join(blogsDirectory, `${realSlug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return { ...data, slug: realSlug, content };
    }).sort((blog1, blog2) => (blog1.date > blog2.date ? -1 : 1));

    res.status(200).json(blogs);
}