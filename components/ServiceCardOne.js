
import Link from 'next/link';
import { PlayBtn } from 'react-bootstrap-icons';



const ServiceCardOne = (
    {
        title,
        message,
        icon,
        slug
    }
) => {

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div
                className="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary"
                style={{
                    boxShadow: '-20px 30px 70px rgba(219, 222, 225, 0.4)',
                }}
            >
                <div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                // style={{
                //     boxShadow: '0px 15px 30px rgba(180, 118, 229, 0.4)',
                // }}
                >
                    {icon}
                </div>
                <Link
                    href={"/services/" + slug}
                    className="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                >
                    {title}
                </Link>
                <p className="mb-10 text-lg  transition line-clamp-5 group-hover:text-secondary">
                    {message}
                </p>
                <Link
                    href={"/services/" + slug}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black rtl:rotate-180 dark:bg-gray-dark"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black transition group-hover:text-white dark:text-white"
                    >
                        <path
                            d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCardOne;
