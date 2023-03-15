
import Link from 'next/link';
import { PlayBtn } from 'react-bootstrap-icons';



const BlogCard = (
    {
        blog
    }
) => {

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                <Link href="/blog/jira" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                <img src={blog.picture} alt="blog-2" className="h-52 w-full rounded-t-3xl object-cover" />
                <div className="p-5 text-sm font-bold">
                    <h6 className="font-extrabold text-secondary dark:text-secondary">
                        Maxim Vasilkov
                    </h6>
                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                        {blog.title}
                    </h5>
                    <p className="line-clamp-4">
                        Jira works well for Agile development projects for many reasons, including the ability to create Kanban and Scrum boards
                        with sprint planning and issue time estimation capabilities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
