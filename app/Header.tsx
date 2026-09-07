'use client';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import Logo from '../components/Logo'

export default function Header() {

    const [navCollapse, setNavCollapse] = useState(true)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const navs = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
    const desktopNavs = ['Home', 'About', 'Skills', 'Projects', 'Experience']

    return (
        <header className='fixed left-1/2 top-2 z-40 w-[calc(100%-2rem)] -translate-x-1/2 overflow-visible rounded-[1.75rem] border border-cyan-900/10 bg-white/85 text-[#172b3a] shadow-lg shadow-cyan-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-black/85 dark:text-white dark:shadow-black/20'>
            <nav className='relative mx-auto flex h-14 w-full items-center justify-between px-4 md:px-6'>

                <Link href={'/'} className='shrink-0 transition-transform duration-300 hover:scale-[1.03]'>
                    <Logo />
                </Link>

                <ul className='absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-cyan-900/10 bg-[#eef7f8] p-1 sm:flex dark:border-white/10 dark:bg-[#1c1c1c]'>
                    {desktopNavs.map((e) => (
                        <li key={e}>
                            <ScrollLink
                                className='block cursor-pointer rounded-full px-4 py-2 text-sm text-[#58717b] transition-all duration-300 hover:bg-white hover:text-cyan-800 md:px-5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white'
                                to={e.toLowerCase()}
                                offset={-96}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {e}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                <div className='ml-auto hidden items-center gap-3 sm:flex'>
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        aria-label='Toggle theme'
                        className='cursor-pointer select-none rounded-full p-2 text-[#58717b] transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-800 hover:rotate-12 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white'>
                        {mounted && (theme === 'dark' ? <FiSun /> : <FiMoon />)}
                    </span>
                    <ScrollLink
                        to='contact'
                        offset={-96}
                        smooth={true}
                        duration={500}
                        isDynamic={true}
                        className='cursor-pointer rounded-full bg-cyan-700 px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-cyan-800'>
                        Contact
                    </ScrollLink>
                </div>
            </nav>

            <nav className='flex items-center justify-between px-5 py-4 sm:hidden'>
                <Logo compact />
                <div className='flex items-center gap-4'>
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='text-gray-700 dark:text-white bg-gray-100 dark:bg-green-700 p-1.5 rounded-full cursor-pointer select-none transition-all duration-300 hover:rotate-180 hover:scale-110'>
                        {mounted && (theme === 'dark' ? <FiSun /> : <FiMoon />)}
                    </span>
                    <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
                </div>
            </nav>

            <div className={`fixed inset-0 flex min-h-screen w-screen md:hidden ${!navCollapse ? 'translate-x-0' : 'translate-x-full'} z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex w-3/4 flex-col gap-5 bg-gray-100/95 p-4 text-black backdrop-blur-sm dark:bg-grey-900/95 dark:text-white">
                    <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />

                    {navs.slice(0, 5).map((e) => (
                        <ScrollLink
                            key={e}
                            className='hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer'
                            to={e.toLowerCase()}
                            offset={-96}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {e}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to='contact'
                        offset={-96}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavCollapse(true)}
                        className='px-6 py-1.5 rounded-md bg-green-600 hover:bg-green-700 text-white text-center'>
                        Contact
                    </ScrollLink>
                </div>
            </div>

        </header>
    )
}