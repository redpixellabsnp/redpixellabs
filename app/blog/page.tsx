"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { ArrowRight, Search, Clock, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import BackgroundPattern from "../../components/background-pattern"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Design", "Development", "AI", "DevOps", "Business", "Tutorials"]

  const blogPosts = [
    {
      title: "The Future of Pixel-Perfect Design",
      slug: "future-of-pixel-perfect-design",
      excerpt:
        "Exploring how attention to detail shapes user experience in modern web applications and the tools that make it possible. From design systems to micro-interactions, every pixel matters.",
      tags: ["Design", "UX", "Frontend", "Tools"],
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: {
        name: "Maya Patel",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "UI/UX Designer",
      },
      featured: true,
      views: 1250,
      likes: 89,
    },
    {
      title: "AI Integration in Modern Web Apps",
      slug: "ai-integration-modern-web-apps",
      excerpt:
        "Best practices for implementing AI features seamlessly into web applications without compromising performance or user experience. A comprehensive guide to AI-powered interfaces.",
      tags: ["AI", "Development", "Integration", "Performance"],
      date: "2025-01-10",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: {
        name: "Sam Rivera",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "AI Specialist",
      },
      featured: true,
      views: 2100,
      likes: 156,
    },
    {
      title: "Building Scalable Cloud Architecture",
      slug: "building-scalable-cloud-architecture",
      excerpt:
        "Lessons learned from deploying enterprise solutions and the architectural patterns that ensure long-term success. From microservices to serverless, we cover it all.",
      tags: ["Cloud", "DevOps", "Architecture", "Scalability"],
      date: "2025-01-05",
      readTime: "12 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: {
        name: "Jordan Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "DevOps Engineer",
      },
      featured: false,
      views: 890,
      likes: 67,
    },
    {
      title: "React Performance Optimization Techniques",
      slug: "react-performance-optimization",
      excerpt:
        "Advanced strategies for optimizing React applications, from code splitting to virtual scrolling. Learn how to build lightning-fast user interfaces.",
      tags: ["Development", "React", "Performance", "Optimization"],
      date: "2024-12-28",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Lead Developer",
      },
      featured: false,
      views: 1450,
      likes: 98,
    },
    {
      title: "Design Systems That Scale",
      slug: "design-systems-that-scale",
      excerpt:
        "Creating maintainable design systems for growing teams and products. Learn how to build components that work across multiple platforms and applications.",
      tags: ["Design", "Systems", "Components", "Scalability"],
      date: "2024-12-20",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: {
        name: "Maya Patel",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "UI/UX Designer",
      },
      featured: false,
      views: 720,
      likes: 54,
    },
    {
      title: "The Business Case for Quality Code",
      slug: "business-case-quality-code",
      excerpt:
        "Why investing in code quality pays off in the long run. From reduced technical debt to faster feature delivery, quality code is a business advantage.",
      tags: ["Business", "Development", "Quality", "Strategy"],
      date: "2024-12-15",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Lead Developer",
      },
      featured: false,
      views: 980,
      likes: 76,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.tags.includes(selectedCategory)
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
      <BackgroundPattern />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="text-sm font-mono text-red-400 tracking-wider uppercase">From the Lab</div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
              Our Blog
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and discoveries from our team of digital craftsmen. Stay updated with the latest
              trends in technology and design.
            </p>
          </div>

          {/* Blog Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">50+</div>
              <p className="text-gray-300 font-mono">Articles Published</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">10K+</div>
              <p className="text-gray-300 font-mono">Monthly Readers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">25+</div>
              <p className="text-gray-300 font-mono">Topics Covered</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-mono font-bold text-red-400">95%</div>
              <p className="text-gray-300 font-mono">Reader Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our most popular and impactful articles</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-500/90 text-white text-xs font-mono rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Star className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm font-mono">{post.date}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-mono font-bold text-white group-hover:text-red-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-red-500/20">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full border border-red-500/30"
                        />
                        <div>
                          <div className="text-sm font-mono text-white">{post.author.name}</div>
                          <div className="text-xs text-gray-400">{post.author.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              All Articles
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our complete collection of insights and tutorials
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
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

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="bg-[#1A1A1A] border-red-500/20 hover:border-red-500/50 transition-all duration-300 group overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex flex-wrap gap-1">
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
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-mono font-bold text-white group-hover:text-red-400 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full border border-red-500/30"
                        />
                        <span className="text-red-400 font-mono">{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-500">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-red-500/20">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/5 font-mono group/btn"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 font-mono">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-700/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Card className="bg-[#1A1A1A] border-red-500/20 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" />
            <CardContent className="text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Get the latest insights, tutorials, and industry trends delivered straight to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0E0E0E] border-red-500/30 focus:border-red-500 text-white font-mono"
                />
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500">Join 5,000+ developers and designers. Unsubscribe anytime.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
