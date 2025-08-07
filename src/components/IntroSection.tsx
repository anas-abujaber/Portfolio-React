import Motion from "./Motion";

type IntroSectionProp = {
  title: string;
  subTitle?: string;
  paragraphText?: string;
  image: string;
  logos?: {
    href: string;
    src: string;
    alt: string;
  }[];
};

function IntroSection({
  title,
  subTitle,
  image,
  paragraphText,
  logos = [],
}: IntroSectionProp) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full gap-8 px-6 py-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <Motion xValue={-40}>
          <img
            src={image}
            alt="Education"
            className="w-full max-w-md rounded-xl shadow-lg object-cover"
          />
        </Motion>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <Motion xValue={40}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>

          {subTitle && (
            <h3 className="mt-2 text-lg font-medium text-gray-600 leading-snug">
              {subTitle}
            </h3>
          )}

          {paragraphText && (
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {paragraphText}
            </p>
          )}

          {logos.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-6">
              {logos.map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 object-contain"
                  />
                </a>
              ))}
            </div>
          )}
        </Motion>
      </div>
    </section>
  );
}

export default IntroSection;
