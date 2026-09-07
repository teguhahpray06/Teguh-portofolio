import { project } from "@/types/main"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { CgZoomIn } from "react-icons/cg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageModal from "./ImageModal";

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const Project = ({ name, image, category, techstack, desc, links, projectIndex = 0 }: project & { projectIndex?: number }) => {

    const linkCount = [links.visit, links.code, links.video].filter((link) => link.trim()).length;

    const [open, setOpen] = useState(false);

    const actionsRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });

    useEffect(() => {
        const el = actionsRef.current;
        if (!el || linkCount < 3) return;

        const onPointerDown = (e: PointerEvent) => {
            if (!window.matchMedia('(min-width: 768px)').matches) return;
            if (e.pointerType !== 'mouse') return;
            if (el.scrollWidth <= el.clientWidth) return;
            dragState.current = { active: true, startX: e.clientX, startScrollLeft: el.scrollLeft, moved: false };
            el.setPointerCapture(e.pointerId);
        };
        const onPointerMove = (e: PointerEvent) => {
            const s = dragState.current;
            if (!s.active) return;
            const dx = e.clientX - s.startX;
            if (Math.abs(dx) > 4) {
                s.moved = true;
                e.preventDefault();
            }
            if (s.moved) el.scrollLeft = s.startScrollLeft - dx;
        };
        const endDrag = (e: PointerEvent) => {
            dragState.current.active = false;
            if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
        };

        el.addEventListener('pointerdown', onPointerDown);
        el.addEventListener('pointermove', onPointerMove);
        el.addEventListener('pointerup', endDrag);
        el.addEventListener('pointercancel', endDrag);
        return () => {
            el.removeEventListener('pointerdown', onPointerDown);
            el.removeEventListener('pointermove', onPointerMove);
            el.removeEventListener('pointerup', endDrag);
            el.removeEventListener('pointercancel', endDrag);
        };
    }, [linkCount]);

    const onActionClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragState.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            dragState.current.moved = false;
        }
    };

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="group interactive-lift flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#d6e2e4] bg-white text-[#172b3a] shadow-[0_8px_0_#dce9eb] transition-all hover:-translate-y-1 hover:shadow-[0_14px_0_#b9d9dd] dark:border-white/10 dark:bg-[#202622] dark:text-white dark:shadow-none">

            <div className="relative aspect-[16/10] cursor-pointer overflow-hidden bg-[#e5f2f3]" onClick={() => setOpen(true)}>
                <Image alt={name} width={1920} height={1080} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src={image} />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] text-[#172b3a] shadow-sm">{String(projectIndex + 1).padStart(2, '0')}</span>
                    <span className="rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">{category}</span>
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-white p-2 text-cyan-700 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    <CgZoomIn size={20} />
                </div>
            </div>

            <ImageModal src={image} name={name} open={open} onClose={() => setOpen(false)} />

            <div className="flex flex-col gap-4 p-5">
                <div>
                    <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
                    {desc && <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#58717b] dark:text-white/55">{desc}</p>}
                </div>

                {(links.visit.trim() || links.code.trim() || links.video.trim()) &&
                    <div ref={actionsRef} onClickCapture={linkCount >= 3 ? onActionClickCapture : undefined} onDragStart={(e) => e.preventDefault()} className={"flex w-full items-stretch gap-2 " + (linkCount >= 3 ? "overflow-x-auto scroll-hide touch-pan-x md:cursor-grab md:active:cursor-grabbing" : "")}>
                        {links.visit.trim() &&
                            <a href={links.visit} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`} title="Visit site" style={{ flex: linkCount >= 3 ? "0 0 auto" : "1 1 0%", width: "100%", minHeight: 44 }} className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-cyan-800 cursor-pointer">
                                <BiLinkExternal size={16} /> Live Demo
                            </a>
                        }
                        {links.code.trim() &&
                            <a href={links.code} target="_blank" rel="noreferrer" aria-label={`Source code of ${name}`} title="GitHub" style={{ flex: linkCount >= 3 ? "0 0 auto" : "1 1 0%", width: "100%", minHeight: 44 }} className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#cbd9dc] px-3 py-2 text-sm font-medium text-[#58717b] transition-all hover:border-cyan-700 hover:text-cyan-800 dark:border-white/15 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white cursor-pointer">
                                <FaGithub size={16} /> GitHub
                            </a>
                        }
                        {links.video.trim() &&
                            <a href={links.video} target="_blank" rel="noreferrer" aria-label={`Video demo of ${name}`} title="Video demo" style={{ flex: linkCount >= 3 ? "0 0 auto" : "1 1 0%", width: "100%", minHeight: 44 }} className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-rose-300/40 px-3 py-2 text-sm font-medium text-rose-600 transition-all hover:bg-rose-400 hover:text-white dark:text-rose-200 cursor-pointer">
                                <FaVideo size={16} /> Video
                            </a>
                        }
                    </div>
                }

                <div className="flex flex-wrap gap-1.5">
                    {techstack.split(',').map((tech, i) => (
                        <span key={i} className="rounded-full border border-[#d6e2e4] px-2.5 py-1 text-xs text-[#6c8991] dark:border-white/10 dark:text-white/50">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default Project