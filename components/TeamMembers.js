
import TeamMember from './TeamMember';

const TeamMembers = (
) => {

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                        
                        <TeamMember name="Simon Papazov" position="Managing Director" picture="/images/simon-papazov.png" />
                        <TeamMember name="Anastasia Sarlidou" position="Project Manager" picture="/images/anastasia-sarlidou.png" />
                        <TeamMember name="Irina Vasilkova" position="Graphics Designer" picture="/images/irina-vasilkova.png" />
                        <TeamMember name="Anastasia Sarlidou" position="Project Manager" picture="/images/anastasia-sarlidou.png" />
                        <TeamMember name="Maxim Vasilkov" position="CBDO" picture="/images/maxim-vasilkov.png" />
                    </div>
    );
};

export default TeamMembers;
