import {
  ArrowRight,
  Award,
  Badge,
  Code2,
  Download,
  Github,
  Linkedin,
  LucideIcon,
  Mail,
} from "lucide-react";




type TSocialLinks = {
    href: string;
    icon : LucideIcon,
    label : string,
    userName:string

}



export const socialLinks:TSocialLinks[] = [
    {
      href: "https://github.com/Mohammadarifcoding",
      icon: Github,
      label: "GitHub",
      userName:"Mohammadarifcoding",
    },
    {
      href: "https://www.linkedin.com/in/mohammad-arif-khan-504b27210/",
      icon: Linkedin,
      label: "LinkedIn",
      userName:"mohammad-arif-khan-504b27210"
    },
    {
      href: "https://codeforces.com/profile/mohammadarifcoding",
      icon: Code2,
      label: "Codeforces",
      userName:"Mohammadarifcoding",
    },
    {
      href: "https://www.hackerrank.com/profile/mohammmadarif",
      icon: Award,
      label: "HackerRank",
      userName:"mohammmadarif",

    },
    {
      href: "mailto:programmermdarif@gmail.com",
      icon: Mail,
      label: "Email",
      userName:"programmermdarif@gmail.com"
    },
  ];

