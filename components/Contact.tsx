import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";
import { motion } from 'framer-motion';

const contactItems = [
    {
        label: "Email",
        value: "Teguhahmadprayogo@gmail.com",
        href: "mailto:Teguhahmadprayogo@gmail.com",
        icon: MdEmail,
        color: "bg-[#ea4335] shadow-[#ea4335]/30",
    },
    {
        label: "WhatsApp",
        value: "0812-2245-4485",
        href: "https://wa.me/6281222454485",
        icon: FaWhatsapp,
        color: "bg-[#25d366] shadow-[#25d366]/30",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/teguh-ahmad-prayogo-1824a541b",
        href: "https://www.linkedin.com/in/teguh-ahmad-prayogo-1824a541b",
        icon: FaLinkedin,
        color: "bg-[#0a66c2] shadow-[#0a66c2]/30",
    },
    {
        label: "Instagram",
        value: "@teahpray",
        href: "https://www.instagram.com/teahpray",
        icon: FaInstagram,
        color: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#515bd4] shadow-[#dd2a7b]/30",
    },
];

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="mt-16 md:mt-24 mx-4 lg:mx-0">
            <div className="interactive-lift relative overflow-hidden border-y border-cyan-900/15 bg-white/70 px-6 py-10 text-[#172b3a] shadow-xl shadow-cyan-950/5 backdrop-blur-sm dark:border-green-500/25 dark:bg-[#07140d] dark:text-gray-100 dark:shadow-green-950/20 md:px-10 md:py-12 lg:px-16">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl" />

                <div className="relative max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55 }}
                        className="text-3xl font-bold text-cyan-800 dark:text-green-400 sm:text-4xl md:text-5xl"
                    >Contact<span className="text-orange-500">.</span></motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mt-5 max-w-3xl text-sm leading-7 text-[#58717b] dark:text-gray-300 md:text-base"
                    >
                        Tertarik bekerja sama atau ingin berdiskusi tentang project? Hubungi saya melalui kontak berikut.
                    </motion.p>

                    <div className="mt-9 grid gap-5 sm:grid-cols-2">
                        {contactItems.map(({ label, value, href, icon: ContactIcon, color }, index) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45, delay: index * 0.1 }}
                            >
                            <Link href={href} target="_blank" rel="noreferrer" className="group interactive-lift flex min-w-0 items-center gap-4 rounded-xl p-2">
                                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-lg transition-transform duration-200 group-hover:-translate-y-1 ${color}`}>
                                    <ContactIcon />
                                </span>
                                <span className="min-w-0">
                                    <strong className="block text-base font-bold text-[#172b3a] dark:text-gray-100 md:text-lg">{label}</strong>
                                    <span className="block truncate text-sm text-[#6c8991] dark:text-gray-400 md:text-base">{value}</span>
                                </span>
                            </Link>
                            </motion.div>
                        ))}
                    </div>

                    <Link href="https://github.com/teguhahpray06" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#181717] px-6 py-3 font-bold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:bg-[#303030]">
                        <FaGithub size={21} />
                        View My GitHub
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
