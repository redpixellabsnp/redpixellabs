"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import {
    Code,
    Palette,
    Bot,
    Cloud,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Mail,
    MapPin,
    Brain,
    Rocket,
    Zap,
    Target,
    Phone,
} from "lucide-react"
import Link from "next/link"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import BackgroundPattern from "../components/background-pattern"
import Image from "next/image"

export default function HomePage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [stats, setStats] = useState({ projects: 0, years: 0, clients: 0 })

    // Animated counter effect
    useEffect(() => {
        const animateStats = () => {
            const targets = { projects: 50, years: 10, clients: 30 }
            const duration = 2000
            const steps = 60
            const stepTime = duration / steps

            let step = 0
            const timer = setInterval(() => {
                step++
                const progress = step / steps
                setStats({
                    projects: Math.floor(targets.projects * progress),
                    years: Math.floor(targets.years * progress),
                    clients: Math.floor(targets.clients * progress),
                })

                if (step >= steps) {
                    clearInterval(timer)
                    setStats(targets)
                }
            }, stepTime)
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats()
                observer.disconnect()
            }
        })

        const statsElement = document.getElementById("stats-section")
        if (statsElement) observer.observe(statsElement)

        return () => observer.disconnect()
    }, [])

    const services = [
        {
            icon: Code,
            title: "Web & App Development",
            description:
                "Custom frontend/backend platforms using modern JS, Flutter, and mobile stacks. We build scalable, performant applications that grow with your business.",
        },
        {
            icon: Palette,
            title: "UI/UX Design Systems",
            description:
                "Pixel-perfect responsive interfaces, accessibility-ready and branded with consistency. Design systems that scale from component to product.",
        },
        {
            icon: Bot,
            title: "AI & Automation Tools",
            description:
                "Integrate AI copilots, bots, and GPT-based systems into products. Smart solutions that enhance user experience and business efficiency.",
        },
        {
            icon: Cloud,
            title: "DevOps & Cloud Engineering",
            description:
                "Secure CI/CD pipelines, scalable infra, Docker/K8s, and cloud-native APIs. Infrastructure that scales with confidence.",
        },
    ]

    const whyUsFeatures = [
        {
            icon: Target,
            title: "Pixel-Perfect Execution",
            description: "Design systems that scale from pixel to product with meticulous attention to detail.",
        },
        {
            icon: Brain,
            title: "Developer-First Architecture",
            description: "Codebases made for scale, quality, and seamless team handoffs.",
        },
        {
            icon: Rocket,
            title: "Startup-Ready",
            description: "We ship fast, test hard, and iterate cleanly to meet your deadlines.",
        },
    ]

    const team = [
        {
            name: "Gambhir Poudel",
            role: "Lead Developer",
            avatar: "/placeholder.svg?height=120&width=120",
            bio: "Full-stack architect with 8+ years building scalable systems",
        },
        {
            name: "Raj Lama",
            role: "UI/UX Designer",
            avatar: "/placeholder.svg?height=120&width=120",
            bio: "Design systems expert focused on accessibility and user experience",
        },
        {
            name: "Shuvam Yadav",
            role: "DevOps Engineer",
            avatar: "/placeholder.svg?height=120&width=120",
            bio: "Cloud infrastructure specialist with expertise in Kubernetes and AWS",
        },
        {
            name: "Bikal Rumba",
            role: "AI Specialist",
            avatar: "/placeholder.svg?height=120&width=120",
            bio: "Machine learning engineer building intelligent automation solutions",
        },
    ]

    const blogPosts = [
        {
            title: "The Future of Pixel-Perfect Design",
            excerpt:
                "Exploring how attention to detail shapes user experience in modern web applications and the tools that make it possible.",
            tags: ["Design", "UX", "Frontend"],
            date: "2025-01-15",
            readTime: "5 min read",
            image: "/placeholder.svg?height=200&width=300",
            author: "Maya Patel",
        },
        {
            title: "AI Integration in Modern Web Apps",
            excerpt:
                "Best practices for implementing AI features seamlessly into web applications without compromising performance or user experience.",
            tags: ["AI", "Development", "Integration"],
            date: "2025-01-10",
            readTime: "8 min read",
            image: "/placeholder.svg?height=200&width=300",
            author: "Sam Rivera",
        },
        {
            title: "Building Scalable Cloud Architecture",
            excerpt:
                "Lessons learned from deploying enterprise solutions and the architectural patterns that ensure long-term success.",
            tags: ["Cloud", "DevOps", "Architecture"],
            date: "2025-01-05",
            readTime: "12 min read",
            image: "/placeholder.svg?height=200&width=300",
            author: "Jordan Kim",
        },
    ]

    const portfolio = [
        { title: "PixelCRM", tags: ["React", "Node.js", "AI"], image: "/placeholder.svg?height=200&width=300" },
        { title: "NeonDash", tags: ["Vue", "Python", "Analytics"], image: "/placeholder.svg?height=200&width=300" },
        { title: "CodeFlow", tags: ["Next.js", "TypeScript", "DevOps"], image: "/placeholder.svg?height=200&width=300" },
        { title: "DataViz Pro", tags: ["D3.js", "React", "ML"], image: "/placeholder.svg?height=200&width=300" },
        { title: "CloudSync", tags: ["AWS", "Docker", "Kubernetes"], image: "/placeholder.svg?height=200&width=300" },
        { title: "PixelChat", tags: ["WebRTC", "Socket.io", "Redis"], image: "/placeholder.svg?height=200&width=300" },
    ]

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO at TechFlow",
            avatar: "/placeholder.svg?height=60&width=60",
            quote: "RedPixel Labs delivered beyond our expectations. Their pixel-perfect attention to detail is unmatched.",
        },
        {
            name: "Marcus Rodriguez",
            role: "Founder of StartupX",
            avatar: "/placeholder.svg?height=60&width=60",
            quote: "Working with RedPixel Labs was a game-changer. They turned our vision into a stunning reality.",
        },
        {
            name: "Emily Watson",
            role: "Product Manager at InnovateCorp",
            avatar: "/placeholder.svg?height=60&width=60",
            quote: "The team at RedPixel Labs combines technical excellence with creative innovation perfectly.",
        },
    ]

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
            <BackgroundPattern />
            <Navigation />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-mono font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent leading-tight">
                                RedPixel Labs
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-mono">One Lab. Endless Solutions.</p>
                        </div>

                        <p className="text-lg text-gray-400 max-w-lg">
                            We craft pixel-perfect digital experiences that push the boundaries of technology and design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/start-project">
                                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-md font-mono text-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300">
                                    Start a Project
                                    <ArrowRight className="ml-2" size={20} />
                                </Button>
                            </Link>
                            <Link href="/work">
                                <Button
                                    variant="outline"
                                    className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3 rounded-md font-mono text-lg"
                                >
                                    View Work
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-80 h-80">
                            {/* Animated Pixel Cube */}
                            <div className="absolute inset-0 animate-spin-slow">
                                <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-red-700/20 border border-red-500/30 rounded-lg backdrop-blur-sm" />
                                <div className="absolute top-4 left-4 w-8 h-8 bg-red-500 rounded-sm animate-pulse" />
                                <div className="absolute top-4 right-4 w-6 h-6 bg-red-400 rounded-sm animate-pulse delay-100" />
                                <div className="absolute bottom-4 left-4 w-6 h-6 bg-red-600 rounded-sm animate-pulse delay-200" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 bg-red-500 rounded-sm animate-pulse delay-300" />
                            </div>
                            {/* <Image src="/logos.png" alt="logo" className="absolute inset-0 animate-spin-slow" width={150} height={150}></Image> */}

                            {/* Floating Particles */}
                            <div className="absolute -top-8 -left-8 w-4 h-4 bg-red-400 rounded-sm animate-bounce" />
                            <div className="absolute -top-4 -right-8 w-3 h-3 bg-red-500 rounded-sm animate-bounce delay-100" />
                            <div className="absolute -bottom-8 -left-4 w-3 h-3 bg-red-600 rounded-sm animate-bounce delay-200" />
                            <div className="absolute -bottom-4 -right-8 w-4 h-4 bg-red-400 rounded-sm animate-bounce delay-300" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="space-y-4">
                            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">What We Do</div>
                            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                Our Services
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Comprehensive solutions crafted with precision and innovation. From concept to deployment, we handle
                                every pixel of your digital journey.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-2 group relative overflow-hidden"
                            >
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                                                <service.icon className="w-8 h-8 text-red-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-mono font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                        {/* <Link href="/services">
                                            <Button
                                                variant="ghost"
                                                className="text-red-400  hover:text-red-300 hover:bg-red-500/5 p-0 h-auto font-mono text-sm group/btn"
                                            >
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link> */}
                                    </div>

                                    {/* Pixel Corner Decorations */}
                                    <div className="absolute top-3 left-3 w-2 h-2 bg-red-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-3 left-3 w-2 h-2 bg-red-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-3 right-3 w-2 h-2 bg-red-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <div className="space-y-4">
                            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Why Choose Us</div>
                            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                Why RedPixel Labs?
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {whyUsFeatures.map((feature, index) => (
                            <div key={index} className="text-center space-y-6 group">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                                    <feature.icon className="w-10 h-10 text-red-400" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="stats-section" className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-mono font-bold text-red-400">{stats.projects}+</div>
                            <p className="text-xl text-gray-300 font-mono">Projects Completed</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-mono font-bold text-red-400">{stats.years}+</div>
                            <p className="text-xl text-gray-300 font-mono">Years of Experience</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-5xl md:text-6xl font-mono font-bold text-red-400">{stats.clients}+</div>
                            <p className="text-xl text-gray-300 font-mono">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="work" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Our Work
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Showcasing our latest projects and innovations</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolio.map((project, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-mono font-bold mb-2 text-white">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href="/work">
                                        <Button
                                            variant="outline"
                                            className="border-red-500 text-red-400 hover:bg-red-500/10 w-full font-mono"
                                        >
                                            View Case Study
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            What Clients Say
                        </h2>
                    </div>

                    <div className="relative">
                        <Card className="bg-[#1A1A1A] border-red-500/20 p-8">
                            <CardContent className="text-center">
                                <div className="mb-6">
                                    <div className="text-6xl text-red-400 font-mono mb-4">"</div>
                                    <p className="text-xl text-gray-300 mb-6 font-mono leading-relaxed">
                                        {testimonials[currentTestimonial].quote}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center space-x-4">
                                    <img
                                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-12 h-12 rounded-full border-2 border-red-500/30"
                                    />
                                    <div className="text-left">
                                        <p className="font-mono font-bold text-white">{testimonials[currentTestimonial].name}</p>
                                        <p className="text-red-400 text-sm">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-center space-x-4 mt-8">
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-red-500 text-red-400 hover:bg-red-500/10"
                                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                            >
                                <ChevronLeft size={16} />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-red-500 text-red-400 hover:bg-red-500/10"
                                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                            >
                                <ChevronRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="space-y-4">
                            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Our Team</div>
                            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                Meet the Pixel Artists
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                The creative minds and technical experts behind every pixel-perfect solution
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group"
                            >
                                <CardContent className="p-6 text-center space-y-6">
                                    <div className="relative">
                                        <img
                                            src={member.avatar || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full mx-auto border-2 border-red-500/30 group-hover:border-red-500/60 transition-colors"
                                        />
                                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-red-400 text-sm font-mono">{member.role}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <div className="space-y-4">
                            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Latest Insights</div>
                            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                From the Lab
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Thoughts, discoveries, and insights from our team of digital craftsmen
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group overflow-hidden"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-red-500/90 text-white text-xs font-mono rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6 space-y-4">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-mono font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-red-400 font-mono">{post.author}</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-gray-500">{post.readTime}</span>
                                        </div>
                                        <span className="text-red-400 font-mono text-xs">{post.date}</span>
                                    </div>
                                    <Link href="/blog">
                                        <Button
                                            variant="ghost"
                                            className="text-red-400 hover:text-red-300 hover:bg-red-500/5 p-0 h-auto font-mono text-sm group/btn w-full justify-start"
                                        >
                                            Read Article
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/blog">
                            <Button
                                variant="outline"
                                className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3 font-mono text-lg"
                            >
                                View All Articles
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="space-y-4">
                            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Get In Touch</div>
                            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                Let's Build Something
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Ready to turn your vision into pixel-perfect reality? Let's discuss your project and create something
                                extraordinary together.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <Card className="bg-[#1A1A1A] border-red-500/20 p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" />
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Full Name *</label>
                                        <Input className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Email *</label>
                                        <Input
                                            type="email"
                                            className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono"
                                        />
                                    </div>

                                </div>
                                <div>
                                    <label className="block text-sm font-mono text-red-400 mb-2">Subject</label>
                                    <Input className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono" />
                                </div>
                                {/* <div>
                                    <label className="block text-sm font-mono text-red-400 mb-2">Project Budget</label>
                                    <Select>
                                        <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                            <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                                            <SelectItem value="50k+">$50K+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div> */}
                                <div>
                                    <label className="block text-sm font-mono text-red-400 mb-2">Project Details *</label>
                                    <Textarea className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono min-h-32" />
                                </div>
                                <Link href="/contact">
                                    <Button className="w-full mt-5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono py-3 group">
                                        Send Message
                                        <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-mono font-bold mb-6 text-white">Get in Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 group">
                                        <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                            <Mail className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="font-mono text-gray-300 font-semibold">Email</p>
                                            <p className="text-gray-400">hello.redpixellabs@gmail.com</p>
                                            <p className="text-sm text-gray-500">Business Inquiries & Support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group">
                                        <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                            <Phone className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="font-mono text-gray-300 font-semibold">Phone</p>
                                            <p className="text-gray-400">+977-9821820140</p>
                                            <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM NST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 group">
                                        <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                            <MapPin className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="font-mono text-gray-300 font-semibold">Location</p>
                                            <p className="text-gray-400">Kathmandu, Nepal</p>
                                            <p className="text-sm text-gray-500">Remote-first team</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pixel Art Illustration */}
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-red-500/10 to-red-700/20 border border-red-500/20 rounded-lg relative overflow-hidden">
                                    <div
                                        className="absolute inset-0 opacity-30"
                                        style={{
                                            backgroundImage: `
                        linear-gradient(rgba(255, 58, 58, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 58, 58, 0.2) 1px, transparent 1px)
                      `,
                                            backgroundSize: "20px 20px",
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-2">
                                            <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto animate-pulse shadow-lg shadow-red-500/50" />
                                            <p className="text-red-400 font-mono text-sm">Pixel Planet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
