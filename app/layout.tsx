import './globals.css'
import { Poppins } from '@next/font/google'
import ThemeWrapper from '@/components/ThemeWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-poppins bg-[#F9F9FA] dark:bg-grey-900 text-black dark:text-white overflow-x-hidden`}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}
