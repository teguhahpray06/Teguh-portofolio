'use client';
import { useEffect, useState } from "react";
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import Footer from "./Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);

        const loadingTimer = window.setTimeout(() => setIsLoading(false), 2700);

        return () => window.clearTimeout(loadingTimer);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="loading-screen" role="status" aria-live="polite">
                    <div className="loading-screen__glow" />
                    <div className="loading-screen__content">
                        <span className="loading-screen__eyebrow">Welcome</span>
                        <h1>My Portfolio</h1>
                        <div className="loading-screen__line" aria-hidden="true">
                            <span />
                        </div>
                        <p>Loading experience...</p>
                    </div>
                </div>
            )}
            <div className="homepage-content">
                <Hero mainData={data.main} />
                <About aboutData={data.about} name={data.main.name} />
                <Skills skillData={data.skills} />
                <Projects projectsData={data.projects} />
                <Experiences experienceData={data.experiences} educationData={data.educations} />
                <Contact />
                <Footer socials={data.socials} name={data.main.name} />
                <ScrollToTop />
            </div>
        </>
    )
}

export default HomePage