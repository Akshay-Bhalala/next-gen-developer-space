import { Mail, Phone, MapPin, MessageCircle, Quote, Clock, Calendar, Globe, Users, Coffee, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.johnson@example.com",
      href: "mailto:alex.johnson@example.com",
      description: "Best way to reach me for business inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available Mon-Fri 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,+CA",
      description: "Open to remote and on-site opportunities"
    },
  ]

  const availability = [
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I typically respond to emails within a business day"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Open for new projects",
      description: "Currently accepting freelance and full-time opportunities"
    },
    {
      icon: Globe,
      title: "Time Zone",
      value: "Pacific Standard Time",
      description: "UTC-8 (UTC-7 during daylight saving)"
    }
  ]

  const quotes = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde"
    },
    {
      text: "The only way to learn a new programming language is by writing programs in it.",
      author: "Dennis Ritchie"
    },
    {
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            collaborating on innovative solutions, or just having a chat about technology and development.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Collaboration Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="h-4 w-4 text-primary" />
              <span>Coffee Chat Welcome</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span>Passionate About Tech</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              Let's Connect
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide mb-1">
                            {item.title}
                          </h3>
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-base sm:text-lg font-medium hover:text-primary transition-colors block mb-2 break-words"
                          >
                            {item.value}
                          </a>
                          <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Availability Info */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Availability & Details
              </h3>
              <div className="grid gap-4">
                {availability.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-muted/50 to-muted/30">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">{item.title}: <span className="text-primary">{item.value}</span></p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Inspirational Quotes */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Quote className="h-6 w-6 text-primary" />
              Developer Wisdom
            </h2>
            
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-muted-foreground italic mb-3 text-lg leading-relaxed">
                      "{quote.text}"
                    </blockquote>
                    <cite className="text-sm font-medium text-primary not-italic">
                      — {quote.author}
                    </cite>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl text-center">Ready to Collaborate?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Whether you have a project in mind, need technical consultation, 
                  or want to discuss potential opportunities, I'd love to hear from you.
                </p>
                <div className="text-sm text-muted-foreground bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="font-medium">Response time: Within 24 hours</p>
                  <p>Time zone: Pacific Standard Time (PST)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact