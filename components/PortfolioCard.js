import Image from "next/image";
import Link from "next/link";
import { Bookmark, BookmarkHeart } from "react-bootstrap-icons";


const PortfolioCard = (
    {
        obj,
        activeTab
    }
) => {

    return (
        <div className={`project ${activeTab === 'all' || obj.categories?.includes(activeTab) ? 'block' : 'hidden'}`}>
            <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none">
                <Link href={"/portfolio/"+obj.slug} aria-label={obj.title} className="absolute top-0 h-full w-full left-0"></Link>
                <Image src={obj.image} alt={obj.description} width={350} height={208} loading="lazy" className="h-52 w-full rounded-t-3xl object-cover" />
                <div className="p-5 text-sm ">
                    <h1 className="mb-1 text-black font-bold dark:text-white">{obj.title}</h1>
                    <p className="line-clamp-4"><span>{obj.type=="our-projects"?<BookmarkHeart className="inline-block" />:<Bookmark className="inline-block"/>}&nbsp;</span>{obj.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;