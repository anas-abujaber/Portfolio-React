import { Box, Typography } from "@mui/material";
import IntroSection from "../../comonenets/IntroSection";
import Motion from "../../comonenets/Motion";
import DegreeCard from "../../comonenets/DegreeCard";
import university from "../../assets/university.png";
import EducationPhoto from "../../assets/Education.png";
import Coat from "../../assets/Coat_of_arms_of_Palestine.png";
import CertificationCard from "../../comonenets/CertificationCard";
import CiscoCert from "../../assets/Cybersecurity.png";
import uiux from "../../assets/uiux.png";
import Vulnerability from "../../assets/Vulnerability.png";
import Java from "../../assets/Java.png";
function Education() {
  const certificates = [
    {
      image: CiscoCert,
      title: "Introduction to Cybersecurity",
      author: "Cisco",
    },
    {
      image: uiux,
      title: "UI/UX Design",
      author: "Learn More",
    },
    {
      image: Vulnerability,
      title: "Programming Network Applications in Java",
      author: "Udemy - Cyber Quince",
    },
    {
      image: Java,
      title: "Vulnerability Identification in Cybersecurity",
      author: "Udemy - Learn Pro",
    },
  ];

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
      <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        <Motion yValue={20}>
          <IntroSection
            title="Education"
            subTitle="Basic Qualification and Certifications"
            image={EducationPhoto}
            isHaveImage={true}
          />
        </Motion>
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Motion yValue={20}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, textAlign: "center", mb: 2 }}
          >
            Degrees Received
          </Typography>
        </Motion>

        <Motion yValue={-20} xValue={20}>
          <DegreeCard
            title="Palestinian Ministry of Education"
            degree="General Secondary Education Certificate – Scientific Stream"
            date="2021 - 2022"
            description={[
              "Graduated from Khaled Ibn Al-Waleed Secondary School for Boys – Nuseirat.",
              "Achieved a final score of 93.1% in the Scientific Stream.",
              "Built a solid academic foundation in Mathematics, Physics, Chemistry, and Biology.",
              "Demonstrated outstanding academic performance, consistency, and discipline throughout the year.",
            ]}
            website="https://www.mohe.pna.ps/main"
            logo={Coat}
          />
        </Motion>

        <Motion yValue={-20} xValue={20}>
          <DegreeCard
            title="Palestine University – Gaza"
            degree="Bachelor of Software Engineering"
            date="2022 - 2027 (Expected)"
            description={[
              "Pursuing a bachelor's degree in Software Engineering at the Faculty of Software Engineering and Artificial Intelligence.",
              "Gaining practical and theoretical knowledge in software development, system design, algorithms, and emerging AI technologies.",
              "Committed to developing innovative, efficient, and user-centered software solutions.",
              "Actively involved in personal projects and continuous learning beyond the curriculum.",
            ]}
            website="https://www.up.edu.ps/"
            logo={university}
          />
        </Motion>
      </Box>
      <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        <Motion yValue={20}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, textAlign: "center", mb: 2 }}
          >
            Certifications
          </Typography>
        </Motion>
        <Motion yValue={-20} xValue={20}>
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="center"
            alignItems="center"
            mt={5}
            mb={5}
          >
            {certificates.map((cert, idx) => (
              <CertificationCard
                key={idx}
                image={cert.image}
                title={cert.title}
                author={cert.author}
              />
            ))}
          </Box>
        </Motion>
      </Box>
    </Box>
  );
}

export default Education;
