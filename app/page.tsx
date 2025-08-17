import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/app/companions/CompanionCard";
import CTA from "@/app/companions/CTA";
import CompanionsList from "@/app/companions/CompanionsList";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main >
      <h1 >Popular Companions</h1>
        <section className="home-section">
            <CompanionCard
                id="123"
                name= "Neura the Brainy Explorer"
                topic = "Newral Network of the Brain"
                subject="Science"
                duration={45}
                color="#ffda6e"

            />

            <CompanionCard
                id="456"
                name= "Countsy the Number Wizard"
                topic= "Derivatives & Integrals"
                subject = "Maths"
                duration={30}
                color="#e5d0ff"

            />
            <CompanionCard
                id="789"
                name= "NeurVerba the Vocabulary Builder"
                topic = "language"
                subject= "English Literature"
                duration={30}
                color="#ffda6e"

            />

        </section>
        <section className="home-section" >
            <CompanionsList
                title= "Recently completed sessions"
                companions={recentSessions}
                classNames= "w-2/3 max-lg:w-full"






            />

            <CTA/>

        </section>

    </main>
  )
}

export default Page