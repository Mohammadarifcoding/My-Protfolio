import { Briefcase, Code2, FolderOpen, GraduationCap, Home, LucideIcon, Mail, User, Users } from "lucide-react"

type TNavItems = {
    name: string,
    href: string,
    icon:LucideIcon
    
}


export const navItems:TNavItems[] = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ]


 export const navCategories = [
    {
      title: "Main",
      items: [navItems[0], navItems[1]],
    },
    {
      title: "Professional",
      items: [navItems[2], navItems[3], navItems[4]],
    },
    {
      title: "More",
      items: [navItems[5]],
    },
  ]