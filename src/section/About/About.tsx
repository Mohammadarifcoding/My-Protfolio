import { Card, CardContent } from "@/src/components/ui/card";
import { AboutData } from "@/src/data/About";
import AnimatedSection from "@/src/shared/Animation/AnimatedSection";
import Container from "@/src/shared/Container";
import SectionHeading from "@/src/shared/SectionHeading";
import React from "react";

const About = () => {
  return (
    <Container>
      <AnimatedSection id="about" className=" scroll-mt-20 dot-pattern">
        <SectionHeading
        className="sm:text-3xl text-[25px]"
          badge="About Me"
          title="Problem solver, Visionary Developer, community builder"
          description="With 1.5 years of full-stack experience, I mix creative vision and technical expertise to transform ideas into software that makes a real impact on people’s lives."
        />

        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:text-base text-sm">
              <p className="text-muted-foreground">
                I love building web apps that solve real problems in simple
                ways. My tech journey began at 2 years ago.I started my career by learning react js
              </p>
              <p className="text-muted-foreground">
                As president of CodeKPI, I lead a student programming club,
                build full-stack apps with the MERN stack and Next.js, and
                maintain my open-source UI library, Navigate UI.
              </p>
              <p className="text-muted-foreground">
                When I’m not coding, I mentor over 150 fellow students, offer
                career guidance, and explore new fields like web automation to keep my skills fresh.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden border border-primary/20 bg-secondary/10">
            <CardContent className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    AboutData.map((item,idx)=>(
                        <div key={idx}>
                  <h3 className="font-medium text-sm text-muted-foreground">
                    {item.name}
                  </h3>
                  <p className="sm:text-base text-sm">{item.value}</p>
                </div>
                    ))
                }
                

              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </Container>
  );
};

export default About;
