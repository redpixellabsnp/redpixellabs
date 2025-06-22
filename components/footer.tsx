import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-12 border-t border-red-500/20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid md:grid-cols-5 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-3 mb-4">
                            <div className="relative">
                                {/* <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-sm flex items-center justify-center shadow-lg shadow-red-500/25">
                                    <div className="w-5 h-5 bg-white rounded-sm opacity-90" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-sm animate-pulse" /> */}

                                <Image src="/logo.svg" alt="logo" width={150} height={45}></Image>

                            </div>
                            {/* <div>
                                <span className="font-mono text-xl font-bold text-white">RedPixel Labs</span>
                                <div className="text-xs text-gray-500 font-mono">One Lab. Endless Solutions.</div>
                            </div> */}
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Crafting digital experiences pixel by pixel. We combine technical excellence with creative innovation to
                            deliver solutions that exceed expectations.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/redpixellabs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-colors group"
                            >
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-colors group"
                            >
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-colors group"
                            >
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono font-bold text-white mb-4">Navigation</h4>
                        <div className="space-y-3">
                            <Link href="/" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                                Home
                            </Link>
                            <Link href="/about" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                                About
                            </Link>
                            <Link href="/services" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                                Services
                            </Link>
                            <Link href="/work" className="block text-gray-400 hover:text-red-400 transition-colors text-sm">
                                Work
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono font-bold text-white mb-4">Services</h4>
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm">Web Development</p>
                            <p className="text-gray-400 text-sm">UI/UX Design</p>
                            <p className="text-gray-400 text-sm">AI Solutions</p>
                            <p className="text-gray-400 text-sm">Cloud Services</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-mono font-bold text-white mb-4">Contact</h4>
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm">hello.redpixellabs@gmail.com</p>
                            <p className="text-gray-400 text-sm">Kathmandu, Nepal</p>
                            <p className="text-gray-400 text-sm">Remote-first team</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-red-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm font-mono">© 2025 RedPixel Labs. Built pixel by pixel.</p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-sm animate-pulse" />
                            <div className="w-2 h-2 bg-red-400 rounded-sm animate-pulse delay-100" />
                            <div className="w-2 h-2 bg-red-600 rounded-sm animate-pulse delay-200" />
                        </div>
                        <span className="text-gray-500 text-xs font-mono">Status: Online</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
