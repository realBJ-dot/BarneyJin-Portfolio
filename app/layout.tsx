import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Barney Jin — Software Engineer',
    description: 'Mobile apps, web products, and the systems behind them. Selected work by software engineer Barney Jin, including Go Birdie Go and Next Fan Up.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="en"><body>{children}</body></html>
}
