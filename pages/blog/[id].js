// pages/blog/[id].js
import { blogs } from '../../data/blogs';
import BlogsList from '../../components/BlogsList';
import BlogPage from '../../components/BlogPage';


export const getServerSideProps = async ({ params }) => {
    const blog = blogs[params.id];
    if (!blog) {
        const pageNum = parseInt(params.id);
        const validPageNum = !isNaN(pageNum);
        if (validPageNum) {
            return {
                props: {
                    page: pageNum
                }
            }
        } else if (!params.id) {
            return {
                props: {
                    page: 1
                }
            }
        } else return {
            notFound: true,
        }
    }

    return {
        props: {
            blog,
            slug: params.id
        },
    }
}

const Blog = ({ blog, slug, page }) => {
    if (page)
        return <BlogsList page={page} />
    else
        return <BlogPage blog={blog} slug={slug} />
};

export default Blog;
