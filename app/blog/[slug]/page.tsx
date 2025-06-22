"use client"

import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { ArrowLeft, Clock, TrendingUp, Star, Share2, BookmarkPlus, MessageCircle } from "lucide-react"
import Link from "next/link"
import Navigation from "../../../components/navigation"
import Footer from "../../../components/footer"
import BackgroundPattern from "../../../components/background-pattern"

// This would normally come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = {
    "future-of-pixel-perfect-design": {
      title: "The Future of Pixel-Perfect Design",
      excerpt:
        "Exploring how attention to detail shapes user experience in modern web applications and the tools that make it possible.",
      content: `
        <p>In today's digital landscape, the difference between good and great often lies in the details. Pixel-perfect design isn't just about making things look pretty—it's about creating experiences that feel intuitive, professional, and trustworthy.</p>

        <h2>Why Every Pixel Matters</h2>
        <p>When users interact with your application, they form impressions within milliseconds. These impressions are largely based on visual cues: alignment, spacing, typography, and color harmony. A single misaligned element or inconsistent spacing can undermine the perceived quality of your entire product.</p>

        <h2>The Tools That Make It Possible</h2>
        <p>Modern design tools have evolved to support pixel-perfect workflows:</p>
        <ul>
          <li><strong>Figma</strong> - Real-time collaboration with developer handoff features</li>
          <li><strong>Sketch</strong> - Precision design with symbol libraries</li>
          <li><strong>Adobe XD</strong> - Integrated prototyping and design systems</li>
          <li><strong>Framer</strong> - Code-based design for complex interactions</li>
        </ul>

        <h2>Design Systems: The Foundation</h2>
        <p>A well-structured design system is crucial for maintaining consistency across large applications. It should include:</p>
        <ul>
          <li>Typography scales and hierarchy</li>
          <li>Color palettes with accessibility considerations</li>
          <li>Spacing and layout grids</li>
          <li>Component libraries with clear usage guidelines</li>
          <li>Icon sets and illustration styles</li>
        </ul>

        <h2>Implementation Best Practices</h2>
        <p>Translating designs to code requires attention to detail and the right tools:</p>
        <ul>
          <li>Use CSS Grid and Flexbox for precise layouts</li>
          <li>Implement design tokens for consistent styling</li>
          <li>Utilize component libraries like Tailwind CSS</li>
          <li>Test across different devices and browsers</li>
          <li>Use tools like Storybook for component documentation</li>
        </ul>

        <h2>The Future of Design</h2>
        <p>As we move forward, several trends are shaping the future of pixel-perfect design:</p>
        <ul>
          <li><strong>AI-Assisted Design</strong> - Tools that help automate repetitive tasks</li>
          <li><strong>Design-to-Code</strong> - Automated code generation from designs</li>
          <li><strong>Responsive Everything</strong> - Designs that adapt to any screen size</li>
          <li><strong>Accessibility First</strong> - Inclusive design from the ground up</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Pixel-perfect design is more than an aesthetic choice—it's a commitment to quality that users notice and appreciate. By investing in the right tools, processes, and mindset, we can create digital experiences that truly stand out in an increasingly crowded digital landscape.</p>
      `,
      tags: ["Design", "UX", "Frontend", "Tools"],
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=800",
      author: {
        name: "Maya Patel",
        avatar: "/placeholder.svg?height=60&width=60",
        role: "UI/UX Designer",
        bio: "Maya is a senior UI/UX designer with over 8 years of experience creating pixel-perfect interfaces for startups and enterprises.",
      },
      views: 1250,
      likes: 89,
      comments: 23,
    },
    "ai-integration-modern-web-apps": {
      title: "AI Integration in Modern Web Apps",
      excerpt:
        "Best practices for implementing AI features seamlessly into web applications without compromising performance or user experience.",
      content: `
        <p>Artificial Intelligence is revolutionizing how we build and interact with web applications. From chatbots to recommendation engines, AI features are becoming essential for competitive digital products.</p>

        <h2>Understanding AI Integration</h2>
        <p>Integrating AI into web applications involves several considerations:</p>
        <ul>
          <li>Performance impact on user experience</li>
          <li>Data privacy and security concerns</li>
          <li>Cost implications of AI services</li>
          <li>Fallback strategies for AI failures</li>
        </ul>

        <h2>Popular AI Services for Web Apps</h2>
        <p>Several platforms make AI integration accessible:</p>
        <ul>
          <li><strong>OpenAI API</strong> - GPT models for text generation and analysis</li>
          <li><strong>Google Cloud AI</strong> - Vision, speech, and translation APIs</li>
          <li><strong>AWS AI Services</strong> - Comprehensive AI toolkit</li>
          <li><strong>Hugging Face</strong> - Open-source models and inference</li>
        </ul>

        <h2>Implementation Strategies</h2>
        <p>When implementing AI features, consider these approaches:</p>
        <ul>
          <li>Client-side processing for simple tasks</li>
          <li>Server-side processing for complex operations</li>
          <li>Edge computing for reduced latency</li>
          <li>Hybrid approaches for optimal performance</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Start with simple AI features and iterate</li>
          <li>Implement proper error handling and fallbacks</li>
          <li>Monitor AI performance and costs</li>
          <li>Ensure user privacy and data protection</li>
          <li>Provide clear user feedback during AI processing</li>
        </ul>

        <h2>Real-World Examples</h2>
        <p>Here are some successful AI integrations we've implemented:</p>
        <ul>
          <li>Smart search with natural language processing</li>
          <li>Automated content moderation</li>
          <li>Personalized recommendations</li>
          <li>Intelligent form validation</li>
          <li>Real-time language translation</li>
        </ul>

        <h2>Future Considerations</h2>
        <p>As AI technology evolves, keep these trends in mind:</p>
        <ul>
          <li>Smaller, more efficient models</li>
          <li>Better privacy-preserving techniques</li>
          <li>Improved real-time processing capabilities</li>
          <li>More accessible AI development tools</li>
        </ul>
      `,
      tags: ["AI", "Development", "Integration", "Performance"],
      date: "2025-01-10",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=800",
      author: {
        name: "Sam Rivera",
        avatar: "/placeholder.svg?height=60&width=60",
        role: "AI Specialist",
        bio: "Sam specializes in integrating AI and machine learning solutions into web applications, with expertise in natural language processing and computer vision.",
      },
      views: 2100,
      likes: 156,
      comments: 34,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0E0E0E] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-mono font-bold text-red-400 mb-4">404</h1>
          <p className="text-gray-400 mb-8">Blog post not found</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-mono">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = [
    {
      title: "Building Scalable Cloud Architecture",
      slug: "building-scalable-cloud-architecture",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "12 min read",
    },
    {
      title: "React Performance Optimization",
      slug: "react-performance-optimization",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "10 min read",
    },
    {
      title: "Design Systems That Scale",
      slug: "design-systems-that-scale",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white overflow-x-hidden relative">
      <BackgroundPattern />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-mono mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between py-6 border-y border-red-500/20">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-red-500/30"
                />
                <div>
                  <div className="font-mono font-bold text-white">{post.author.name}</div>
                  <div className="text-sm text-red-400">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-red-500/20">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-[#1A1A1A] border-red-500/20">
                <CardContent className="p-8">
                  <div
                    className="prose prose-invert prose-red max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                      color: "#e5e7eb",
                      lineHeight: "1.7",
                    }}
                  />
                </CardContent>
              </Card>

              {/* Author Bio */}
              <Card className="bg-[#1A1A1A] border-red-500/20 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full border-2 border-red-500/30"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-mono font-bold text-white mb-1">{post.author.name}</h3>
                      <p className="text-red-400 text-sm font-mono mb-3">{post.author.role}</p>
                      <p className="text-gray-400 leading-relaxed">{post.author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card className="bg-[#1A1A1A] border-red-500/20 mt-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-mono font-bold text-white mb-6">Comments ({post.comments})</h3>
                  <div className="space-y-6">
                    {/* Sample Comments */}
                    <div className="border-b border-red-500/20 pb-6">
                      <div className="flex items-start space-x-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Commenter"
                          className="w-10 h-10 rounded-full border border-red-500/30"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-mono font-bold text-white">Alex Johnson</span>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                          </div>
                          <p className="text-gray-400">
                            Great article! The section on design systems really resonated with our team's current
                            challenges. We've been struggling with consistency across our product suite.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-red-500/20 pb-6">
                      <div className="flex items-start space-x-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Commenter"
                          className="w-10 h-10 rounded-full border border-red-500/30"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-mono font-bold text-white">Sarah Chen</span>
                            <span className="text-gray-500 text-sm">1 day ago</span>
                          </div>
                          <p className="text-gray-400">
                            The tools section is incredibly helpful. I hadn't considered Framer for code-based design.
                            Definitely going to give it a try on our next project.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start space-x-3">
                        <img
                          src="/placeholder.svg?height=40&width=40"
                          alt="Commenter"
                          className="w-10 h-10 rounded-full border border-red-500/30"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-mono font-bold text-white">Mike Rodriguez</span>
                            <span className="text-gray-500 text-sm">12 hours ago</span>
                          </div>
                          <p className="text-gray-400">
                            As a developer, I appreciate the implementation best practices section. The CSS Grid and
                            Flexbox tips are spot on!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Share & Actions */}
              <Card className="bg-[#1A1A1A] border-red-500/20 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-mono font-bold text-white mb-4">Share Article</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 font-mono"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10 font-mono"
                    >
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Bookmark
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card className="bg-[#1A1A1A] border-red-500/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-mono font-bold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost, index) => (
                      <Link key={index} href={`/blog/${relatedPost.slug}`}>
                        <div className="group cursor-pointer">
                          <img
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            className="w-full h-24 object-cover rounded border border-red-500/20 group-hover:border-red-500/50 transition-colors mb-2"
                          />
                          <h4 className="text-sm font-mono font-bold text-white group-hover:text-red-400 transition-colors leading-tight mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">{relatedPost.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
