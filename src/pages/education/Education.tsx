import { Typography } from "@mui/material";
import IntroSection from "../../components/IntroSection";
import DegreeCard from "../../components/DegreeCard";
import university from "../../assets/university.png";
import EducationPhoto from "../../assets/Education.png";
import Coat from "../../assets/Coat_of_arms_of_Palestine.png";
import CiscoCert from "../../assets/Cybersecurity.png";
import uiux from "../../assets/uiux.png";
import Vulnerability from "../../assets/Vulnerability.png";
import Java from "../../assets/Java.png";
import CertificationCard from "../../components/CertificationCard";
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
      image: Java,
      title: "Programming Network Applications in Java",
      author: "Udemy - Cyber Quince",
    },
    {
      image: Vulnerability,
      title: "Vulnerability Identification in Cybersecurity",
      author: "Udemy - Learn Pro",
    },
  ];

  return (
      <div className="flex flex-col items-center gap-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <IntroSection
            title="Education"
            subTitle="Basic Qualification and Certifications"
            image={EducationPhoto}
            isHaveImage={true}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Typography variant="h4" className="font-extrabold text-center mb-8">
            Degrees Received
          </Typography>

          <div className="flex flex-col gap-10">
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
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Typography variant="h4" className="font-extrabold text-center mb-8">
            Certifications
          </Typography>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-10 mb-10">
            {certificates.map((cert, idx) => (
              <CertificationCard
                key={idx}
                image={cert.image}
                title={cert.title}
                author={cert.author}
              />
            ))}
          </div>
        </div>
      </div>
  );
}

export default Education;
