import Image from "next/image";
import Link from "next/link";
import { EnvelopeAt, Mailbox, Mailbox2 } from "react-bootstrap-icons";


const TeamMember = (
    {
        name,
        position,
        picture,
        email,
        link,
        keywords = "web developer",
    }
) => {

    return (
        <div className="group text-center"><Link href={link}>
            <div className="relative md:h-[180px] h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                <Image loading="lazy" width={200} height={180} src={picture} alt={name + ", " + keywords} className="h-full w-full rounded-3xl object-cover object-top grayscale transition duration-200 group-hover:grayscale-0" />
            </div>
            <h2 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary">
                {name}
            </h2>
            <p className="text-sm font-bold">{position}</p>
            </Link> 
            <p className="text-sm font-bold">Contacts: <Link href={"mailto:"+email} aria-label={`Email ${name} at ${email}`}><EnvelopeAt className="inline-block" /></Link></p>
            
        </div>
    );
};

export default TeamMember;
