import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, ArrowRight, Code, Smartphone, Gamepad2, Database } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { projects, categories } from "@/lib/projects"

export default function HomePage() {
  const featuredProject = projects.find((p) => p.featured)
  const recentProjects = projects.filter((p) => !p.featured).slice(0, 6)

  const domainIcons = {
    React: Code,
    "Full Stack": Database,
    "HTML/CSS": Code,
    "Mobile App": Smartphone,
    Game: Gamepad2,
    Python: Code,
    "Node.js": Database,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-cyan-50/50 dark:from-purple-950/20 dark:via-blue-950/10 dark:to-cyan-950/20" />
        <div className="container mx-auto relative">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="mb-6 text-sm px-6 py-2">Welcome to My Studio</Badge>
            {/* Featured Project */}
          {featuredProject && (
  <div className="max-w-6xl mx-auto mb-16 lg:mb-20">
    <div className="animate-rgb-border">
      <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-card via-card to-muted/20 rounded-lg">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-64 sm:h-80 lg:h-auto">
            <img
              src={featuredProject.image || "/placeholder.svg"}
              alt={featuredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Badge>{featuredProject.category}</Badge>
              <Badge variant="outline">{featuredProject.year}</Badge>
            </div>
            <CardTitle className="text-xl sm:text-2xl mb-4">{featuredProject.title}</CardTitle>
            <CardDescription className="text-base mb-6 leading-relaxed">
              {featuredProject.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <Link href={featuredProject.link} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1 sm:flex-initial bg-transparent">
                <Link href={featuredProject.github} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  </div>
)}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Creative Developer &
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block sm:inline sm:ml-3">
                Digital Innovator
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences across web, mobile, games, and data science. Explore my journey
              through code, creativity, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/projects">
                  <Code className="w-5 h-5 mr-2" />
                  View All Projects
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Domain Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized skills across multiple technology domains
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories
              .filter((cat) => cat !== "All")
              .map((category) => {
                const Icon = domainIcons[category as keyof typeof domainIcons] || Code
                const projectCount = projects.filter((p) => p.category === category).length
                return (
                  <Card
                    key={category}
                    className="text-center p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-sm sm:text-base mb-1">{category}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{projectCount} projects</p>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Recent Projects</h2>
              <p className="text-muted-foreground">Latest work across different domains</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge>{project.category}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg sm:text-xl line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with fellow developers and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/about" className="flex items-center">
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
