import Image from "next/image";
import Link from "next/link";


const TeamMember = (
    {
        name,
        position,
        picture,
        email
    }
) => {

    return (
        <div className="group cursor-pointer text-center"><Link href={"mailto:"+email}>
            <div className="relative md:h-[180px] h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                <Image loading="lazy" width={200} height={180} src={picture} alt={name} className="h-full w-full rounded-3xl object-cover object-top" />
            </div>
            <h2 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary">
                {name}
            </h2>
            <p className="text-sm font-bold">{position}</p>
            </Link> 
        </div>
    );
};

export default TeamMember;
