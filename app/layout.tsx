import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Barney Jin - Software Engineer Portfolio',
    description: 'Full-Stack Software Engineer specializing in modern web technologies, mobile development, and enterprise solutions. MS Computer Science from University of Illinois.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.className}>
                {children}
            </body>
        </html>
    )
}
