import { PointerEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const sectionVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.965, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 42, damping: 20, mass: 1.25 }
    }
};

const SectionWrapper = ({ children, id, className }: { children: ReactNode, id: string, className: string }) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    const reducedMotion = useReducedMotion();
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const rotateX = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.8 });
    const rotateY = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.8 });

    const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
        if (reducedMotion || event.pointerType !== 'mouse') return;

        const bounds = event.currentTarget.getBoundingClientRect();
        const horizontalPosition = (event.clientX - bounds.left) / bounds.width - 0.5;
        const verticalPosition = (event.clientY - bounds.top) / bounds.height - 0.5;

        pointerX.set(horizontalPosition * 4);
        pointerY.set(verticalPosition * -4);
    };

    const handlePointerLeave = () => {
        pointerX.set(0);
        pointerY.set(0);
    };

    return (
        <motion.section
            ref={ref}
            variants={sectionVariants}
            initial={reducedMotion ? 'visible' : 'hidden'}
            animate={reducedMotion || inView ? 'visible' : 'hidden'}
            id={id}
            className={className}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ transformPerspective: 1200, rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
            {children}
        </motion.section>
    )
}

export default SectionWrapper