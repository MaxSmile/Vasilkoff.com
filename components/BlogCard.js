
import Link from 'next/link';
import { PlayBtn } from 'react-bootstrap-icons';



const BlogCard = (
    {
        blog,
        slug
    }
) => {

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-gray hover:bg-gray/20">
                <Link href={"/blog/"+slug} className="absolute top-0 h-full w-full left-0"></Link>
                <img src={blog.picture} alt={blog.title} className="h-52 w-full rounded-t-3xl object-cover" />
                <div className="p-5 text-sm font-bold">
                    <h1 className="font-extrabold text-secondary dark:text-secondary">
                        Maxim Vasilkov
                    </h1>
                    <h5 className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2">
                        {blog.title}
                    </h5>
                    <p className="line-clamp-4">
                        {blog.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
