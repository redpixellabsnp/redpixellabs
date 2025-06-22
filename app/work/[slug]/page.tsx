"use client"

import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import Navigation from "../../../components/navigation"
import Footer from "../../../components/footer"
import BackgroundPattern from "../../../components/background-pattern"

// This would normally come from a database or CMS
const getProject = (slug: string) => {
    const projects = {
        pixelcrm: {
            title: "PixelCRM",
            subtitle: "AI-Powered Customer Relationship Management",
            description:
                "A comprehensive CRM platform that leverages artificial intelligence to automate workflows, provide real-time analytics, and enhance customer relationships for modern businesses.",
            category: "Web Application",
            tags: ["React", "Node.js", "AI", "Analytics", "PostgreSQL", "TypeScript"],
            images: [
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
            client: "TechFlow Inc.",
            industry: "Technology",
            duration: "4 months",
            year: "2024",
            teamSize: "6 people",
            budget: "$75,000",
            liveUrl: "https://pixelcrm-demo.com",
            githubUrl: "https://github.com/redpixellabs/pixelcrm",
            challenge:
                "TechFlow Inc. was struggling with fragmented customer data across multiple platforms, leading to inefficient sales processes and missed opportunities. They needed a unified solution that could integrate with their existing tools while providing intelligent insights to drive sales performance.",
            solution:
                "We developed PixelCRM, a modern web application that centralizes customer data and uses AI to provide actionable insights. The platform features automated lead scoring, predictive analytics, and intelligent workflow automation that adapts to user behavior patterns.",
            results: [
                {
                    metric: "40%",
                    description: "Increase in sales efficiency",
                    icon: TrendingUp,
                },
                {
                    metric: "60%",
                    description: "Reduction in manual tasks",
                    icon: Target,
                },
                {
                    metric: "95%",
                    description: "User satisfaction rate",
                    icon: Award,
                },
                {
                    metric: "3x",
                    description: "Faster lead qualification",
                    icon: Users,
                },
            ],
            features: [
                {
                    title: "AI-Powered Lead Scoring",
                    description:
                        "Machine learning algorithms analyze customer behavior and engagement to automatically score and prioritize leads.",
                },
                {
                    title: "Real-Time Analytics Dashboard",
                    description:
                        "Comprehensive dashboard providing insights into sales performance, customer trends, and revenue forecasting.",
                },
                {
                    title: "Automated Workflow Engine",
                    description:
                        "Intelligent automation that triggers actions based on customer interactions and predefined business rules.",
                },
                {
                    title: "Integration Hub",
                    description:
                        "Seamless integration with popular tools like Slack, Gmail, Calendly, and marketing automation platforms.",
                },
                {
                    title: "Mobile-First Design",
                    description: "Responsive design optimized for mobile devices, allowing sales teams to access data anywhere.",
                },
                {
                    title: "Advanced Reporting",
                    description: "Customizable reports and analytics with export capabilities for stakeholder presentations.",
                },
            ],
            technologies: [
                { name: "React 18", category: "Frontend" },
                { name: "TypeScript", category: "Language" },
                { name: "Node.js", category: "Backend" },
                { name: "Express.js", category: "Framework" },
                { name: "PostgreSQL", category: "Database" },
                { name: "Redis", category: "Cache" },
                { name: "TensorFlow", category: "AI/ML" },
                { name: "Docker", category: "DevOps" },
                { name: "AWS", category: "Cloud" },
                { name: "Tailwind CSS", category: "Styling" },
            ],
            testimonial: {
                quote:
                    "RedPixel Labs transformed our sales process completely. The AI features have given us insights we never had before, and our team's productivity has skyrocketed.",
                author: "Sarah Johnson",
                role: "VP of Sales, TechFlow Inc.",
                avatar: "/placeholder.svg?height=60&width=60",
            },
        },
        neondash: {
            title: "NeonDash",
            subtitle: "Enterprise Analytics Dashboard",
            description:
                "An advanced data visualization platform that transforms complex enterprise data into actionable insights through interactive dashboards and real-time monitoring capabilities.",
            category: "Dashboard",
            tags: ["Vue.js", "Python", "D3.js", "Machine Learning", "Redis"],
            images: [
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
            ],
            client: "DataCorp Analytics",
            industry: "Data Analytics",
            duration: "3 months",
            year: "2024",
            teamSize: "4 people",
            budget: "$45,000",
            liveUrl: "https://neondash-demo.com",
            githubUrl: "https://github.com/redpixellabs/neondash",
            challenge:
                "DataCorp was drowning in data from multiple sources but lacked the tools to visualize and analyze it effectively. Their existing reporting system was slow, inflexible, and couldn't handle real-time data processing.",
            solution:
                "We created NeonDash, a powerful analytics platform that aggregates data from multiple sources and presents it through intuitive, interactive visualizations. The platform uses advanced caching and real-time processing to deliver insights instantly.",
            results: [
                {
                    metric: "50%",
                    description: "Faster data insights",
                    icon: TrendingUp,
                },
                {
                    metric: "30%",
                    description: "Cost reduction in reporting",
                    icon: Target,
                },
                {
                    metric: "99.9%",
                    description: "Uptime achieved",
                    icon: Award,
                },
                {
                    metric: "10x",
                    description: "Improvement in query speed",
                    icon: Users,
                },
            ],
            features: [
                {
                    title: "Real-Time Data Processing",
                    description:
                        "Process and visualize data streams in real-time with sub-second latency for critical business metrics.",
                },
                {
                    title: "Interactive Visualizations",
                    description: "Rich, interactive charts and graphs built with D3.js that allow users to drill down into data.",
                },
                {
                    title: "Custom Dashboard Builder",
                    description:
                        "Drag-and-drop interface for creating personalized dashboards tailored to specific business needs.",
                },
                {
                    title: "Multi-Source Integration",
                    description: "Connect to databases, APIs, and file systems to aggregate data from across the organization.",
                },
                {
                    title: "Automated Alerts",
                    description: "Smart alerting system that notifies stakeholders when metrics exceed predefined thresholds.",
                },
                {
                    title: "Export & Sharing",
                    description: "Export visualizations and share dashboards with team members or external stakeholders.",
                },
            ],
            technologies: [
                { name: "Vue.js 3", category: "Frontend" },
                { name: "Python", category: "Backend" },
                { name: "FastAPI", category: "Framework" },
                { name: "D3.js", category: "Visualization" },
                { name: "PostgreSQL", category: "Database" },
                { name: "Redis", category: "Cache" },
                { name: "Apache Kafka", category: "Streaming" },
                { name: "Docker", category: "DevOps" },
                { name: "Kubernetes", category: "Orchestration" },
                { name: "Chart.js", category: "Charts" },
            ],
            testimonial: {
                quote:
                    "NeonDash has revolutionized how we understand our data. What used to take hours of manual analysis now happens in seconds with beautiful, interactive visualizations.",
                author: "Michael Chen",
                role: "CTO, DataCorp Analytics",
                avatar: "/placeholder.svg?height=60&width=60",
            },
        },
    }

    return projects[slug as keyof typeof projects] || null
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
    const project = getProject(params.slug)

    if (!project) {
        return (
            <div className="min-h-screen bg-[#0E0E0E] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-mono font-bold text-red-400 mb-4">404</h1>
                    <p className="text-gray-400 mb-8">Project not found</p>
                    <Link href="/work">
                        <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono">
                            Back to Work
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
            <BackgroundPattern />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/work"
                        className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Work
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-mono">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                                    {project.title}
                                </h1>
                                <h2 className="text-xl md:text-2xl text-gray-300 font-mono">{project.subtitle}</h2>
                            </div>

                            <p className="text-lg text-gray-400 leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View Live Site
                                </Button>
                                {/* <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10 font-mono">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button> */}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={project.images[0] || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full rounded-lg border border-red-500/20 shadow-lg shadow-red-500/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Info */}
            <section className="py-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="bg-[#1A1A1A] border-red-500/20 text-center">
                            <CardContent className="p-6">
                                <Calendar className="w-8 h-8 text-red-400 mx-auto mb-3" />
                                <div className="space-y-1">
                                    <div className="text-sm font-mono text-red-400">Duration</div>
                                    <div className="text-lg font-mono font-bold text-white">{project.duration}</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#1A1A1A] border-red-500/20 text-center">
                            <CardContent className="p-6">
                                <Users className="w-8 h-8 text-red-400 mx-auto mb-3" />
                                <div className="space-y-1">
                                    <div className="text-sm font-mono text-red-400">Team Size</div>
                                    <div className="text-lg font-mono font-bold text-white">{project.teamSize}</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#1A1A1A] border-red-500/20 text-center">
                            <CardContent className="p-6">
                                <Target className="w-8 h-8 text-red-400 mx-auto mb-3" />
                                <div className="space-y-1">
                                    <div className="text-sm font-mono text-red-400">Industry</div>
                                    <div className="text-lg font-mono font-bold text-white">{project.industry}</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#1A1A1A] border-red-500/20 text-center">
                            <CardContent className="p-6">
                                <Award className="w-8 h-8 text-red-400 mx-auto mb-3" />
                                <div className="space-y-1">
                                    <div className="text-sm font-mono text-red-400">Year</div>
                                    <div className="text-lg font-mono font-bold text-white">{project.year}</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <Card className="bg-[#1A1A1A] border-red-500/20">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-mono font-bold text-white mb-6">The Challenge</h3>
                                <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#1A1A1A] border-red-500/20">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-mono font-bold text-white mb-6">Our Solution</h3>
                                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Results & Impact
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Measurable outcomes that demonstrate the success of our solution
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {project.results.map((result, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 text-center group hover:border-red-500/50 transition-all duration-300"
                            >
                                <CardContent className="p-8">
                                    <result.icon className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                    <div className="text-4xl font-mono font-bold text-red-400 mb-2">{result.metric}</div>
                                    <p className="text-gray-400 font-mono">{result.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Key Features
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The core functionality that drives user engagement and business value
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.features.map((feature, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                            >
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-mono font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Technology Stack
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The tools and technologies that power this solution
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {project.technologies.map((tech, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                            >
                                <CardContent className="p-4 text-center">
                                    <div className="text-sm font-mono text-red-400 mb-1">{tech.category}</div>
                                    <div className="font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                                        {tech.name}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Project Gallery
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Visual showcase of the user interface and key features
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {project.images.slice(1).map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image || "/placeholder.svg"}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="w-full rounded-lg border border-red-500/20 group-hover:border-red-500/50 transition-colors"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                    <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <Card className="bg-[#1A1A1A] border-red-500/20 p-8">
                        <CardContent className="text-center">
                            <div className="text-6xl text-red-400 font-mono mb-6">"</div>
                            <p className="text-xl text-gray-300 mb-8 font-mono leading-relaxed">{project.testimonial.quote}</p>
                            <div className="flex items-center justify-center space-x-4">
                                <img
                                    src={project.testimonial.avatar || "/placeholder.svg"}
                                    alt={project.testimonial.author}
                                    className="w-16 h-16 rounded-full border-2 border-red-500/30"
                                />
                                <div className="text-left">
                                    <p className="font-mono font-bold text-white text-lg">{project.testimonial.author}</p>
                                    <p className="text-red-400">{project.testimonial.role}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Let's discuss how we can bring your vision to life with the same level of excellence and attention to
                            detail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/start-project">
                                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 font-mono text-lg">
                                    Start Your Project
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
