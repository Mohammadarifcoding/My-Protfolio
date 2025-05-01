import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import AnimatedSection from "@/src/shared/Animation/AnimatedSection";
import Container from "@/src/shared/Container";
import SectionHeading from "@/src/shared/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/src/data/SocialMedia";

const Contact = () => {
  return (
    <Container>
      <AnimatedSection id="contact" className=" scroll-mt-20 dot-pattern">
        <SectionHeading
          badge="Get In Touch"
          title="Let's work together on your next project"
          description="I'm currently available for freelance work and full-time opportunities. If you're interested in working together or have any questions, feel free to reach out!"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="overflow-hidden border border-primary/20 bg-secondary/10">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-primary/20 bg-secondary/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-primary/20 bg-secondary/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-primary/20 bg-secondary/30 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-primary/20 bg-secondary/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full relative overflow-hidden group">
                  <span className="relative z-10">Send Message</span>
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, idx) => (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-0.5">
                    <social.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{social.label}</h4>
                    <a
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {social.userName}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-medium mb-4">Current Status</h3>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <p>Available for new opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
};

export default Contact;
