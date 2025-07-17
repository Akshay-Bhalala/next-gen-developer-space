import { ExternalLink, Calendar, MapPin, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import project1Image from "@/assets/project-1.jpg"
import project2Image from "@/assets/project-2.jpg"

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
    "MongoDB", "AWS", "Docker", "Git", "Tailwind CSS", "Next.js"
  ]

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
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm">
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

          <Card className="border-0 shadow-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-center p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-medium text-sm">{skill}</span>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.year}
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">{edu.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About