"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Heart,
  ExternalLink,
  ArrowUp
} from 'lucide-react';

const SumeUILogo = () => (
  <div className="group relative inline-block">
    <span
      className="select-none tracking-wide text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 group-hover:from-blue-400 group-hover:to-cyan-400"
      aria-label="SumeUI"
    >
      Sume
      <span className="text-cyan-300 group-hover:text-blue-300 transition-colors duration-300">
        Ui
      </span>
    </span>
  </div>
);

// Define the FooterLink type to include optional external property
interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

// Define the social link type
interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Footer = () => {
  const footerLinks: Record<string, FooterLink[]> = {
    product: [
      { name: 'Components', href: '#components' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Showcase', href: '#showcase' },
    ],
    resources: [
      { name: 'Getting Started', href: '#' },
      { name: 'GitHub', href: 'https://github.com/suhelahmedprojectspace/sume-ui.git', external: true },
      { name: 'Storybook', href: '/storybook', external: true },
      { name: 'NPM Package', href: 'https://www.npmjs.com/package/@sume/ui', external: true }
    ],
    community: [
      { name: 'Discord', href: 'https://discord.com', external: true },
      { name: 'Twitter', href: 'https://twitter.com', external: true },
      { name: 'Discussions', href: 'https://github.com/suhelahmedprojectspace/sume-ui.git', external: true },
      { name: 'Contributing', href: 'https://github.com/suhelahmedprojectspace/sume-ui.git' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'License', href: '#' },
      { name: 'Code of Conduct', href: '#' }
    ]
  };

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/suhelahmedprojectspace/sume-ui.git', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: 'https://shorturl.at/UPMbE', icon: Linkedin },
    { name: 'Email', href: 'mohamedsahel115@gmail.com', icon: Mail }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 to-slate-900 border-t border-slate-800/30">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SumeUILogo />
              <p className="mt-4 text-slate-400 text-base leading-relaxed max-w-md">
                Modern React component library designed for speed, accessibility, and developer experience. 
                Build beautiful applications with <span className="text-blue-400 font-medium">confidence</span>.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} SumeUI. Made with 
              <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
              by developers, for developers.
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <span className="text-slate-600">•</span>
              <a href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </a>
              <span className="text-slate-600">•</span>
              <span>Version 1.0.0</span>
            </div>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-blue-400 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </footer>
  );
};

export default Footer;
