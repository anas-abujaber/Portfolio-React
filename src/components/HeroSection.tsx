import anasPhoto from "../assets/anasPhoto.png";
import SocialLinks from "./SocialLinks";
import DownloadResumeButton from "./DownloadResumeButton";

function HeroSection() {
  return (
    <section className="bg-[#eaf6fb] py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Anas Abu Jaber</h1>
          <h2 className="text-xl italic mt-1">( Software Engineering )</h2>
          <p className="text-base mt-3">
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

          <div className="flex justify-center md:justify-start mt-4">
            <SocialLinks />
          </div>

          <div className="flex justify-center md:justify-start mt-4">
            <DownloadResumeButton />
          </div>
        </div>

        <div className="flex-1 text-center">
          <img
            src={anasPhoto}
            alt="Anas Abu Jaber"
            className="max-w-lg w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
