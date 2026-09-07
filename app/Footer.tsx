import { social } from "@/types/main";
import Link from "next/link";
import * as Fa from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType> = Fa;

export default function Footer({ socials, name }: { socials: social[], name: string }) {

    return (
        <footer className="w-full border-t border-cyan-900/10 bg-transparent text-[#6c8991] dark:border-white/10 dark:text-gray-300">

            <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">

                <p className="text-sm mt-2 md:mt-0">Made with
                    <span className="animate-pulse"> ❤️ </span>
                    by
                    <span className="text-cyan-700 dark:text-green-400"> {name}</span></p>

                {/* Social Links */}
                <div className="flex xl:hidden items-center gap-2">
                    {socials.map((s: social) => {
                        const Icon = iconMap[s.icon] || iconMap.FaQuestionCircle;
                        return (
                            <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} aria-label={s.icon} className="grid place-items-center rounded-full p-3 text-lg transition-all hover:-translate-y-1 hover:bg-cyan-50 dark:hover:bg-grey-900">
                                <Icon />
                            </Link>
                        )
                    })}
                </div>

            </div>

        </footer>
    )
}