import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Akshay_Bhalala from "/Akshay_Bhalala.jpg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Crafting robust, end-to-end web and mobile applications using modern frameworks and scalable architectures.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing clean, responsive, and accessible interfaces that prioritize user engagement and clarity.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improving speed, responsiveness, and efficiency to ensure seamless user experiences across devices.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home | Akshay Bhalala Portfolio</title>
        <meta
          name="description"
          content="Akshay Bhalala is a passionate full-stack developer crafting digital experiences with modern technologies. Explore work, skills, and contact info."
        />
        <meta name="author" content="Akshay Bhalala" />
        <link rel="canonical" href="https://akshay-bhalala.netlify.app/" />
        <meta property="og:title" content="Home | Akshay Bhalala Portfolio" />
        <meta
          property="og:description"
          content="Akshay Bhalala is a passionate full-stack developer crafting digital experiences with modern technologies. Explore work, skills, and contact info."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akshay-bhalala.netlify.app/" />
        <meta
          property="og:image"
          content="https://akshay-bhalala.netlify.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Akshay Bhalala Portfolio" />
        <meta
          name="twitter:description"
          content="Akshay Bhalala is a passionate full-stack developer crafting digital experiences with modern technologies. Explore work, skills, and contact info."
        />
        <meta
          name="twitter:image"
          content="https://akshay-bhalala.netlify.app/og-image.jpg"
        />
        <meta name="twitter:creator" content="@akshaybhalala" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-hero-gradient">
                  Akshay Bhalala
                </span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl text-justify">
                I'm Akshay Bhalala, a dynamic Full-Stack Developer and Web
                Designer passionate about building powerful, scalable, and
                user-centric digital experiences. With expertise in both
                frontend and backend technologies, I create seamless web
                applications while also excelling in network engineering and
                cloud computing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="shadow-hero-glow">
                  <Link to="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">View My Work</Link>
                </Button>
              </div>
            </div>

            {/* Developer Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-20 scale-110"></div>
                <img
                  src={Akshay_Bhalala}
                  alt="Akshay Bhalala - Software Developer"
                  className="relative w-80 h-80 rounded-full object-cover border-4 border-background shadow-card-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Blending deep technical expertise with thoughtful design to craft
              high-impact, user-centric digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-primary/40 rounded-2xl shadow-md bg-gradient-to-br from-background to-card/60 hover:shadow-xl hover:border-primary transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let’s turn your vision into reality with cutting-edge technology,
            thoughtful design, and scalable solutions tailored to your goals.
          </p>
          <Button asChild size="lg" className="shadow-hero-glow">
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
