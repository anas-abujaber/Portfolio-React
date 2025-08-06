import anasPhoto from "../assets/anas-photo.webp";
import SocialLinks from "./SocialLinks";
import DownloadResumeButton from "./DownloadResumeButton";

function HeroSection() {
  return (
    <section className="bg-[#eaf6fb] py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-6">
        <div className="flex-[3] flex flex-col gap-4  md:text-left">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold md:text-4xl">Anas Abu Jaber</h1>
            <h2 className="text-base italic font-medium md:text-xl">
              ( Software Engineering )
            </h2>
          </div>

          <p className="mt-3 text-sm md:text-xl">
            I'm a passionate frontend developer focused on building beautiful,
            fast, and user-friendly web applications. I work with modern
            technologies like React, TypeScript, and Material UI, and I enjoy
            blending clean code with good design. I also have experience in Java
            and love working on UI/UX.
          </p>

          <p className="text-sm text-blue-600 mt-2 cursor-pointer">
            Skills: JavaScript · HTML · CSS · React · Java · MUI · UI/UX ·
            Responsive Design
          </p>

          <div className="flex justify-center md:justify-start md:mt-[10px] items-center">
            <SocialLinks />
          </div>

          <div className="flex justify-center md:justify-start md:mt-[10px]  items-center">
            <DownloadResumeButton />
          </div>
        </div>

        <div className="hidden md:flex flex-[2] justify-center">
          <img
            src={anasPhoto}
            alt="Anas Abu Jaber"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
