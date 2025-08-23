import { ArrowUp, Facebook, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 mt-12">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-primary">Khuai</h3>
          <p className="text-sm text-muted-foreground">
            Building modern web apps with React, Next.js, and TailwindCSS.
          </p>
          <div className="flex space-x-3 items-center justify-center">
            <a
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-muted-foreground hover:text-primary"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-primary">Quick Links</h4>
          <a
            href="#hero"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Services / Extras */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-primary">Services</h4>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Web Development
          </a>
        </div>

        {/* Newsletter / Subscribe */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-semibold text-primary">Subscribe</h4>
          <p className="text-sm text-muted-foreground">
            Get the latest updates and projects.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm text-muted-foreground text-center  md:text-left">
          &copy; {new Date().getFullYear()} Khuai. All rights reserved by Khuai.
        </p>
        <a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
