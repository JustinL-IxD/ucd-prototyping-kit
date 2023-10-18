import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'UCD Prototyping Kit',
  description: 'Prototyping Kit created by Social Security IxD team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  )
}
