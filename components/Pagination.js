import Link from "next/link";

const Pagination = ({ limit, baseLink, current }) => {
    const pages = [];
    for (let index = 1; index <= limit; index++) {
        pages.push(index);
    }

    return <div className='m-10 p-6 '>Pages:&nbsp;
        {pages.map((item, index) => {
            if (item === current) {
                return <>{current}</>
            } else return <>
                &nbsp;
                <Link className="text-primary bold" key={index} href={`${baseLink}/${item}`} aria-label={"Go to page "+item}>{item}</Link>
                &nbsp;
            </>
        })}
    </div>;
}

export default Pagination;