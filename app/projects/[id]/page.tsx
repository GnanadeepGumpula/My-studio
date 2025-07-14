import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Github, ArrowLeft, CheckCircle, Clock, Circle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { getProjectById, projects } from "@/lib/projects"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3)

  const statusIcons = {
    completed: CheckCircle,
    "in-progress": Clock,
    planned: Circle,
  }

  const StatusIcon = statusIcons[project.status]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="relative">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge>{project.category}</Badge>
                <Badge variant="outline">{project.year}</Badge>
                <Badge
                  variant={
                    project.status === "completed"
                      ? "default"
                      : project.status === "in-progress"
                        ? "secondary"
                        : "outline"
                  }
                  className="flex items-center gap-1"
                >
                  <StatusIcon className="w-3 h-3" />
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="flex-1">
                <Link href={project.link} target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="flex-1 sm:flex-initial bg-transparent">
                <Link href={project.github} target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <>
            <Separator className="my-12" />
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Related Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Card key={relatedProject.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge>{relatedProject.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{relatedProject.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{relatedProject.description}</p>
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/projects/${relatedProject.id}`}>View Project</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
