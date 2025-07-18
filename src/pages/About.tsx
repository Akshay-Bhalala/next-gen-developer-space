import { ExternalLink, Calendar, MapPin, GraduationCap, Code, Database, Cloud, Smartphone, Palette, Cpu, FileCode, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import project1Image from "@/assets/project-1.jpg"
import project2Image from "@/assets/project-2.jpg"
import developerPhoto from "@/assets/developer-photo.jpg"

const About = () => {
  const skills = [
    { name: "JavaScript", icon: FileCode },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Node.js", icon: Cpu },
    { name: "Python", icon: FileCode },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Cloud },
    { name: "Git", icon: Code },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Next.js", icon: Zap }
  ]

  const getSkillIcon = (skill: any) => {
    const IconComponent = skill.icon
    return <IconComponent className="h-4 w-4 text-primary mr-2" />
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: project1Image,
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management App",
      description: "A mobile-first task management application with real-time collaboration features. Built using React Native and Firebase for seamless cross-platform experience.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: project2Image,
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      year: "2020-2022",
      details: "Specialization in Software Engineering and Machine Learning"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA", 
      year: "2016-2020",
      details: "Magna Cum Laude, Dean's List"
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Biography Section */}
        <section className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">About Me</h1>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Frame */}
              <div className="order-2 lg:order-1">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-3"></div>
                  <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-2 shadow-xl">
                    <img
                      src={developerPhoto}
                      alt="Developer"
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Biography Content */}
              <div className="order-1 lg:order-2">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      I'm a passionate full-stack developer with over 5 years of experience building 
                      scalable web applications and mobile solutions. My journey began during my 
                      computer science studies at UC Berkeley, where I fell in love with the endless 
                      possibilities of software development.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Throughout my career, I've had the privilege of working with startups and 
                      established companies, helping them transform ideas into successful digital 
                      products. I specialize in modern JavaScript frameworks, cloud technologies, 
                      and creating user-centric applications that solve real-world problems.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      When I'm not coding, you can find me contributing to open-source projects, 
                      mentoring junior developers, or exploring the latest trends in technology. 
                      I believe in continuous learning and staying ahead of the curve in this 
                      rapidly evolving field.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing {projects.length} projects that demonstrate my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-card-hover transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 max-w-5xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-muted/30 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  >
                    {getSkillIcon(skill)}
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              Academic foundation that shaped my technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl leading-tight mb-2 text-foreground">{edu.degree}</CardTitle>
                        <p className="text-primary font-semibold text-lg">{edu.institution}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-1.5 bg-muted/50 rounded-lg">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <div className="p-1.5 bg-muted/50 rounded-lg">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <span className="font-medium">{edu.year}</span>
                      </div>
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                        <p className="text-sm text-muted-foreground leading-relaxed">{edu.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About