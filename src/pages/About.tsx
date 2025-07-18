import {
  ExternalLink,
  Calendar,
  MapPin,
  GraduationCap,
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Cpu,
  FileCode,
  Zap,
  Globe,
  Github,
  Layers,
  Server,
  Monitor,
  Braces,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ecommerce from "/ecommerce.png";
import Android from "/Android.jpg";
import Akshay_Bhalala1 from "/Akshay_Bhalala1.jpg";
import { brandLogos } from "@/brandLogos";
import { Helmet } from "react-helmet-async";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: FileCode },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Zap },
    { name: "Vue.js", icon: Layers },
    { name: "Angular", icon: Layers },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "Python", icon: FileCode },
    { name: "Django", icon: Globe },
    { name: "Flask", icon: Globe },
    { name: "PostgreSQL", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Redis", icon: Database },
    { name: "Firebase", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "Google Cloud", icon: Cloud },
    { name: "Docker", icon: Cloud },
    { name: "Git", icon: Github },
    { name: "GitHub", icon: Github },
    { name: "GitLab", icon: Code },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Bootstrap", icon: Palette },
    { name: "SASS/SCSS", icon: Palette },
    { name: "Webpack", icon: Settings },
    // { name: "Vite", icon: Zap },
    { name: "GraphQL", icon: Globe },
    { name: "Linux", icon: Monitor },
    { name: "Nginx", icon: Server },
  ];

  // Replace getSkillIcon with SVG logo rendering
  const getSkillLogo = (skill: any) => {
    const brand = brandLogos[skill.name];
    if (brand) {
      return (
        <img
          src={`/logos/${brand.logo}`}
          alt={skill.name + " logo"}
          className="h-5 w-5 mr-2"
          style={{ background: "white", borderRadius: 4, padding: 2 }}
        />
      );
    }
    // fallback to Lucide icon if not found
    const IconComponent = skill.icon;
    return <IconComponent className="h-4 w-4 text-primary mr-2" />;
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: ecommerce
    },
    {
      title: "Task Management App",
      description:
        "A mobile-first task management application with real-time collaboration features. Built using React Native and Firebase for seamless cross-platform experience.",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: Android
    },
  ];

  const education = [
    {
      degree:
        "Master of Science in Computer Application & Information Technology",
      institution:
        "K.S. School of Business Management & Information Technology",
      location: "Gujarat University, Ahmedabad.",
      year: "2023-2025",
      details: "Studied Advance Networking, Artificial Intelligence, DSA.",
    },
    {
      degree:
        "Bachelor of Science in Computer Application & Information Technology",
      institution:
        "K.S. School of Business Management & Information Technology",
      location: "Gujarat University, Ahmedabad.",
      year: "2020-2023",
      details:
        "Studied C, C++, C#, JavaScript, DBMS, Python, Java, Node.js, PHP.",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>About | Akshay Bhalala Portfolio</title>
        <meta
          name="description"
          content="Learn more about Akshay Bhalala, a full-stack developer with expertise in modern web and mobile technologies."
        />
        <meta name="author" content="Akshay Bhalala" />
        <link rel="canonical" href="https://akshay-bhalala.netlify.app/about" />
        <meta property="og:title" content="About | Akshay Bhalala Portfolio" />
        <meta
          property="og:description"
          content="Learn more about Akshay Bhalala, a full-stack developer with expertise in modern web and mobile technologies."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:url"
          content="https://akshay-bhalala.netlify.app/about"
        />
        <meta
          property="og:image"
          content="https://akshay-bhalala.netlify.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Akshay Bhalala Portfolio" />
        <meta
          name="twitter:description"
          content="Learn more about Akshay Bhalala, a full-stack developer with expertise in modern web and mobile technologies."
        />
        <meta
          name="twitter:image"
          content="https://akshay-bhalala.netlify.app/og-image.jpg"
        />
        <meta name="twitter:creator" content="@akshaybhalala" />
      </Helmet>
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Biography Section */}
        <section className="mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center">
            About Me
          </h1>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Image Frame - appears first on mobile, second on desktop */}
              <div className="order-1 lg:order-2">
                <div className="relative max-w-xs sm:max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-3"></div>
                  <div className="relative bg-background border-2 border-primary/20 rounded-2xl p-1 sm:p-2 shadow-xl">
                    <img
                      src={Akshay_Bhalala1}
                      alt="Developer"
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Biography Content - appears second on mobile, first on desktop */}
              <div className="order-2 lg:order-1">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-4 sm:p-8">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-justify">
                      I'm Akshay Bhalala, a passionate Full-Stack Developer and
                      Web Designer with over five years of experience creating
                      high-performance, user-focused digital solutions. My
                      journey into tech began during my computer science studies
                      at Gujarat University Ahmedabad, where I discovered a deep
                      interest in software development and its potential to
                      shape the world around us. Since then, I’ve been dedicated
                      to crafting seamless web and mobile experiences that
                      combine clean design with solid architecture.
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-justify">
                      Specializing in modern JavaScript frameworks like
                      React.js, Next.js, and Tailwind CSS, I bring ideas to life
                      through responsive and intuitive frontends. On the
                      backend, I build scalable and secure applications using
                      Node.js, Express.js, MongoDB, and MySQL, with additional
                      experience in Python and Flask. I also have hands-on
                      expertise in API development with Postman, cloud services
                      like Firebase, and mobile development using Android
                      Studio—all backed by a strong design sense shaped through
                      tools like Figma.
                    </p>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
                      Beyond coding, I’m an advocate for continuous learning and
                      growth. I regularly contribute to open-source projects,
                      mentor junior developers, and stay immersed in emerging
                      tech trends. Whether working with startups or established
                      teams, my goal remains the same: to transform ideas into
                      reliable, elegant digital products that make a real
                      difference.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Showcasing {projects.length} projects that demonstrate my
              technical skills and problem-solving abilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-primary/40 rounded-2xl shadow-md bg-gradient-to-br from-background to-card/60 hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] sm:text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Skills & Technologies
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          <Card className="border-2 border-primary/40 rounded-2xl shadow-md bg-gradient-to-br from-background to-card/60 max-w-7xl mx-auto hover:shadow-xl hover:border-primary transition-all duration-300">
            <CardContent className="p-3 sm:p-6 md:p-8">
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 sm:p-3 md:p-4 bg-muted/30 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                  >
                    {getSkillLogo(skill)}
                    <span className="font-medium text-[10px] xs:text-xs sm:text-sm truncate text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Education
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Academic foundation that shaped my technical expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="border-2 border-primary/40 rounded-2xl shadow-md bg-gradient-to-br from-background to-card/60 hover:shadow-xl hover:border-primary transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                  <CardHeader className="pb-2 sm:pb-4">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base sm:text-xl leading-tight mb-1 sm:mb-2 text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-primary font-semibold text-sm sm:text-lg">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                        <div className="p-1 bg-muted/50 rounded-lg">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">
                          {edu.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground">
                        <div className="p-1 bg-muted/50 rounded-lg">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">
                          {edu.year}
                        </span>
                      </div>
                      <div className="mt-2 sm:mt-4 p-2 sm:p-4 bg-muted/30 rounded-lg border border-border/50">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {edu.details}
                        </p>
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
  );
};

export default About;
