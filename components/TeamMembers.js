
import TeamMember from './TeamMember';

const TeamMembers = (
) => {

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">

            <TeamMember name="Simon Papazov"
                position="Managing Director"
                email="sp@vasilkoff.com"
                link={"/team/simon-papazov"}
                picture="/assets/team/simon-papazov.webp"
                keywords="android app development, ios app development" />
            <TeamMember name="Anastasia Sarlidou"
                position="Human Centered AI engineer"
                email="anastasia@vasilkoff.com"
                link={"/team/anastasia-sarlidou"}
                keywords="web developer, mobile apps development"
                picture="/assets/team/anastasia-sarlidou.webp" />
            <TeamMember name="Irina Vasilkova"
                position="Design Director"
                email="omorfi@vasilkoff.com"
                link={"/team/iryna-vasilkova"}
                keywords="web design, mobile apps design, UX/UI design"
                picture="/assets/team/irina-vasilkova.webp" />
            <TeamMember name="Nikol Todorova"
                position="UI/UX Designer"
                email="nikol@vasilkoff.com"
                link={"/team/nikol-todorova"}
                keywords="web design, mobile apps design, UX/UI design"
                picture="/assets/team/nicol-papazova.webp" />
            <TeamMember name="Maxim Vasilkov"
                position="Systems Architect"
                email="maxim@vasilkoff.com"
                link={"/team/maxim-vasilkov"}
                keywords="full-stack developer, dapps, smart contracts, AI, machine learning"
                picture="/assets/team/maxim-vasilkov.webp" />
        </div>
    );
};

export default TeamMembers;
