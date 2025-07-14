import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Code, Smartphone, Database, Gamepad2, Brain, Award, Calendar, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"

const skills = [
  { name: "React/Next.js", level: 95, icon: Code },
  { name: "Node.js", level: 90, icon: Database },
  { name: "Python", level: 85, icon: Brain },
  { name: "React Native", level: 80, icon: Smartphone },
  { name: "Game Development", level: 75, icon: Gamepad2 },
  { name: "Data Science", level: 80, icon: Brain },
]

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and mobile apps for various clients across different industries.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    period: "2019 - 2020",
    description: "Built and maintained web applications while learning modern development practices and technologies.",
  },
]

const achievements = [
  "Built 20+ successful projects across multiple domains",
  "Contributed to 10+ open source projects",
  "Mentored 15+ junior developers",
  "Speaker at 5+ tech conferences",
  "Certified in AWS and Google Cloud Platform",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with expertise across multiple domains, creating innovative solutions that make a
            difference
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm Gnanadeep Gumpula, a passionate full-stack developer with over 5 years of experience creating
                  innovative digital solutions. My journey began with a curiosity about how websites work, which evolved
                  into a deep passion for building comprehensive digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What sets me apart is my versatility across multiple domains - from responsive web applications and
                  mobile apps to interactive games and data science projects. I believe in the power of technology to
                  solve real-world problems and create meaningful user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or sharing knowledge with the developer community through blogs and speaking engagements.
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      {index !== experience.length - 1 && <div className="absolute left-4 top-8 w-px h-16 bg-border" />}
                      <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            {exp.company} • {exp.period}
                          </p>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Available Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">5+ Years Experience</span>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">Full Stack</Badge>
                    <Badge variant="secondary">Mobile Dev</Badge>
                    <Badge variant="secondary">Game Dev</Badge>
                    <Badge variant="secondary">Data Science</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
