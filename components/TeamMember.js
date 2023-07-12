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
            <div className="relative h-[180px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                <img src={picture} alt={name} className="h-full w-full rounded-3xl object-cover object-top" />
            </div>
            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary">
                {name}
            </h4>
            <h1 className="text-sm font-bold">{position}</h1>
            </Link> 
        </div>
    );
};

export default TeamMember;
