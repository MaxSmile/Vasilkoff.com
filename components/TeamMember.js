
import Link from 'next/link';
import { PlayBtn } from 'react-bootstrap-icons';



const TeamMember = (
    {
        name,
        position,
        picture
    }
) => {

    return (
        <div className="group cursor-pointer text-center">
            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                <img src={picture} alt="team-member-1" className="h-full w-full rounded-3xl object-cover object-top" />
            </div>
            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                {name}
            </h4>
            <h6 className="text-sm font-bold">{position}</h6>
        </div>
    );
};

export default TeamMember;