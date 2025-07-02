import { Box, Typography } from "@mui/material";
import HeroSection from "../../comonenets/HeroSection";
import Motion from "../../comonenets/Motion";
import SkillCard from "../../comonenets/SkillCard";

import FrontendDevelopment from "../../assets/FrontendDevelopment.webp";
import UiUx from "../../assets/UI-UX-Design.png";
import Java from "../../assets/java-developer.png";
import VCCphoto from "../../assets/version_control_scriberia.png";
import ResponsiveWDphoto from "../../assets/future-of-responsive-web-design.png";

import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import HubIcon from "@mui/icons-material/Hub";
import DevicesIcon from "@mui/icons-material/Devices";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Motion yValue={20}>
        <HeroSection />
      </Motion>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          What I Do?
        </Typography>
        <Box>
          <SkillCard
            ImageSrc={FrontendDevelopment}
            IconSkill={<CodeIcon sx={{ color: "primary.main" }} />}
            titleSkill="Frontend Development"
            textSkill={[
              "Building responsive websites using React and MUI",
              "Creating accessible and SEO-friendly UIs",
              "Strong skills in HTML, CSS, JavaScript and TypeScript",
            ]}
          />
          <SkillCard
            imgeRigthOrLif={true}
            ImageSrc={UiUx}
            IconSkill={<DesignServicesIcon sx={{ color: "primary.main" }} />}
            titleSkill="UI/UX Design"
            textSkill={[
              "Designing user interfaces that are both attractive and intuitive",
              "Prototyping and wireframing using tools like Figma",
              "Focusing on accessibility and mobile-first design principles",
            ]}
          />
          <SkillCard
            ImageSrc={Java}
            IconSkill={
              <IntegrationInstructionsIcon sx={{ color: "primary.main" }} />
            }
            titleSkill="Java Development"
            textSkill={[
              "Building backend systems using Java and Spring Boot",
              "Experience with OOP, data structures, and multithreading",
              "Developing REST APIs and integrating databases",
            ]}
          />
          <SkillCard
            imgeRigthOrLif={true}
            ImageSrc={VCCphoto}
            IconSkill={<HubIcon sx={{ color: "primary.main" }} />}
            titleSkill="Version Control & Collaboration"
            textSkill={[
              "Proficient in Git for version control and branching strategies",
              "Collaborating on GitHub and managing pull requests effectively",
              "Following clean code principles and writing readable code",
            ]}
          />
          <SkillCard
            ImageSrc={ResponsiveWDphoto}
            IconSkill={<DevicesIcon sx={{ color: "primary.main" }} />}
            titleSkill="Responsive Web Design"
            textSkill={[
              "Creating layouts that adapt to various screen sizes",
              "Utilizing Flexbox, Grid, and MUI’s responsive system",
              "Ensuring smooth performance on mobile and desktop",
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
