"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { ArrowRight, ExternalLink, Search, Award } from "lucide-react"
import Link from "next/link"
import { Input } from "../../components/ui/input"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import BackgroundPattern from "../../components/background-pattern"

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Web App", "Mobile App", "E-commerce", "Dashboard", "AI/ML", "Blockchain"]

  const projects = [
    {
      title: "PixelCRM",
      slug: "pixelcrm",
      description:
        "AI-powered customer relationship management platform with real-time analytics and automated workflows",
      category: "Web App",
      tags: ["React", "Node.js", "AI", "Analytics", "PostgreSQL"],
      image: "/placeholder.svg?height=300&width=400",
      year: "2024",
      client: "TechFlow Inc.",
      duration: "4 months",
      featured: true,
    },
    {
      title: "NeonDash",
      slug: "neondash",
      description: "Advanced data visualization dashboard for enterprise analytics with real-time monitoring",
      category: "Dashboard",
      tags: ["Vue", "Python", "D3.js", "ML", "Redis"],
      image: "/placeholder.svg?height=300&width=400",
      year: "2024",
      client: "DataCorp",
      duration: "3 months",
      featured: true,
    },
    {
      title: "CodeFlow",
      slug: "codeflow",
      description: "Developer productivity platform with integrated CI/CD workflows and team collaboration tools",
      category: "Web App",
      tags: ["Next.js", "TypeScript", "DevOps", "Docker", "Kubernetes"],
      image: "/placeholder.svg?height=300&width=400",
      year: "2024",
      client: "DevTeam Pro",
      duration: "5 months",
      featured: false,
    },
    {
      title: "EcoCommerce",
      slug: "ecocommerce",
      description: "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly shipping",
      category: "E-commerce",
      tags: ["Shopify", "React", "Stripe", "Analytics", "API"],
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
      client: "GreenMarket",
      duration: "6 months",
      featured: false,
    },
    {
      title: "FinanceAI",
      slug: "financeai",
      description: "AI-powered financial advisory platform with personalized investment recommendations",
      category: "AI/ML",
      tags: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
      client: "WealthTech",
      duration: "8 months",
      featured: true,
    },
    {
      title: "HealthTracker",
      slug: "healthtracker",
      description: "Mobile health monitoring app with wearable integration and AI health insights",
      category: "Mobile App",
      tags: ["React Native", "Node.js", "MongoDB", "AI", "IoT"],
      image: "/placeholder.svg?height=300&width=400",
      year: "2023",
      client: "HealthTech Solutions",
      duration: "4 months",
      featured: false,
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
      <BackgroundPattern />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">Our Portfolio</div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
              Our Work
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects. Each one represents our commitment to excellence,
              innovation, and pixel-perfect execution.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">50+</div>
              <p className="text-gray-300 font-mono">Projects Delivered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">30+</div>
              <p className="text-gray-300 font-mono">Happy Clients</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">95%</div>
              <p className="text-gray-300 font-mono">Success Rate</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">10+</div>
              <p className="text-gray-300 font-mono">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our most impactful and innovative solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <Link key={index} href={`/work/${project.slug}`}>
                <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-mono rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-mono">
                        {project.category}
                      </span>
                      <span className="text-gray-500 text-sm font-mono">{project.year}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-red-500/10 text-red-300 rounded text-xs font-mono border border-red-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-red-500/20">
                      <div className="text-center">
                        <div className="text-sm font-mono text-red-400">Client</div>
                        <div className="text-xs text-gray-400">{project.client}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-mono text-red-400">Duration</div>
                        <div className="text-xs text-gray-400">{project.duration}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-mono text-red-400">Year</div>
                        <div className="text-xs text-gray-400">{project.year}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              All Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Browse our complete portfolio of successful projects
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#1A1A1A] border-red-500/20 focus:border-red-500 text-white font-mono"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`font-mono text-sm ${
                    selectedCategory === category
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "border-red-500/30 text-red-400 hover:bg-red-500/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link key={index} href={`/work/${project.slug}`}>
                <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-red-500/90 text-white text-xs font-mono rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Award className="w-5 h-5 text-yellow-400" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-red-500/10 text-red-300 rounded text-xs font-mono">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded text-xs font-mono">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-red-500/20">
                      <span className="text-gray-500 text-sm font-mono">{project.year}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/5 font-mono group/btn"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 font-mono">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same excellence and attention to detail.
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
