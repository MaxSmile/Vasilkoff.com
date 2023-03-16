import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { IRootState } from '../store';
import {blogs} from '../data/blogs';
import BlogCard from '../components/BlogCard';

const Blog = () => {

    const keys = Object.keys(blogs);
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <section className="bg-gradient-to-t mt-20 from-white/70 to-transparent py-14 md:py-[100px]">
                <div className="container">
                    
                    <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

                        {keys.map((item, index) => (
                            <BlogCard key={index} blog={blogs[item]} slug={item}/>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
