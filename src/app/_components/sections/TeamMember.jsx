import Image from "next/image";
import Link from "next/link";
import { EnvelopeAt } from "react-bootstrap-icons";

const TeamMember = ({ name, position, picture, email, link, keywords = "web developer" }) => {
    return (
        <div className="group text-center p-4">
            <Link href={link}>
                <div className="rounded-3xl transition-all duration-500 group-hover:shadow-lg md:h-44 h-72 mb-4">
                    <Image
                        loading="lazy"
                        width={200}
                        height={180}
                        src={picture}
                        alt={`${name}, ${keywords}`}
                        className="w-full h-full rounded-3xl object-cover object-top grayscale transition duration-200 group-hover:grayscale-0"
                    />
                </div>
                <h2 className="mt-5 lg:mt-0 pt-2 pb-2 text-2xl font-bold text-black lg:text-md transition duration-500 group-hover:text-secondary">
                    {name}
                </h2>
                <p className="text-sm font-bold">{position}</p>
            </Link>
            <p className="text-sm font-bold">
                <Link href={`mailto:${email}`} aria-label={`Email ${name} at ${email}`}>
                    <EnvelopeAt className="inline-block" /> {email}
                </Link>
            </p>
        </div>
    );
};

export default TeamMember;
