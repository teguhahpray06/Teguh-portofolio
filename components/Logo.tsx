import { FC } from 'react'

interface LogoProps {
    compact?: boolean
}

const Logo: FC<LogoProps> = ({ compact }) => (
    <div className="flex items-center gap-2 text-current" aria-label="TeguhAPPortofolio">
        <span className="flex h-9 w-9 items-center justify-center border-2 border-current text-sm font-bold leading-none">
            TD
        </span>
        {!compact && (
            <span className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">TeguhAP</span>
                <span className="mt-1 text-xs">Portofolio</span>
            </span>
        )}
    </div>
)

export default Logo