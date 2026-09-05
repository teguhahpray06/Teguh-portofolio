import Link from "next/link"
import { useEffect, useRef } from "react"
import { FaGithub } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import SectionWrapper from "./SectionWrapper"

const CallToAction = () => {

    const actionsRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });

    useEffect(() => {
        const el = actionsRef.current;
        if (!el) return;

        const onPointerDown = (e: PointerEvent) => {
            if (!window.matchMedia('(max-width: 767px)').matches) return;
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
    }, []);

    const onActionClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragState.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            dragState.current.moved = false;
        }
    };
  return (
    <SectionWrapper id='cta' className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex items-center bg-gradient-to-r from-green-700 to-purple-700 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10">
      <div className="flex flex-col max-w-3xl">
        <h2 className="text-2xl lg:text-4xl font-extrabold">Loved this <span className="text-yellow-400">portfolio?</span></h2>
        <h3 className="md:text-base lg:text-xl font-medium mt-1.5">Make this <span className="text-yellow-400">yours</span> by forking.</h3>
        <p className="text-sm md:text-base mt-2.5 md:mt-6">Fork this template on GitHub start building your own portfolio website.</p>
        <div ref={actionsRef} onClickCapture={onActionClickCapture} onDragStart={(e) => e.preventDefault()} className="flex items-center gap-4 my-4 max-md:overflow-x-auto max-md:scroll-hide max-md:touch-pan-x max-md:cursor-grab max-md:active:cursor-grabbing">
          <Link href="https://github.com/teguhahpray06" target="_blank" className="py-2 px-4 bg-white text-black rounded-lg w-fit flex-none whitespace-nowrap flex items-center gap-2 hover:shadow-xl transition-shadow">
            <FaGithub size={20} /> Fork Now
          </Link>
          <Link href="https://github.com/teguhahpray06" target="_blank" className="py-2 px-4 bg-green-800 rounded-lg w-fit flex-none whitespace-nowrap flex items-center gap-2 hover:bg-green-900 transition-all">
            Visit Docs <BiLinkExternal size={20} />
          </Link>
        </div>
      </div>

    </SectionWrapper >
  )
}

export default CallToAction
