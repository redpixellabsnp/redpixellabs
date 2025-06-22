"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Checkbox } from "../../components/ui/checkbox"
import { ArrowRight, Zap, Code, Palette, Bot, Cloud, Calendar, Users, Target, CheckCircle } from "lucide-react"

import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import BackgroundPattern from "../../components/background-pattern"

export default function StartProjectPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [currentStep, setCurrentStep] = useState(1)

    const services = [
        { id: "web-dev", label: "Web & App Development", icon: Code },
        { id: "ui-ux", label: "UI/UX Design Systems", icon: Palette },
        { id: "ai-automation", label: "AI & Automation Tools", icon: Bot },
        { id: "devops-cloud", label: "DevOps & Cloud Engineering", icon: Cloud },
    ]

    const projectTypes = [
        "New Website/App",
        "Redesign Existing Platform",
        "Mobile App Development",
        "E-commerce Solution",
        "Custom Software",
        "AI Integration",
        "Other",
    ]

    const timelines = ["ASAP (Rush Job)", "1-2 weeks", "1 month", "2-3 months", "3-6 months", "6+ months", "Flexible"]

    const handleServiceToggle = (serviceId: string) => {
        setSelectedServices((prev) =>
            prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
        )
    }

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
            {/* Background Pattern */}
            <BackgroundPattern />

            {/* Navigation */}
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-6">
                        <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Let's Build Together</div>
                        <h1 className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                            Start Your Project
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Ready to transform your vision into reality? Let's discuss your project requirements and create something
                            extraordinary together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Form */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex items-center">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold transition-all duration-300 ${currentStep >= step
                                                ? "bg-red-500 text-white"
                                                : "bg-red-500/20 text-red-400 border border-red-500/30"
                                            }`}
                                    >
                                        {currentStep > step ? <CheckCircle size={20} /> : step}
                                    </div>
                                    {step < 3 && (
                                        <div
                                            className={`w-16 h-0.5 mx-2 transition-all duration-300 ${currentStep > step ? "bg-red-500" : "bg-red-500/20"
                                                }`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-center">
                            <p className="text-gray-400 font-mono">
                                Step {currentStep} of 3:{" "}
                                {currentStep === 1
                                    ? "Project Details"
                                    : currentStep === 2
                                        ? "Services & Timeline"
                                        : "Contact Information"}
                            </p>
                        </div>
                    </div>

                    <Card className="bg-[#1A1A1A] border-red-500/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" />
                        <CardContent className="p-8">
                            {/* Step 1: Project Details */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl font-mono font-bold text-white mb-2">Tell Us About Your Project</h2>
                                        <p className="text-gray-400">Help us understand your vision and requirements</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Project Type *</label>
                                        <Select>
                                            <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                                <SelectValue placeholder="Select project type" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                                {projectTypes.map((type) => (
                                                    <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Project Title *</label>
                                        <Input
                                            placeholder="Give your project a name"
                                            className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Project Description *</label>
                                        <Textarea
                                            placeholder="Describe your project, goals, and any specific requirements..."
                                            className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono min-h-32"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Target Audience</label>
                                        <Input
                                            placeholder="Who is your target audience?"
                                            className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono"
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <Button
                                            onClick={() => setCurrentStep(2)}
                                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono px-8"
                                        >
                                            Next Step
                                            <ArrowRight className="ml-2" size={18} />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Services & Timeline */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl font-mono font-bold text-white mb-2">Services & Timeline</h2>
                                        <p className="text-gray-400">Select the services you need and your preferred timeline</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-4">Required Services *</label>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {services.map((service) => (
                                                <div
                                                    key={service.id}
                                                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${selectedServices.includes(service.id)
                                                            ? "border-red-500 bg-red-500/10"
                                                            : "border-red-500/20 hover:border-red-500/40"
                                                        }`}
                                                    onClick={() => handleServiceToggle(service.id)}
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <Checkbox checked={selectedServices.includes(service.id)} className="border-red-500/30" />
                                                        <service.icon className="w-5 h-5 text-red-400" />
                                                        <span className="font-mono text-white">{service.label}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-mono text-red-400 mb-2">Project Budget *</label>
                                            <Select>
                                                <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                                    <SelectValue placeholder="Select budget range" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                                    <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                                                    <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                                                    <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                                                    <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                                                    <SelectItem value="100k+">$100K+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-mono text-red-400 mb-2">Timeline *</label>
                                            <Select>
                                                <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                                    <SelectValue placeholder="Select timeline" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                                    {timelines.map((timeline) => (
                                                        <SelectItem key={timeline} value={timeline.toLowerCase().replace(/\s+/g, "-")}>
                                                            {timeline}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Additional Requirements</label>
                                        <Textarea
                                            placeholder="Any specific technologies, integrations, or special requirements?"
                                            className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono min-h-24"
                                        />
                                    </div>

                                    <div className="flex justify-between">
                                        <Button
                                            onClick={() => setCurrentStep(1)}
                                            variant="outline"
                                            className="border-red-500 text-red-400 hover:bg-red-500/10 font-mono px-8"
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            onClick={() => setCurrentStep(3)}
                                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono px-8"
                                        >
                                            Next Step
                                            <ArrowRight className="ml-2" size={18} />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Contact Information */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl font-mono font-bold text-white mb-2">Contact Information</h2>
                                        <p className="text-gray-400">How can we reach you to discuss your project?</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-mono text-red-400 mb-2">Full Name *</label>
                                            <Input className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-mono text-red-400 mb-2">Email Address *</label>
                                            <Input
                                                type="email"
                                                className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-mono text-red-400 mb-2">Phone Number</label>
                                            <Input className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-mono text-red-400 mb-2">Company/Organization</label>
                                            <Input className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">How did you hear about us?</label>
                                        <Select>
                                            <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                                <SelectItem value="google">Google Search</SelectItem>
                                                <SelectItem value="social-media">Social Media</SelectItem>
                                                <SelectItem value="referral">Referral</SelectItem>
                                                <SelectItem value="portfolio">Portfolio/Website</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-red-400 mb-2">Additional Message</label>
                                        <Textarea
                                            placeholder="Anything else you'd like us to know?"
                                            className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono min-h-24"
                                        />
                                    </div>

                                    <div className="flex justify-between">
                                        <Button
                                            onClick={() => setCurrentStep(2)}
                                            variant="outline"
                                            className="border-red-500 text-red-400 hover:bg-red-500/10 font-mono px-8"
                                        >
                                            Previous
                                        </Button>
                                        <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono px-8 group">
                                            Submit Project
                                            <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* What Happens Next */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            What Happens Next?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Here's our streamlined process to get your project started
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center border border-red-500/30">
                                <Calendar className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-mono font-bold text-white">Initial Consultation</h3>
                            <p className="text-gray-400">We'll schedule a call within 24 hours to discuss your project in detail</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center border border-red-500/30">
                                <Target className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-mono font-bold text-white">Proposal & Planning</h3>
                            <p className="text-gray-400">We'll create a detailed proposal with timeline, milestones, and pricing</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center border border-red-500/30">
                                <Users className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-mono font-bold text-white">Project Kickoff</h3>
                            <p className="text-gray-400">Once approved, we'll assign your dedicated team and begin development</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
