import { project } from "@/types/main";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";
import { motion } from 'framer-motion';

interface Props {
    projectsData: project[]
}

const Projects = ({ projectsData }: Props) => {

    const [projects, setProjects] = useState([...projectsData].reverse() as project[])

    const categories = [...Array.from(new Set(projects.map((s) => s.category)))]

    const [category, setCategory] = useState(categories[0])

    const [filteredProjects, setFilteredProjects] = useState(projects as project[])
    const [viewAll, setViewAll] = useState(false)

    const filterProjects = (cat: string) => {
        setViewAll(false)
        setCategory(cat)
        setFilteredProjects(projects.filter((p: project) => p.category.toLowerCase() === cat.toLowerCase()));
    }

    useEffect(() => {
        filterProjects(categories.includes('MERN Stack') ? "MERN Stack" : categories[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SectionWrapper id="projects" className="mx-4 mt-16 md:mx-0 md:mt-24">
            <div className="relative mx-auto max-w-6xl overflow-hidden px-1 text-[#172b3a] dark:text-white md:px-0">
            <div className="pointer-events-none absolute -inset-x-8 top-0 -z-10 h-[32rem] opacity-70 dark:hidden [background-image:linear-gradient(rgba(14,116,144,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,116,144,0.08)_1px,transparent_1px),linear-gradient(115deg,transparent_0_58%,rgba(251,146,60,0.13)_58.2%,transparent_58.5%)] [background-size:2rem_2rem,2rem_2rem,auto]" />
            <div className="mb-10 flex flex-col gap-6 border-b border-[#cbd9dc] pb-8 dark:border-white/10 md:flex-row md:items-end md:justify-between">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55 }}
                        className="text-4xl font-bold tracking-tight md:text-7xl"
                    >Projects<span className="text-orange-500">.</span></motion.h2>
                </div>
            </div>

            <div className="mb-8 flex max-w-full items-center gap-2 overflow-x-auto border-b border-[#cbd9dc] pb-2 dark:border-white/10">
                {categories.map((c: string = "", i: number) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        onClick={(e) => { filterProjects(c); e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); }}
                        className={`shrink-0 cursor-pointer px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${category.toLowerCase() === c.toLowerCase() ? "border-b-2 border-cyan-600 text-cyan-800 dark:border-orange-500 dark:text-orange-300" : "text-[#8ba3ad] hover:text-[#172b3a] dark:text-white/40 dark:hover:text-white"}`}
                    >
                        {c}
                    </motion.span>
                ))}
            </div>

            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.slice(0, viewAll ? filteredProjects.length : 6).map((p: project, i: number) => (
                    <ProjectCard key={i} {...p} projectIndex={i} />
                ))}
            </div>


            {filteredProjects.length > 6
                &&
                <ViewAll scrollTo='projects' title={viewAll ? "Okay, I got it" : "View All"} handleClick={() => setViewAll(!viewAll)} />
            }
            </div>
        </SectionWrapper>
    )
}

export default Projects

type MouseEventHandler = (event?: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({ handleClick, title, scrollTo, animate = false }: { handleClick: MouseEventHandler, title: string, scrollTo: string, animate?: boolean }) => {
    return (
        <div className="relative h-0">
            <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
            <div className="text-center -translate-y-24">
                {title === "View All" ?
                    <button onClick={handleClick} className={`bg-green-600 text-white px-4 ${animate ? 'animate-bounce' : 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
                        {title}
                    </button>
                    :
                    <Link
                        to={scrollTo}
                        className={`bg-green-600 text-white px-4 ${animate ? 'animate-bounce' : 'animate-none'} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
                        offset={-96}
                        smooth={true}
                        duration={500}
                        onClick={() => handleClick()}
                    >{title}</Link>
                }
            </div>
        </div>
    )
}
