import { Mail, Phone, MapPin, MessageCircle, Quote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.johnson@example.com",
      href: "mailto:alex.johnson@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,+CA",
    },
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                  <Card key={index} className="border-0 shadow-sm hover:shadow-card-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                            {item.title}
                          </h3>
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Additional Info */}
            <Card className="mt-8 border-0 shadow-sm bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Availability</h3>
                <p className="text-muted-foreground mb-4">
                  Currently available for freelance projects and full-time opportunities. 
                  I typically respond to emails within 24 hours.
                </p>
                <div className="text-sm">
                  <p className="font-medium">Preferred Communication:</p>
                  <p className="text-muted-foreground">Email for project inquiries, LinkedIn for networking</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inspirational Quotes */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Quote className="h-6 w-6 text-primary" />
              Developer Wisdom
            </h2>
            
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <blockquote className="text-muted-foreground italic mb-3">
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
            <Card className="mt-8 border-0 shadow-sm bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-center">Ready to Collaborate?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Whether you have a project in mind, need technical consultation, 
                  or want to discuss potential opportunities, I'd love to hear from you.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Response time: Within 24 hours</p>
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