import { education, experience } from "@/types/main"
import { useState } from "react"
import { ViewAll } from "../projects/Projects"
import SectionWrapper from "../SectionWrapper"
import ExperienceCard from "./ExperienceCard"
import { motion } from 'framer-motion';

interface Props {
    experienceData: experience[]
    educationData: education[]
}

const Experiences = ({ experienceData, educationData }: Props) => {

    const [show, setShow] = useState<'experience' | 'education'>("experience")
    const [viewAll, setViewAll] = useState(false)

    const [experiences, setExperiences] = useState([...experienceData] as experience[])
    const [educations, setEducations] = useState([...educationData] as education[])

    return (
        <SectionWrapper id="experience" className="mt-16 md:mt-24">
            <div className="mx-4 overflow-hidden rounded-[2rem] border border-cyan-900/10 bg-[#eef7f8] text-[#172b3a] shadow-xl shadow-cyan-950/10 dark:border-0 dark:bg-[#0e1513] dark:text-white dark:shadow-green-950/20 md:mx-auto md:max-w-6xl">
                <div className="border-b border-cyan-900/10 px-6 py-10 md:px-12 md:py-14 dark:border-white/10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.55 }}
                                className="text-4xl font-bold tracking-tight md:text-6xl"
                            >Experience<span className="text-orange-500">.</span></motion.h2>
                        </div>
                        <div className="font-mono text-xs text-[#8ba3ad] md:text-right">2019 <span className="text-orange-500">——</span> NOW</div>
                    </div>
                </div>

            <div className="mx-6 mt-8 flex w-fit gap-1 rounded-full border border-cyan-900/10 bg-white/70 p-1 md:mx-12 dark:border-white/10 dark:bg-white/5">
                {['Experience', 'Education'].map((e, i) => (
                    <motion.button
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.35, delay: i * 0.1 }}
                        onClick={() => setShow(['experience', 'education'][i] as 'experience' | 'education')}
                        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${show === ['experience', 'education'][i] ? 'bg-cyan-700 text-white dark:bg-green-300 dark:text-[#0e1513]' : 'text-[#6c8991] hover:text-[#172b3a] dark:text-white/45 dark:hover:text-white'}`}
                    >{e}</motion.button>
                ))
                }
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                <div className="relative wrap overflow-hidden px-6 pb-8 pt-8 md:px-0 md:pb-12 md:pt-10">
                    <div className="absolute bottom-0 left-[1.9rem] top-0 border-l border-dashed border-cyan-700/35 md:left-1/2 dark:border-green-300/35"></div>

                    {viewAll ?
                        (show === "experience" ? experiences : educations).map((e, i) => (
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                        :
                        (show === "experience" ? experiences : educations).slice(0, 2).map((e, i) => (
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                    }

                </div>
            </div>

            {(show === "experience" ? experiences : educations).length > 2 &&
                <ViewAll scrollTo='experience' title={viewAll ? "Okay, I got it" : "View All"} handleClick={() => setViewAll(!viewAll)} animate={!viewAll} />
            }
            </div>

        </SectionWrapper>
    )
}

export default Experiences
