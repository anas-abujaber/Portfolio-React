import gazaSkyGeeks from "../assets/gaza-sky-geeks.webp";
import university from "../assets/university.webp";
import udemy from "../assets/udemy.webp";
import Cisco from "../assets/Cisco.webp";

type IntroSectionProp = {
  title: string;
  subTitle?: string;
  paragraphText?: string;
  image: string;
  isHaveImage?: boolean;
};
function IntroSection({
  title,
  subTitle,
  image,
  isHaveImage = false,
  paragraphText,
}: IntroSectionProp) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full text-center gap-6 px-4 py-8">
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Education"
          className="max-w-full h-auto rounded-lg"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-bold leading-tight">{title}</h2>

        {subTitle && (
          <h3 className="text-sm md:text-base font-medium text-gray-600 mt-1 leading-snug">
            {subTitle}
          </h3>
        )}

        {paragraphText && (
          <p className="text-xs md:text-sm font-light text-gray-600 mt-3 leading-relaxed">
            {paragraphText}
          </p>
        )}

        {isHaveImage && (
          <div className="flex justify-center flex-wrap gap-6 mt-6">
            <a href="https://gazaskygeeks.com/" target="_blank">
              <img src={gazaSkyGeeks} alt="Gaza Sky Geeks" className="h-10" />
            </a>
            <a href="https://www.up.edu.ps" target="_blank">
              <img src={university} alt="University" className="h-10" />
            </a>
            <a href="https://www.udemy.com/" target="_blank">
              <img src={udemy} alt="Udemy" className="h-10" />
            </a>
            <a
              href="https://www.cisco.com/site/il/en/index.html"
              target="_blank"
            >
              <img src={Cisco} alt="Cisco" className="h-10" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default IntroSection;
