import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/10 px-4">
      <Helmet>
        <title>404 Not Found | Akshay Bhalala Portfolio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center max-w-md w-full bg-white/80 dark:bg-background/80 rounded-2xl shadow-xl p-8 border border-primary/20 animate-fade-in">
        <div className="flex flex-col items-center mb-6">
          <Ghost className="w-16 h-16 text-primary mb-2 animate-bounce" />
          <h1 className="text-7xl font-extrabold text-primary mb-2 drop-shadow-lg">404</h1>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.<br />
          If you think this is a mistake, please let me know.
        </p>
        <Button asChild size="lg" className="w-full">
          <a href="/">
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
