
import Container from '../Container';
import MemberMaxim from "@/app/_components/sections/members/Maxim";
import MemberNikol from "@/app/_components/sections/members/Nikol";
import MemberIryna from "@/app/_components/sections/members/Iryna";
import MemberSimon from "@/app/_components/sections/members/Simon";
import MemberAnastasia from "@/app/_components/sections/members/Anastasia";


export default function TeamMembers() {

    return (
        <section id="team" className="bg-white py-14 lg:py-[100px]">
            <Container>
                <div className="heading text-center">
                    <h2>Meet Our Team</h2>
                    <p>Ingenious Problem-Solvers</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    <MemberSimon />
                    <MemberAnastasia />
                    <MemberIryna />
                    <MemberNikol />
                    <MemberMaxim />
                </div>
            </Container>
        </section>
    );
};



