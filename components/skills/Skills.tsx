import { skill } from '@/types/main';
import SectionWrapper from '../SectionWrapper';
import { IconType } from 'react-icons';
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
        <SectionWrapper id='skills' className="mt-16 md:mt-24 mx-4 md:mx-0">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                    <p className="text-sm uppercase tracking-[0.24em] text-green-600 dark:text-green-400 mb-3">My toolkit</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Tech Stack <span className="text-green-600 dark:text-green-400">&amp;</span> Skills</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-grey-800 p-6 md:p-8 shadow-lg shadow-green-900/5">
                        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-green-400/10 blur-2xl" />
                        <div className="relative flex items-start justify-between gap-4 mb-7">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">tools</p>
                                <h3 className="text-2xl font-bold mt-2">Tech Stack &amp; Tools</h3>
                            </div>
                            <div className="rounded-xl bg-green-600 p-3 text-white shadow-lg shadow-green-600/25">
                                <SiNextdotjs size={26} />
                            </div>
                        </div>
                        <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {techStack.map(({ name, icon: TechIcon, color }) => (
                                <div key={name} className="group flex min-h-[104px] flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-grey-900/70 p-3 transition-all duration-200 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-md">
                                    <TechIcon size={27} style={{ color }} className="transition-transform duration-200 group-hover:scale-110" />
                                    <span className="text-xs sm:text-sm font-medium leading-tight text-gray-700 dark:text-gray-200">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 md:p-8 text-white shadow-lg shadow-gray-900/20">
                        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[18px] border-green-500/20" />
                        <div className="relative mb-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">strengths</p>
                            <h3 className="text-2xl font-bold mt-2">Skills</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-400">The habits and capabilities I bring to every project.</p>
                        </div>
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {skills.map(({ name, icon: SkillIcon }) => (
                                <div key={name} className="group relative flex items-center gap-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-500/15 hover:shadow-lg hover:shadow-green-950/30">
                                    <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/10 opacity-0 transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100" />
                                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-500/15 text-green-300 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-green-400 group-hover:text-gray-950">
                                        <SkillIcon size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                    </span>
                                    <span className="relative text-sm text-gray-200 transition-colors duration-300 group-hover:text-white">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Skills
