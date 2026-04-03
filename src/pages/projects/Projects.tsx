import IntroSection from "../../components/IntroSection";
import ProjectPhoto from "../../assets/project.webp";
import CardList from "../../components/CardList";
import typeScript from "../../assets/typescript-original.svg";
import javaScript from "../../assets/javascript.svg";
import react from "../../assets/react-original.svg";
import css3 from "../../assets/css3-original.svg";
import html5 from "../../assets/html5-original.svg";

function Projects() {
  return (
    <div className="flex flex-col gap-12 items-center px-4">
      <div className="max-w-6xl w-full mx-auto">
        <IntroSection
          title="Projects"
          subTitle="Practical Experience Across Technologies"
          paragraphText="I have developed a diverse range of projects across areas like UI/UX design, artificial intelligence, cybersecurity, and web applications. My projects are driven by real-world problems and built using modern technologies with a strong focus on functionality and user experience."
          image={ProjectPhoto}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <CardList
          emoji="💰"
          title="Personal Finance & Bill Splitter"
          description="A comprehensive Next.js 16 dashboard for managing personal finances, tracking expenses with AI-powered insights, and splitting bills among groups."
          date="2026-03-15"
          icon={
            <div className="flex gap-2">
              <img
                src={react}
                alt="Next.js"
                width={24}
                height={24}
                title="Next.js / React 19"
              />
              <img
                src={typeScript}
                alt="TypeScript"
                width={24}
                height={24}
                title="TypeScript"
              />
              <img
                src={html5}
                alt="Tailwind"
                width={24}
                height={24}
                title="Tailwind CSS"
              />
            </div>
          }
        />
        <CardList
          emoji="🏧"
          title="Smart ATM - Digital Wallet"
          description="A modern electronic wallet simulation featuring secure login, transaction tracking, real-time currency watchlist, and optimized performance using Code Splitting."
          date="2025-11-20"
          icon={
            <div className="flex gap-2">
              <img
                src={react}
                alt="React"
                width={24}
                height={24}
                title="React + Context API"
              />
              <img
                src={javaScript}
                alt="JavaScript"
                width={24}
                height={24}
                title="JavaScript"
              />
              <img
                src={html5}
                alt="Tailwind"
                width={24}
                height={24}
                title="Tailwind CSS"
              />
            </div>
          }
        />
        <CardList
          emoji="🕌"
          title="Prayer Times Web App"
          description="A high-performance prayer time tracker using Aladhan API, featuring dynamic cascading selects (Continent > Country > City) with advanced caching and a live HH:MM:SS countdown."
          date="2025-10-15"
          icon={
            <div className="flex gap-2">
              <img
                src={javaScript}
                alt="JavaScript"
                width={24}
                height={24}
                title="ES6 Modules"
              />
              <img
                src={html5}
                alt="HTML5"
                width={24}
                height={24}
                title="Semantic HTML"
              />
              <img
                src={css3}
                alt="CSS3"
                width={24}
                height={24}
                title="Responsive Design"
              />
            </div>
          }
        />
        <CardList
          emoji="🛍️"
          title="Modern Ecommerce Store"
          description="A responsive ecommerce store built with React, TypeScript, MUI, and Context API."
          date="2025-06-17"
          icon={
            <div className="flex gap-2">
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={typeScript} alt="TypeScript" width={24} height={24} />
            </div>
          }
        />
        <CardList
          emoji="🧠"
          title="Mindflow"
          description="A productivity-focused task management app built with React, MUI, and Day.js. Includes scheduling, reports, and AI-enhanced suggestions."
          date="2025-06-02"
          icon={
            <div className="flex gap-2">
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={typeScript} alt="TypeScript" width={24} height={24} />
            </div>
          }
        />
        <CardList
          emoji="🚩"
          title="Do You Know This Flag?"
          description="A fun flag guessing game built with React and Leaflet. Guess the country by its flag and get map hints with each wrong answer!"
          date="2025-05-29"
          icon={
            <div className="flex gap-2">
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="JavaScript" width={24} height={24} />
            </div>
          }
        />
        <CardList
          emoji="🌍"
          title="Live World Explorer"
          description="Explore a random city in the world with live weather, images, description, and map – all in real-time."
          date="2025-06-20"
          icon={
            <div className="flex gap-1">
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="JavaScript" width={24} height={24} />
            </div>
          }
        />
        <CardList
          emoji="🌦️"
          title="Weather API App"
          description="Real-time weather app with city selector. Displays temperature, min/max, description, and icons using OpenWeatherMap API."
          date="2025-06-22"
          icon={
            <div className="flex gap-1">
              <img src={react} alt="React" width={24} height={24} />
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="JavaScript" width={24} height={24} />
            </div>
          }
        />
        <CardList
          emoji="🛒"
          title="SimpleStore API Viewer"
          description="A lightweight product grid using HTML, CSS, and vanilla JS. Fetches items from FakeStoreAPI with clean, responsive UI."
          date="2025-05-01"
          icon={
            <div className="flex gap-1">
              <img src={html5} alt="HTML" width={24} height={24} />
              <img src={css3} alt="CSS" width={24} height={24} />
              <img src={javaScript} alt="JavaScript" width={24} height={24} />
            </div>
          }
        />
      </div>

      <div className="mb-[40px]">
        <button
          onClick={() =>
            window.open("https://github.com/anas-abujaber", "_blank")
          }
          className="bg-[#001E62] hover:bg-[#00184F] text-white font-medium px-5 py-2 rounded-lg transition"
        >
          More Projects
        </button>
      </div>
    </div>
  );
}

export default Projects;
