
import Link from 'next/link';



export const OurProjectCard = (
    {
        title,
        link,
        image,
        slug,
        url,
        extra,
        description,
    }
) => {

    return (
        <div   // group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary sm:col-span-2
    className={"group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary " +extra}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Link href={"/portfolio/"+slug} className=" top-0 z-[1] w-full left-0">
            <div className="rounded-t-[32px] md:h-[355px]">
                <img src={image} alt="cases-3" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
            </div>
            </Link>
            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">{title}</h4>
                <p>{description}</p>
                <h5 className="mt-2 font-semibold md:text-lg"><Link target="_blank" href={url}>{link}</Link></h5>
            </div>
        </div>
    );
};

/*
<div
                            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary sm:col-span-2"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Link href="/portfolio/detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <div className="rounded-t-[32px] md:h-[606px]">
                                <img src="/assets/images/cases-5.png" alt="cases-5" className="h-full w-full rounded-t-[32px] object-cover" />
                            </div>
                            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Pellentesque imperdiet dui eget ante egestas</h4>
                                <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
                            </div>
                        </div>

//*/
