import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'RedPixel Labs',
    description: 'RedPixel Labs. Built pixel by pixel.',
    generator: 'RedPixel Labs',
    icons: {
        icon: '/logos.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
