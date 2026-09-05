import React from 'react';
import Link from 'next/link';
import * as Fa from 'react-icons/fa';
import { social } from '@/types/main';

const iconMap: Record<string, React.ComponentType> = Fa;

const Socials = ({ socials }: { socials: social[] }) => {
    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
            {socials.map((s: social) => {
                const Icon = iconMap[s.icon] || iconMap.FaQuestionCircle;
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} aria-label={s.name} className="grid place-items-center p-3 rounded-full bg-green-700 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:shadow-lg hover:shadow-green-700/30">
                        <Icon />
                    </Link>
                )
            })}
        </section>
    )
}

export default Socials