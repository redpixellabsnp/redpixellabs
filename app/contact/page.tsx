"use client"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Mail, Phone, MapPin, Clock, Zap, MessageCircle, Calendar } from "lucide-react"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import BackgroundPattern from "../../components/background-pattern"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
            <BackgroundPattern />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Get In Touch</div>
                        <h1 className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Ready to start your next project? We'd love to hear from you. Get in touch and let's create something
                            amazing together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card className="bg-[#1A1A1A] border-red-500/20 p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" />
                            <CardContent className="space-y-6">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-mono font-bold text-white mb-2">Send us a Message</h2>
                                    <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
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
                                    <label className="block text-sm font-mono text-red-400 mb-2">Service Interested In</label>
                                    <Select>
                                        <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                            <SelectItem value="web-development">Web & App Development</SelectItem>
                                            <SelectItem value="ui-ux-design">UI/UX Design Systems</SelectItem>
                                            <SelectItem value="ai-automation">AI & Automation Tools</SelectItem>
                                            <SelectItem value="devops-cloud">DevOps & Cloud Engineering</SelectItem>
                                            <SelectItem value="consultation">Consultation</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono text-red-400 mb-2">Project Budget</label>
                                    <Select>
                                        <SelectTrigger className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono">
                                            <SelectValue placeholder="Select budget range" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1A1A1A] border-red-500/30">
                                            <SelectItem value="under-5k">Under $5K</SelectItem>
                                            <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                                            <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                                            <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                                            <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                                            <SelectItem value="100k+">$100K+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono text-red-400 mb-2">Message *</label>
                                    <Textarea
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                        className="bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono min-h-32"
                                    />
                                </div>

                                <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono py-3 group">
                                    Send Message
                                    <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-mono font-bold mb-6 text-white">Get in Touch</h2>
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

                                    <div className="flex items-start space-x-4 group">
                                        <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                            <Clock className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="font-mono text-gray-300 font-semibold">Response Time</p>
                                            <p className="text-gray-400">Within 24 hours</p>
                                            <p className="text-sm text-gray-500">We're quick to respond</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div>
                                <h3 className="text-lg font-mono font-bold mb-4 text-white">Quick Actions</h3>
                                <div className="space-y-4">
                                    <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group cursor-pointer">
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                                    <MessageCircle className="w-5 h-5 text-red-400" />
                                                </div>
                                                <div>
                                                    <p className="font-mono text-white font-semibold">Live Chat</p>
                                                    <p className="text-sm text-gray-400">Chat with our team instantly</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group cursor-pointer">
                                        <CardContent className="p-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                                    <Calendar className="w-5 h-5 text-red-400" />
                                                </div>
                                                <div>
                                                    <p className="font-mono text-white font-semibold">Schedule a Call</p>
                                                    <p className="text-sm text-gray-400">Book a consultation meeting</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
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
                                            <p className="text-red-400 font-mono text-sm">Let's Connect</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                question: "How long does a typical project take?",
                                answer:
                                    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
                            },
                            {
                                question: "Do you work with international clients?",
                                answer:
                                    "Yes! We work with clients worldwide. Our remote-first approach allows us to collaborate effectively across different time zones.",
                            },
                            {
                                question: "What's included in your support?",
                                answer:
                                    "Our support includes bug fixes, minor updates, performance monitoring, and technical assistance. The duration varies by package, ranging from 1-6 months.",
                            },
                            {
                                question: "Can you help with existing projects?",
                                answer:
                                    "We can audit, optimize, or continue development on existing projects. We'll assess your current setup and provide recommendations.",
                            },
                        ].map((faq, index) => (
                            <Card key={index} className="bg-[#1A1A1A] border-red-500/20">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-mono font-bold text-white mb-2">{faq.question}</h3>
                                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
