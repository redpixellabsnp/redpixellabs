"use client"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { ArrowRight, Code, Palette, Bot, Cloud, Check, Zap } from "lucide-react"
import Link from "next/link"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import BackgroundPattern from "../../components/background-pattern"

export default function ServicesPage() {
    const services = [
        {
            icon: Code,
            title: "Web & App Development",
            description: "Custom frontend/backend platforms using modern JS, Flutter, and mobile stacks.",
            features: [
                "React, Next.js, Vue.js Development",
                "Node.js, Python Backend Systems",
                "Mobile App Development (React Native, Flutter)",
                "Progressive Web Applications",
                "API Development & Integration",
                "Database Design & Optimization",
            ],
            pricing: "Starting at $5,000",
            timeline: "4-12 weeks",
        },
        {
            icon: Palette,
            title: "UI/UX Design Systems",
            description: "Pixel-perfect responsive interfaces, accessibility-ready and branded with consistency.",
            features: [
                "User Experience Research & Strategy",
                "Wireframing & Prototyping",
                "Visual Design & Branding",
                "Design System Creation",
                "Accessibility Compliance",
                "Responsive Design Implementation",
            ],
            pricing: "Starting at $3,000",
            timeline: "2-8 weeks",
        },
        {
            icon: Bot,
            title: "AI & Automation Tools",
            description: "Integrate AI copilots, bots, and GPT-based systems into products.",
            features: [
                "ChatGPT & AI Model Integration",
                "Custom AI Chatbots",
                "Process Automation",
                "Machine Learning Solutions",
                "Natural Language Processing",
                "AI-Powered Analytics",
            ],
            pricing: "Starting at $7,500",
            timeline: "6-16 weeks",
        },
        {
            icon: Cloud,
            title: "DevOps & Cloud Engineering",
            description: "Secure CI/CD pipelines, scalable infra, Docker/K8s, and cloud-native APIs.",
            features: [
                "AWS, Azure, GCP Cloud Setup",
                "Docker & Kubernetes Deployment",
                "CI/CD Pipeline Configuration",
                "Infrastructure as Code",
                "Monitoring & Logging Setup",
                "Security & Compliance",
            ],
            pricing: "Starting at $4,000",
            timeline: "3-10 weeks",
        },
    ]

    const packages = [
        {
            name: "Starter",
            price: "$2,500",
            description: "Perfect for small businesses and startups",
            features: [
                "Landing Page Design & Development",
                "Mobile Responsive",
                "Basic SEO Setup",
                "Contact Form Integration",
                "2 Rounds of Revisions",
                "1 Month Support",
            ],
            popular: false,
        },
        {
            name: "Professional",
            price: "$7,500",
            description: "Ideal for growing businesses",
            features: [
                "Full Website/Web App",
                "Custom UI/UX Design",
                "CMS Integration",
                "Advanced SEO",
                "Analytics Setup",
                "3 Months Support",
                "Performance Optimization",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large-scale applications",
            features: [
                "Complex Web Applications",
                "Custom Backend Development",
                "Third-party Integrations",
                "Advanced Security",
                "Scalable Architecture",
                "6 Months Support",
                "Dedicated Project Manager",
            ],
            popular: false,
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
                        <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Our Services</div>
                        <h1 className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                            Digital Solutions
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive digital services designed to transform your ideas into pixel-perfect reality. From concept
                            to deployment, we handle every aspect of your digital journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group"
                            >
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-red-500/30">
                                                <service.icon className="w-8 h-8 text-red-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-mono font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {service.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center space-x-3">
                                                    <Check className="w-5 h-5 text-red-400 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-red-500/20">
                                            <div className="space-y-1">
                                                <div className="text-red-400 font-mono font-bold">{service.pricing}</div>
                                                <div className="text-gray-500 text-sm">{service.timeline}</div>
                                            </div>
                                            <Link href="/start-project">
                                                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono">
                                                    Get Started
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Service Packages
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the perfect package for your project needs</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Card
                                key={index}
                                className={`bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 relative ${pkg.popular ? "ring-2 ring-red-500/50 scale-105" : ""
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-mono">Most Popular</span>
                                    </div>
                                )}
                                <CardContent className="p-8 text-center">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-mono font-bold text-white mb-2">{pkg.name}</h3>
                                            <div className="text-4xl font-mono font-bold text-red-400 mb-2">{pkg.price}</div>
                                            <p className="text-gray-400">{pkg.description}</p>
                                        </div>

                                        <div className="space-y-3">
                                            {pkg.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center space-x-3">
                                                    <Check className="w-5 h-5 text-red-400 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm text-left">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href="/start-project">
                                            <Button
                                                className={`w-full mt-5 font-mono ${pkg.popular
                                                        ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                                                        : "border-red-500 text-red-400 hover:bg-red-500/10"
                                                    }`}
                                                variant={pkg.popular ? "default" : "outline"}
                                            >
                                                Choose {pkg.name}
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Our Process
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">How we transform your ideas into reality</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", description: "We understand your goals, requirements, and vision" },
                            { step: "02", title: "Planning", description: "Strategic planning and technical architecture design" },
                            { step: "03", title: "Development", description: "Agile development with regular updates and feedback" },
                            { step: "04", title: "Launch", description: "Testing, deployment, and ongoing support" },
                        ].map((process, index) => (
                            <div key={index} className="text-center space-y-4">
                                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center border border-red-500/30">
                                    <span className="text-2xl font-mono font-bold text-red-400">{process.step}</span>
                                </div>
                                <h3 className="text-xl font-mono font-bold text-white">{process.title}</h3>
                                <p className="text-gray-400">{process.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Let's discuss your project and find the perfect solution for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/start-project">
                                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 font-mono text-lg">
                                    Start Your Project
                                    <Zap className="ml-2" size={20} />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    className="border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3 font-mono text-lg"
                                >
                                    Get a Quote
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
