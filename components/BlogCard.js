
import Link from 'next/link';
import { PlayBtn } from 'react-bootstrap-icons';



const BlogCard = (
    {
        blog,
        slug
    }
) => {

    return (
        <card data-aos="fade-up" data-aos-duration="1000">
            <div className="relative rounded-3xl bg-white transition duration-500 hover:bg-gray/20">
                <Link href={"/blog/"+slug} className="absolute top-0 h-full w-full left-0"></Link>
                <img src={blog.picture} alt={blog.title} className="h-52 w-full rounded-t-3xl object-cover" />
                <div className="p-5 text-sm font-bold">
                    <p className="font-extrabold text-secondary dark:text-secondary">
                        Maxim Vasilkov
                    </p>
                    <h2 className="my-[10px] text-lg font-extrabold leading-[23px] text-black 
                    line-clamp-2">
                        {blog.title}
                    </h2>
                    <p className="line-clamp-4">
                        {blog.description}
                    </p>
                </div>
            </div>
        </card>
    );
};

export default BlogCard;
