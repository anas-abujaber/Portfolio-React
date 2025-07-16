import { Box, Button } from "@mui/material";
import IntroSection from "../../components/IntroSection";
import Motion from "../../components/Motion";
import ProjectPhoto from "../../assets/project.png";
import CardList from "../../components/CardList";
import typeScript from "../../assets/typescript-original.svg";
import javaScript from "../../assets/javascript.svg";
import react from "../../assets/react-original.svg";
import css3 from "../../assets/css3-original.svg";
import html5 from "../../assets/html5-original.svg";

function Projects() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Motion yValue={20}>
          <IntroSection
            title="Projects"
            subTitle="Practical Experience Across Technologies"
            paragraphText="I have developed a diverse range of projects across areas like UI/UX design, artificial intelligence, cybersecurity, and web applications. My projects are driven by real-world problems and built using modern technologies with a strong focus on functionality and user experience."
            image={ProjectPhoto}
          />
        </Motion>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={3}>
        <CardList
          emoji="🛍️"
          title="Modern Ecommerce Store"
          description="A responsive ecommerce store built with React, TypeScript, MUI, and Context API."
          date="2025-06-17"
          icon={
            <Box display="flex" gap={2}>
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={typeScript} alt="TypeScript" width={24} height={24} />
            </Box>
          }
        />
        <CardList
          emoji="🧠"
          title="Mindflow"
          description="A productivity-focused task management app built with React, MUI, and Day.js. Includes scheduling, reports, and AI-enhanced suggestions."
          date="2025-06-02"
          icon={
            <Box display="flex" gap={2}>
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={typeScript} alt="TypeScript" width={24} height={24} />
            </Box>
          }
        />
        <CardList
          emoji="🚩"
          title="Do You Know This Flag?"
          description="A fun flag guessing game built with React and Leaflet. Guess the country by its flag and get map hints with each wrong answer!"
          date="2025-05-29"
          icon={
            <Box display="flex" gap={2}>
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="javaScript" width={24} height={24} />
            </Box>
          }
        />
        <CardList
          emoji="🌍"
          title="Live World Explorer"
          description="Explore a random city in the world with live weather, images, description, and map – all in real-time."
          date="2025-06-20"
          icon={
            <Box display="flex" gap={1}>
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="javaScript" width={24} height={24} />
            </Box>
          }
        />
        <CardList
          emoji="🌦️"
          title="Weather API App"
          description="Real-time weather app with city selector. Displays temperature, min/max, description, and icons using OpenWeatherMap API."
          date="2025-06-22"
          icon={
            <Box display="flex" gap={1}>
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="javaScript" width={24} height={24} />
            </Box>
          }
        />
        <CardList
          emoji="🛒"
          title="SimpleStore API Viewer"
          description="A lightweight product grid using HTML, CSS, and vanilla JS. Fetches items from FakeStoreAPI with clean, responsive UI."
          date="2025-05-01"
          icon={
            <Box display="flex" gap={1}>
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="javaScript" width={24} height={24} />
            </Box>
          }
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => window.open("https://github.com/anasadnan2", "_blank")}
          sx={{
            backgroundColor: "#001E62",
            color: "white",
            "&:hover": {
              backgroundColor: "#00184F",
            },
            padding: "10px 15px",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          More Projects
        </Button>
      </Box>
    </Box>
  );
}

export default Projects;
