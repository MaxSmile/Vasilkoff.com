
import Link from 'next/link';
import { ArrowThroughHeart } from 'react-bootstrap-icons';



export const OurProjectCard = (
    {
        proj
    }
) => {

    return (
        <div   // group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary sm:col-span-2
    className={"group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary " +proj.extra}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Link href={"/portfolio/"+proj.slug} className=" top-0 z-[1] w-full left-0">
            <div className="rounded-t-[32px] md:h-[355px]">
                <img src={proj.image} alt="cases-3" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
            </div>
            </Link>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">{proj.title}</h4>
                <p>{proj.description}</p>
                <h5 className="mt-2 font-semibold md:text-lg"><Link target="_blank" href={proj.url}>{proj.link}</Link></h5>
            </div>
        </div>
    );
};


