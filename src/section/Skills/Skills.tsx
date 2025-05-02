import { skillsData } from '@/src/data/SkillData';
import AnimatedSection from '@/src/shared/Animation/AnimatedSection';
import SkillCard from '@/src/shared/Card/SkillCard';
import Container from '@/src/shared/Container';
import SectionHeading from '@/src/shared/SectionHeading';
import React from 'react';

const Skills = () => {
    return (
        <Container>
        <AnimatedSection id="skills" className=" scroll-pt-20 ">
          <SectionHeading
          className="sm:text-3xl text-[25px]"
            badge="My Skills"
            title="Technical expertise and capabilities"
            description="Over the years, I’ve worked on both frontend and backend stuff. Why? Because I love building things from start to finish. Not just making buttons look good but also ensuring everything runs smoothly behind the scenes."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={skill.category}
                category={skill.category}
                skills={skill.skills}
                icon={skill.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
          </AnimatedSection>
          </Container>
    );
};

export default Skills;