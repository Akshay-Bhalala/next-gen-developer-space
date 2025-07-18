import { Github, Linkedin, Mail, Twitter, Facebook, MessageCircle, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/15551234567",
      icon: MessageCircle,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:alex.johnson@example.com",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-muted/50 to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alex Johnson. Built with ❤️ using React & Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Crafting digital experiences that make a difference
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-muted-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-primary/10 rounded-xl border border-transparent hover:border-primary/20 hover:shadow-lg"
                  aria-label={link.name}
                  title={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
        
        {/* Additional Footer Info */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground italic">
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>💻 Full-Stack Developer</span>
            <span>🚀 Tech Enthusiast</span>
            <span>🌟 Problem Solver</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer