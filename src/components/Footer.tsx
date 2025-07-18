import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Akshay-Bhalala",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akshay-bhalala-ak2409/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100010470198470",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/akshay_bhalala24",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919714468107",
      icon: MessageCircle,
    },
    {
      name: "Twitter",
      href: "https://x.com/Akshay_24_",
      icon: Twitter,
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="copyright" content="© Akshay Bhalala" />
        <meta name="organization" content="Akshay Bhalala" />
        <meta
          property="og:see_also"
          content="https://akshay-bhalala.netlify.app/"
        />
      </Helmet>
      <footer className="bg-gradient-to-r from-muted/50 to-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                Copyright © {currentYear} AKSHAY | All Rights Reserved
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Designing digital solutions that create meaningful impact.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-muted-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-primary/10 rounded-xl border border-transparent hover:border-primary/20 hover:shadow-lg"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />

                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-xs px-2 py-1 rounded-md pointer-events-none z-10 whitespace-nowrap">
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
