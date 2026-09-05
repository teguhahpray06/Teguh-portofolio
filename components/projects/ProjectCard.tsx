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

const Project = ({ name, image, category, techstack, desc, links }: project) => {

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
            className="group interactive-lift flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4 min-w-0 border border-transparent hover:border-green-500/30">

            <div className="relative overflow-hidden rounded-lg bg-green-50 cursor-pointer" onClick={() => setOpen(true)}>
                <Image alt={name} width={1920} height={1080} className="max-w-full aspect-video object-cover object-top rounded-lg transition-transform duration-500 group-hover:scale-105" src={image} />
                <div className="absolute bottom-2 right-2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <CgZoomIn size={20} />
                </div>
            </div>

            <ImageModal src={image} name={name} open={open} onClose={() => setOpen(false)} />

            <div className="my-2 flex flex-col gap-3">
                <h3 className="text-xl font-medium">{name}</h3>
                {desc && <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{desc}</p>}

                {(links.visit.trim() || links.code.trim() || links.video.trim()) &&
                    <div ref={actionsRef} onClickCapture={linkCount >= 3 ? onActionClickCapture : undefined} onDragStart={(e) => e.preventDefault()} className={"flex w-full items-stretch gap-2 " + (linkCount >= 3 ? "overflow-x-auto scroll-hide touch-pan-x md:cursor-grab md:active:cursor-grabbing" : "")}>
                        {links.visit.trim() &&
                            <a href={links.visit} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`} title="Visit site" style={{ flex: linkCount >= 3 ? "0 0 auto" : "1 1 0%", width: "100%", minHeight: 48 }} className="flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-md font-medium whitespace-nowrap bg-green-600 text-white hover:bg-green-700 dark:hover:bg-green-500 transition-all cursor-pointer">
                                <BiLinkExternal size={16} /> Live Demo
                            </a>
                        }
                        {links.code.trim() &&
                            <a href={links.code} target="_blank" rel="noreferrer" aria-label={`Source code of ${name}`} title="GitHub" style={{ flex: linkCount >= 3 ? "0 0 auto" : "1 1 0%", width: "100%", minHeight: 48 }} className="flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-md font-medium whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white transition-all cursor-pointer">
                                <FaGithub size={16} /> GitHub
                            </a>
                        }
                        {links.video.trim() &&
                            <a href={links.video} target="_blank" rel="noreferrer" aria-label={`Video demo of ${name}`} title="Video demo" style={{ flex: linkCount >= 3 ? "0 0 auto" : "1 1 0%", width: "100%", minHeight: 48 }} className="flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-md font-medium whitespace-nowrap bg-rose-500 text-white hover:bg-rose-600 dark:hover:bg-rose-400 transition-all cursor-pointer">
                                <FaVideo size={16} /> Video
                            </a>
                        }
                    </div>
                }

                <div className="flex flex-wrap gap-1.5">
                    {techstack.split(',').map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default Project