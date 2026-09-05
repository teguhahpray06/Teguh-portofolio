import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

const ImageModal = ({ src, name, open, onClose }: { src: string, name: string, open: boolean, onClose: () => void }) => {

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = 'hidden';
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onClose]);

    if (typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {open &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={name}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}>
                        <Image alt={name} src={src} width={1920} height={1080} className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg object-contain" />
                    </motion.div>
                    <button
                        onClick={onClose}
                        aria-label="Close image"
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                        <CgClose size={24} />
                    </button>
                </motion.div>
            }
        </AnimatePresence>,
        document.body
    );
};

export default ImageModal
