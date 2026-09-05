import { social } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import * as Fa from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType> = Fa;

export default function Footer({ socials, name }: { socials: social[], name: string }) {

    return (
        <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">

            <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">

                <p className="text-sm mt-2 md:mt-0">Made with
                    <span className="animate-pulse"> ❤️ </span>
                    by
                    <span className="text-green-600"> {name}</span></p>

                <div className="hidden xl:flex items-center gap-2">
                    <Link href={'https://nextjs.org'} target="_blank">
                        <Image alt="Next.js" width={45} height={45} src="/nextjs.svg" className="invert-0 dark:invert opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all" />
                    </Link>
                    <p className="text-sm">X</p>
                    <Link href={'https://vercel.com'} target="_blank">
                        <Image alt="Vercel" width={58} height={58} src="/vercel.svg" className="invert-0 dark:invert opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all" />
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex xl:hidden items-center gap-2">
                    {socials.map((s: social) => {
                        const Icon = iconMap[s.icon] || iconMap.FaQuestionCircle;
                        return (
                            <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} aria-label={s.icon} className="grid place-items-center p-3 rounded-full text-lg hover:-translate-y-1 hover:bg-gray-100 hover:dark:bg-grey-900 transition-all">
                                <Icon />
                            </Link>
                        )
                    })}
                </div>

            </div>

        </footer>
    )
}