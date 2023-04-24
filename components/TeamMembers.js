
import TeamMember from './TeamMember';

const TeamMembers = (
) => {

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

            <TeamMember name="Simon Papazov" position="Managing Director"
                email="sp@vasilkoff.com"
                picture="/images/simon-papazov.png" />
            <TeamMember name="Anastasia Sarlidou" position="Human Centered AI engineer"
                email="anastasia@vasilkoff.com"
                picture="/images/anastasia-sarlidou.png" />
            <TeamMember name="Irina Vasilkova" position="Design Director"
                email="omorfi@vasilkoff.com"
                picture="/images/irina-vasilkova.png" />
            <TeamMember name="Nikol Todorova" position="UI/UX Designer"
                email="nikol@vasilkoff.com"
                picture="/images/nikol.jpg" />
            <TeamMember name="Maxim Vasilkov" position="Systems Architect"
                email="maxim@vasilkoff.com"
                picture="/images/maxim-vasilkov.png" />
        </div>
    );
};

export default TeamMembers;
