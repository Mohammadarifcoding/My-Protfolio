import { Code2, Cpu, Globe, Lightbulb, Wrench } from "lucide-react";

export const skillsData = [
    {
        category: "Programming Language",
        icon: <Globe className="h-5 w-5" />,
        skills: [
          { name: "Javascript", level: 80 },
          { name: "Python", level: 45 },
          { name: "C", level: 50 },
          { name: "C++", level: 55 },
          { name: "Typescript", level: 80 },
        ],
      },
    {
      category: "Frontend Development",
      icon: <Code2 className="h-5 w-5" />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux", level: 70 },
        { name: "Framer Motion", level: 50 },
        { name: "Firebase", level: 50 },
      ],
    },
    {
      category: "Backend Development",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "Mongoose", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Zod", level: 90 },
      ],
    },
   
    {
      category: "Tools & DevOps",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Vercel", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Mongodb Compass", level: 60 },
        { name: "Postman", level: 95 },
      ],
    },
  ]