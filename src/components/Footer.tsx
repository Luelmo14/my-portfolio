import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 [Alex Luelmo]. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <a
                href="https://github.com/Luelmo14"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://www.linkedin.com/in/alex-luelmo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="mailto:alexluelmo@gmail.com">Email</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
