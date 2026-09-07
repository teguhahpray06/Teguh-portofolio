import { MdSchool, MdWork } from 'react-icons/md'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  index: number,
  company?: string,
  position?: string,
  desc: string[],
  institute?: string,
  degree?: string,
  startDate: string,
  endDate: string,
}

const Experience = ({ index, company, position, desc, institute, degree, startDate, endDate }: ExperienceProps) => {

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
  };

  return (
    <div className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'}`}>
      <div className="order-1 md:w-5/12"></div>

      <span className="z-20 flex h-6 w-6 items-center justify-center order-1 ml-3 rounded-full bg-cyan-700 text-white ring-4 ring-[#eef7f8] md:ml-0 md:h-9 md:w-9 md:ring-8 dark:bg-green-300 dark:text-[#0e1513] dark:ring-[#0e1513]">
        {company && <MdWork className="text-base md:text-xl text-green-600 dark:text-white" />}
        {institute && <MdSchool className="text-base md:text-xl text-green-600 dark:text-white" />}
      </span>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="interactive-lift order-1 ml-3 w-full rounded-xl border border-cyan-900/10 bg-white p-4 shadow-sm hover:border-cyan-500/50 md:ml-0 md:w-5/12 md:px-5 md:py-5 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-green-300/50">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-600 dark:text-green-300">{startDate} — {endDate}</p>
        <h3 className="mb-2 text-lg font-semibold md:text-xl">{company || institute}</h3>
        <p className="text-sm font-medium text-[#6c8991] dark:text-white/50">{position || degree}</p>
        <ul className="ml-4 mt-3 list-disc text-sm text-[#58717b] dark:text-white/55">
          {desc && desc.map((d, i) => (
            <li key={i} className='mb-0.5'>{d}</li>
          ))}
        </ul>
      </motion.div>
    </div >
  )
}

export default Experience