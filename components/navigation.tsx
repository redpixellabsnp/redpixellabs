"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#0E0E0E]/90 backdrop-blur-md border-b border-red-500/20 shadow-lg shadow-red-500/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative">
                            {/* <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-sm flex items-center justify-center shadow-lg shadow-red-500/25">
                <div className="w-5 h-5 bg-white rounded-sm opacity-90" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-sm animate-pulse" /> */}

                            <Image src="/logo.svg" alt="logo" width={150} height={45}></Image>

                        </div>
                        {/* <div>
                            <span className="font-mono text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                RedPixel Labs
                            </span>
                            <div className="text-xs text-gray-500 font-mono">One Lab. Endless Solutions.</div>
                        </div> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative hover:text-red-400 transition-colors font-mono text-sm group ${pathname === item.href ? "text-red-400" : ""
                                    }`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-red-500/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-red-500/20 bg-[#0E0E0E]/95 backdrop-blur-md">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-red-400 transition-colors font-mono text-sm px-4 py-2 hover:bg-red-500/5 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
