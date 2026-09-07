import { skill } from '@/types/main';
import SectionWrapper from '../SectionWrapper';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import {
    SiFirebase,
    SiGit,
    SiGithub,
    SiGoogle,
    SiJavascript,
    SiCanva,
    SiMicrosoftoffice,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVisualstudiocode,
} from 'react-icons/si';
import {
    MdApps,
    MdAnalytics,
    MdAssessment,
    MdChat,
    MdDescription,
    MdEvent,
    MdGroups,
    MdInput,
    MdSchedule,
    MdStorage,
    MdTransform,
    MdVerified,
    MdVisibility,
    MdWork,
} from 'react-icons/md';

interface Props {
    skillData: skill[]
}

const Skills = ({ skillData }: Props) => {
    const techStack = [
        { name: 'Microsoft Office', icon: SiMicrosoftoffice, color: '#f25022' },
        { name: 'Google Workspace', icon: SiGoogle, color: '#4285f4' },
        { name: 'Canva', icon: SiCanva, color: '#00c4cc' },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007acc' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#111827' },
        { name: 'React.js', icon: SiReact, color: '#61dafb' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
        { name: 'SQL', icon: MdStorage, color: '#4479a1' },
        { name: 'Git', icon: SiGit, color: '#f05032' },
        { name: 'GitHub', icon: SiGithub, color: '#24292f' },
    ]
    const skills = [
        { name: 'Administrative Management', icon: MdWork },
        { name: 'Data Management', icon: MdStorage },
        { name: 'Data Entry', icon: MdInput },
        { name: 'Data Validation & Verification', icon: MdVerified },
        { name: 'Document Management', icon: MdDescription },
        { name: 'Reporting', icon: MdAssessment },
        { name: 'Planning & Scheduling', icon: MdEvent },
        { name: 'Data Analysis', icon: MdAnalytics },
        { name: 'Attention to Detail', icon: MdVisibility },
        { name: 'Problem Solving', icon: MdVerified },
        { name: 'Communication', icon: MdChat },
        { name: 'Teamwork', icon: MdGroups },
        { name: 'Time Management', icon: MdSchedule },
        { name: 'Application Development', icon: MdApps },
        { name: 'Digital Transformation', icon: MdTransform },
        { name: 'Data Analysis & Management', icon: MdAnalytics },
        { name: 'Database Management', icon: MdStorage },
    ]

    return (
        <SectionWrapper id='skills' className="mx-4 mt-16 md:mx-0 md:mt-24">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-900/10 bg-[#eef7f8] text-[#172b3a] shadow-xl shadow-cyan-950/10 dark:border-0 dark:bg-[#101714] dark:text-white dark:shadow-green-950/20">
                <div className="relative border-b border-cyan-900/10 px-6 py-10 md:px-12 md:py-14 dark:border-white/10">
                    <div className="pointer-events-none absolute -right-24 -top-36 h-80 w-80 rounded-full border-[42px] border-green-400/10" />
                    <div className="pointer-events-none absolute bottom-0 right-1/3 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                        <div>
                            <h2 className="max-w-2xl text-4xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                                Skills<span className="text-orange-500">.</span>
                            </h2>
                        </div>
                        <div className="flex gap-8 border-l border-white/15 pl-5 md:pb-1">
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.55 }}
                            >
                                <p className="text-4xl font-bold text-cyan-700 dark:text-green-300">{techStack.length}</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#6c8991] dark:text-white/45">Tools</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.55, delay: 0.2 }}
                            >
                                <p className="text-4xl font-bold text-orange-500 dark:text-cyan-300">{skillData.length || skills.length}</p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#6c8991] dark:text-white/45">Core skills</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="border-b border-cyan-900/10 bg-white/70 p-6 md:p-10 lg:border-b-0 lg:border-r dark:border-white/10 dark:bg-[#17231d]">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-700 dark:text-green-300">Tools</p>
                                <h3 className="mt-2 text-2xl font-bold">Tools of the trade</h3>
                            </div>
                            <SiNextdotjs className="text-cyan-900/20 dark:text-white/25" size={34} />
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                            {techStack.map(({ name, icon: TechIcon, color }, index) => (
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.045 }}
                                    className="group flex min-h-[88px] flex-col justify-between border border-cyan-900/10 bg-cyan-50/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/60 hover:bg-cyan-100 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-green-300/60 dark:hover:bg-green-300/10"
                                >
                                    <TechIcon size={24} style={{ color }} className={`transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${name === 'Next.js' || name === 'GitHub' ? 'dark:brightness-0 dark:invert' : ''}`} />
                                    <span className="text-xs font-medium leading-tight text-[#58717b] group-hover:text-[#172b3a] dark:text-white/65 dark:group-hover:text-white">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#e5f2f3] p-6 md:p-10 dark:bg-[#101714]">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600 dark:text-cyan-300">Core skills</p>
                                <h3 className="mt-2 text-2xl font-bold">How I add value</h3>
                            </div>
                            <span className="hidden text-right text-xs leading-5 text-[#6c8991] sm:block dark:text-white/35">Practical skills.<br />Measured details.</span>
                        </div>
                        <div className="grid gap-x-8 sm:grid-cols-2">
                            {skills.map(({ name, icon: SkillIcon }, index) => (
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, x: 18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.035 }}
                                    className="group flex items-center gap-4 border-b border-cyan-900/10 py-3.5 transition-colors hover:border-orange-400 dark:border-white/10 dark:hover:border-green-300/60"
                                >
                                    <span className="w-5 font-mono text-xs text-[#8ba3ad] group-hover:text-orange-600 dark:text-white/25 dark:group-hover:text-green-300">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-cyan-700 shadow-sm transition-all duration-300 group-hover:bg-orange-400 group-hover:text-white dark:bg-white/10 dark:text-cyan-300 dark:group-hover:bg-green-300 dark:group-hover:text-[#101714]">
                                        <SkillIcon size={16} />
                                    </span>
                                    <span className="text-sm text-[#58717b] transition-colors group-hover:text-[#172b3a] dark:text-white/65 dark:group-hover:text-white">{name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Skills
