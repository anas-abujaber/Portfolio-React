import HeroSection from "../../components/HeroSection";
import SkillCard from "../../components/SkillCard";

import FrontendDevelopment from "../../assets/FrontendDevelopment.webp";
import UiUx from "../../assets/UI-UX-Design.png";
import Java from "../../assets/java-developer.png";
import VCCphoto from "../../assets/version_control_scriberia.png";
import ResponsiveWDphoto from "../../assets/future-of-responsive-web-design.png";

import {
  FaCode,
  FaDrawPolygon,
  FaProjectDiagram,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <HeroSection />

      <div className="w-full text-center">
        <h2 className="text-3xl font-extrabold">What I Do?</h2>

        <div className="flex flex-col gap-12 mt-12">
          <SkillCard
            ImageSrc={FrontendDevelopment}
            IconSkill={<FaCode className="text-blue-600 text-4xl" />}
            titleSkill="Frontend Development"
            textSkill={[
              "Building responsive websites using React and Tailwind",
              "Creating accessible and SEO-friendly UIs",
              "Strong skills in HTML, CSS, JavaScript and TypeScript",
            ]}
          />
          <SkillCard
            imageRight
            ImageSrc={UiUx}
            IconSkill={<FaDrawPolygon className="text-blue-600 text-4xl" />}
            titleSkill="UI/UX Design"
            textSkill={[
              "Designing user interfaces that are both attractive and intuitive",
              "Prototyping and wireframing using tools like Figma",
              "Focusing on accessibility and mobile-first design principles",
            ]}
          />
          <SkillCard
            ImageSrc={Java}
            IconSkill={<FaProjectDiagram className="text-blue-600 text-4xl" />}
            titleSkill="Java Development"
            textSkill={[
              "Building backend systems using Java and Spring Boot",
              "Experience with OOP, data structures, and multithreading",
              "Developing REST APIs and integrating databases",
            ]}
          />
          <SkillCard
            imageRight
            ImageSrc={VCCphoto}
            IconSkill={<FaGithub className="text-blue-600 text-4xl" />}
            titleSkill="Version Control & Collaboration"
            textSkill={[
              "Proficient in Git for version control and branching strategies",
              "Collaborating on GitHub and managing pull requests effectively",
              "Following clean code principles and writing readable code",
            ]}
          />
          <SkillCard
            ImageSrc={ResponsiveWDphoto}
            IconSkill={<FaMobileAlt className="text-blue-600 text-4xl" />}
            titleSkill="Responsive Web Design"
            textSkill={[
              "Creating layouts that adapt to various screen sizes",
              "Utilizing Flexbox, Grid, and Tailwind’s responsive system",
              "Ensuring smooth performance on mobile and desktop",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
