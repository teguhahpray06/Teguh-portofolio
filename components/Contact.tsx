import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionWrapper from "./SectionWrapper";

const contactItems = [
    {
        label: "Email",
        value: "Teguhahmadprayogo@gmail.com",
        href: "mailto:Teguhahmadprayogo@gmail.com",
        icon: MdEmail,
        color: "bg-green-700 shadow-green-700/30",
    },
    {
        label: "WhatsApp",
        value: "0812-2245-4485",
        href: "https://wa.me/6281222454485",
        icon: FaWhatsapp,
        color: "bg-green-600 shadow-green-600/30",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/teguh-ahmad-prayogo-1824a541b",
        href: "https://www.linkedin.com/in/teguh-ahmad-prayogo-1824a541b",
        icon: FaLinkedin,
        color: "bg-green-600 shadow-green-600/30",
    },
    {
        label: "Instagram",
        value: "@teahpray",
        href: "https://www.instagram.com/teahpray",
        icon: FaInstagram,
        color: "bg-green-500 shadow-green-500/30",
    },
];

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="mt-16 md:mt-24 mx-4 lg:mx-0">
            <div className="interactive-lift relative overflow-hidden rounded-3xl border border-green-500/25 bg-[#07140d] px-6 py-10 text-gray-100 shadow-2xl shadow-green-950/20 md:px-10 md:py-12 lg:px-16">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-emerald-600/10 blur-3xl" />

                <div className="relative max-w-4xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-green-400">Contact</p>
                    <h2 className="text-3xl font-bold text-green-400 sm:text-4xl md:text-5xl">Let&apos;s Work Together <span aria-hidden="true">🚀</span></h2>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-300 md:text-base">
                        Tertarik bekerja sama atau ingin berdiskusi tentang project? Hubungi saya melalui kontak berikut.
                    </p>

                    <div className="mt-9 grid gap-5 sm:grid-cols-2">
                        {contactItems.map(({ label, value, href, icon: ContactIcon, color }) => (
                            <Link key={label} href={href} target="_blank" rel="noreferrer" className="group interactive-lift flex min-w-0 items-center gap-4 rounded-xl p-2">
                                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl text-white shadow-lg transition-transform duration-200 group-hover:-translate-y-1 ${color}`}>
                                    <ContactIcon />
                                </span>
                                <span className="min-w-0">
                                    <strong className="block text-base font-bold text-gray-100 md:text-lg">{label}</strong>
                                    <span className="block truncate text-sm text-gray-400 md:text-base">{value}</span>
                                </span>
                            </Link>
                        ))}
                    </div>

                    <Link href="https://github.com/teguhahpray06" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-bold text-white shadow-lg shadow-green-600/30 transition-all hover:-translate-y-1 hover:bg-green-500">
                        <FaGithub size={21} />
                        View My GitHub
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
