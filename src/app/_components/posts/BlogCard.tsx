// src/app/_components/blogs/BlogCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BlogCardProps = {
    blog: {
        picture: string;
        title: string;
        description: string;
    };
    slug: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, slug }) => {
    return (
        <card data-aos="fade-up" data-aos-duration="1000" id={slug}>
            <div className="relative rounded-3xl object-cover">
                <Link href={"/blog/" + slug} className='w-full'>
                    {/* <img src={blog.picture} alt={blog.title} className="h-52 w-full rounded-t-3xl " /> 
                    style={{ width: '460px', minWidth: '260px', height: 'auto' }}*/}
                    <Image
                        width={0}
                        height={0}
                        loading='lazy'
                        src={blog.picture}
                        alt={blog.title}
                        sizes="100vh"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

                        className="h-52 w-full rounded-t-3xl"
                    />
                </Link>
                <div className="p-5 text-sm font-bold">
                    <p className="font-extrabold text-secondary dark:text-secondary">
                        <Link href="/team/maxim-vasilkov">Maxim Vasilkov</Link>
                    </p>
                    <Link href={"/blog/" + slug}>
                        <h2 className="my-[10px] text-lg font-extrabold leading-[23px] text-black line-clamp-2">
                            {blog.title}
                        </h2>
                        <p className="line-clamp-4">
                            {blog.description}
                        </p>
                    </Link>
                </div>
            </div>
        </card>
    );
};

export default BlogCard;
