"use client"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { ArrowRight, Users, Target, Lightbulb, Heart } from "lucide-react"
import Link from "next/link"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import BackgroundPattern from "../../components/background-pattern"

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Precision",
            description: "Every pixel matters. We obsess over details to deliver flawless digital experiences.",
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We push boundaries and explore new technologies to solve complex challenges.",
        },
        {
            icon: Heart,
            title: "Passion",
            description: "We love what we do and it shows in every project we deliver.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Great work happens when talented people work together towards a common goal.",
        },
    ]

    const milestones = [
        {
            year: "2020",
            title: "Founded",
            description: "RedPixel Labs was born with a vision to create pixel-perfect digital experiences",
        },
        {
            year: "2021",
            title: "First Major Client",
            description: "Delivered our first enterprise-level project, setting the standard for quality",
        },
        {
            year: "2022",
            title: "Team Expansion",
            description: "Grew to a team of 10+ specialists across design, development, and DevOps",
        },
        {
            year: "2023",
            title: "AI Integration",
            description: "Pioneered AI-powered solutions for our clients, staying ahead of the curve",
        },
        {
            year: "2024",
            title: "50+ Projects",
            description: "Reached the milestone of 50+ successful projects across various industries",
        },
        {
            year: "2025",
            title: "Global Reach",
            description: "Expanded our services globally while maintaining our commitment to quality",
        },
    ]

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
            <BackgroundPattern />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <div className="text-sm font-mono text-red-400 tracking-wider uppercase">About Us</div>
                        <h1 className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                            Crafting Digital Excellence
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We are a team of passionate digital craftsmen dedicated to creating pixel-perfect experiences that push
                            the boundaries of technology and design.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-mono font-bold text-white">Our Story</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    RedPixel Labs was founded in 2020 with a simple yet ambitious vision: to create digital experiences
                                    that are not just functional, but truly exceptional. We believe that in the digital world, every pixel
                                    matters.
                                </p>
                                <p>
                                    What started as a small team of passionate developers and designers has grown into a full-service
                                    digital agency. We've worked with startups, enterprises, and everything in between, always maintaining
                                    our commitment to quality and innovation.
                                </p>
                                <p>
                                    Today, we're proud to be at the forefront of digital innovation, helping our clients navigate the
                                    ever-evolving landscape of technology while delivering solutions that exceed expectations.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-red-500/10 to-red-700/20 border border-red-500/20 rounded-lg relative overflow-hidden">
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
                                    <div className="text-center space-y-4">
                                        <div className="w-24 h-24 bg-red-500 rounded-lg mx-auto animate-pulse shadow-lg shadow-red-500/50" />
                                        <p className="text-red-400 font-mono">Building the Future</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group text-center"
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                                        <value.icon className="w-8 h-8 text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Key milestones in our growth and evolution</p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-500/20" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                        <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300">
                                            <CardContent className="p-6">
                                                <div className="space-y-2">
                                                    <div className="text-2xl font-mono font-bold text-red-400">{milestone.year}</div>
                                                    <h3 className="text-xl font-mono font-bold text-white">{milestone.title}</h3>
                                                    <p className="text-gray-400">{milestone.description}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="relative z-10">
                                        <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-[#0E0E0E]" />
                                    </div>

                                    <div className="w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            By the Numbers
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-mono font-bold text-red-400">50+</div>
                            <p className="text-xl text-gray-300 font-mono">Projects Delivered</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-mono font-bold text-red-400">30+</div>
                            <p className="text-xl text-gray-300 font-mono">Happy Clients</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-mono font-bold text-red-400">5</div>
                            <p className="text-xl text-gray-300 font-mono">Years Experience</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-mono font-bold text-red-400">95%</div>
                            <p className="text-xl text-gray-300 font-mono">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Let's discuss how we can bring your vision to life with our expertise and passion for excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/start-project">
                                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 font-mono text-lg">
                                    Start Your Project
                                    <ArrowRight className="ml-2" size={20} />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3 font-mono text-lg"
                                >
                                    Get in Touch
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
