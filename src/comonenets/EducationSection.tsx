import { Box, Typography } from "@mui/material";
import gazaSkyGeeks from "../assets/gaza-sky-geeks.webp";
import university from "../assets/university.png";
import udemy from "../assets/udemy.png";
import Education from "../assets/Education.png";
import Cisco from "../assets/Cisco.png";
function EducationSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textAlign: "center",
        gap: 4,
        px: 2,
        py: 4,
      }}
    >
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img
          src={Education}
          alt="Education"
          style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" fontWeight={900}>
          Education
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
          Basic Qualification and Certifications
        </Typography>

        <Box
          mt={3}
          display="flex"
          justifyContent="center"
          gap={3}
          flexWrap="wrap"
        >
          <a href="https://gazaskygeeks.com/" target="_blank">
            <img src={gazaSkyGeeks} alt="Gaza Sky Geeks" height={40} />
          </a>
          <a href="https://www.up.edu.ps" target="_blank">
            <img src={university} alt="University" height={40} />
          </a>
          <a href="https://www.udemy.com/" target="_blank">
            <img src={udemy} alt="Udemy" height={40} />
          </a>
          <a href="https://www.cisco.com/site/il/en/index.html" target="_blank">
            <img src={Cisco} alt="Cisco" height={40} />
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default EducationSection;
