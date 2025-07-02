//src/compontes/HeroSection
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import anasPhoto from "../assets/anasPhoto.png";
import SocialLinks from "./SocialLinks";
import DownloadResumeButton from "./DownloadResumeButton";

function HeroSection() {
  return (
    <Box sx={{ backgroundColor: "#eaf6fb", py: 6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          mx: "auto",
          px: 4,
          gap: 6,
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: {
              xs: "center",
              md: "left",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            },
          }}
        >
          <Typography variant="h3" fontWeight={700}>
            Anas Abu Jaber
          </Typography>
          <Typography variant="h6" sx={{ fontStyle: "italic", mt: 1 }}>
            ( Software Engineering )
          </Typography>
          <Typography variant="body1" sx={{ mt: 3 }}>
            I'm a passionate frontend developer focused on building beautiful,
            fast, and user-friendly web applications. I work with modern
            technologies like React, TypeScript, and Material UI, and I enjoy
            blending clean code with good design. I also have experience in Java
            and love working on UI/UX.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: "primary.main" }}>
            Skills: JavaScript · HTML · CSS · React · Java · MUI · UI/UX ·
            Responsive Design
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <SocialLinks />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <DownloadResumeButton />
          </Box>
        </Box>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src={anasPhoto}
            alt="Anas Abu Jaber"
            style={{ maxWidth: "500px", width: "100%", borderRadius: "12px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
