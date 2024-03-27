
import Link from 'next/link';

const ServiceCardOne = (
    {
        title,
        message,
        icon,
        slug
    }
) => {

    return (
        <card data-aos="fade-up" data-aos-duration="1000" className="group rounded-3xl bg-white p-6">

            <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
            >
                {icon}
            </div>
            <Link
                href={"/services/" + slug}
                aria-label={title}
                className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
            >
                <h2>{title}</h2>
            </Link>
            <p className="mb-10 text-lg  transition line-clamp-5 group-hover:text-secondary">
                {message}
            </p>
            <Link
                href={"/services/" + slug}
                aria-label={"Link to service page: " + title}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-light 
                    transition group-hover:bg-black text-black transition group-hover:text-white"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                        fill="currentColor"
                    />
                </svg>
            </Link>
        </card>
    );
};

export default ServiceCardOne;
