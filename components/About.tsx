import Image from "next/image"
import { about } from "@/types/main";
import SectionWrapper from "./SectionWrapper";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

interface Props {
    aboutData: about,
    name: string
}

const About = ({ aboutData, name }: Props) => {

    const { aboutImage, about, callUrl } = aboutData

    return (
        <SectionWrapper id="about" className="mx-4 mt-16 pt-12 lg:mx-0 lg:mt-24">
            <div className="mx-auto max-w-6xl border-y border-cyan-900/15 py-10 dark:border-white/10 md:py-14">
                <div className="about-panel__content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55 }}
                        className="text-4xl font-bold tracking-tight md:text-6xl"
                    >About Me<span className="text-orange-500">.</span></motion.h2>

                    <div className="w-full mt-8 flex flex-col md:gap-4 lg:flex-row justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -35, rotate: -8 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                            className="interactive-lift w-56 self-start border-8 border-white bg-white shadow-xl shadow-cyan-950/10 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3"
                        >
                            <Image alt="profile" width={1000} height={1000} loading={'lazy'} className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-green-100" src={aboutImage} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                            className="flex-1 text-left mx-4 mt-6 md:mt-0 md:mx-0 md:p-6"
                        >
                            <div className="flex flex-col gap-2.5">
                                <p className="text-3xl font-semibold text-[#172b3a] dark:text-white">{name}</p>
                                <p className="my-2 text-sm leading-7 text-[#58717b] dark:text-gray-300 md:text-base">{about}</p>
                                <div className="flex items-center gap-4 md:mt-4">
                                    {callUrl.trim() && <a href={callUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600">Let&apos;s Talk <FaWhatsapp /></a>}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default About
