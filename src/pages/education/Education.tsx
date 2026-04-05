import { Typography } from "@mui/material";
import IntroSection from "../../components/IntroSection";
import DegreeCard from "../../components/DegreeCard";
import CertificationCard from "../../components/CertificationCard";
import university from "../../assets/university.webp";
import EducationPhoto from "../../assets/Education.webp";
import gazaSkyGeeks from "../../assets/gaza-sky-geeks.webp";
import udemy from "../../assets/udemy.webp";
import Cisco from "../../assets/Cisco.webp";
import Coat from "../../assets/Coat_of_arms_of_Palestine.webp";
import CertGSG from "../../assets/certs/gsg-frontend.webp";
import CertAreisto from "../../assets/certs/areisto-fullstack.webp";
import CertJHU from "../../assets/certs/jhu-web-dev.webp";
import CertCloud from "../../assets/certs/cloud-computing..webp";
import CertJS1 from "../../assets/certs/js-advanced-1.webp";
import CertJS2 from "../../assets/certs/js-advanced-2.webp";
import CertUIUX from "../../assets/certs/uiux-design.webp";
import CertCisco from "../../assets/certs/cisco-cyber.webp";
import CertVulnerability from "../../assets/certs/vulnerability-cyber.webp";

function Education() {
  const certificates = [
    {
      image: CertGSG,
      title: "100-hours Code2Career Frontend Path Training",
      author: "Gaza Sky Geeks",
      color: "#2196F3",
      url: "https://drive.google.com/file/d/1xaKn72WJXIsdq-cYaHJbz0GRFMUMPQrd/view?usp=sharing",
    },
    {
      image: CertAreisto,
      title: "Full Stack Node.js - Graduates Empowerment",
      author: "Areisto Software Company",
      color: "#4CAF50",
      url: "https://drive.google.com/file/d/14tZ7GI-vfUz7lcTLTGMHj-T1DK_rrRAQ/view?usp=sharing",
    },
    {
      image: CertJHU,
      title: "HTML, CSS, and Javascript for Web Developers",
      author: "Johns Hopkins University",
      color: "#002D72",
      url: "https://drive.google.com/file/d/1xQy0ZUW7BFLPC0rwnxiudkHdNzQb169F/view?usp=sharing",
    },
    {
      image: CertCloud,
      title: "Building Cloud Computing Solutions at Scale",
      author: "Duke University",
      color: "#0056D2",
      url: "https://drive.google.com/file/d/1srZTd9f9MTM7t8i_rehF5LO7X83PFpSo/view?usp=sharing",
    },
    {
      image: CertJS1,
      title: "Advanced JavaScript 1: Objects & Hoisting",
      author: "Scrimba / Coursera",
      color: "#F7DF1E",
      url: "https://drive.google.com/file/d/1L_nOR04n7Gogrr5Vw7ChExxusTvmCwbj/view?usp=sharing",
    },
    {
      image: CertJS2,
      title: "Advanced JavaScript 2: Async & APIs",
      author: "Scrimba / Coursera",
      color: "#F7DF1E",
      url: "https://drive.google.com/file/d/1A0RU2Q-M5kuWSatTR4-ZYyhDtLZHVSkE/view?usp=sharing",
    },
    {
      image: CertCisco,
      title: "Introduction to Cybersecurity",
      author: "Cisco Networking Academy",
      color: "#00B4E5",
      url: "https://drive.google.com/file/d/1drUT1Pyr9JUp4MeUCtwrCTN66qf3vGid/view?usp=sharing",
    },
    {
      image: CertUIUX,
      title: "User Interface & User Experience Design",
      author: "Learn More",
      color: "#FF5722",
      url: "https://drive.google.com/file/d/1V--I3CF9hWcDmz2iY-utw-DHfamNlRY_/view?usp=sharing",
    },
    {
      image: CertVulnerability,
      title: "Vulnerability Identification In Cyber Security",
      author: "Udemy - Learn Pro",
      color: "#E91E63",
      url: "https://drive.google.com/file/d/11fziXiDtuoH1POVPFzHdXpRFGG-7_TeZ/view?usp=sharing",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <IntroSection
          title="Education"
          subTitle="Basic Qualification and Certifications"
          image={EducationPhoto}
          logos={[
            {
              href: "https://gazaskygeeks.com/",
              src: gazaSkyGeeks,
              alt: "Gaza Sky Geeks",
            },
            {
              href: "https://www.up.edu.ps",
              src: university,
              alt: "University",
            },
            {
              href: "https://www.udemy.com/",
              src: udemy,
              alt: "Udemy",
            },
            {
              href: "https://www.cisco.com/site/il/en/index.html",
              src: Cisco,
              alt: "Cisco",
            },
          ]}
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

      <div className="w-full max-w-7xl mx-auto px-6">
        <Typography
          variant="h3"
          className="font-[900] text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent"
        >
          Professional Certifications
        </Typography>
        <p className="text-center text-gray-500 mb-20 font-medium italic">
          Validated expertise from world-class institutions
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-10 mb-20">
          {certificates.map((cert, idx) => (
            <CertificationCard key={idx} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
