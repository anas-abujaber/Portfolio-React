import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

type DegreeCardProps = {
  logo: string;
  title: string;
  date: string;
  degree: string;
  description: string[];
  website: string;
};

function DegreeCard({
  logo,
  title,
  date,
  degree,
  description,
  website,
}: DegreeCardProps) {
  return (
    <div
      className="
        mt-4 flex flex-col md:flex-row justify-center items-center w-full gap-4 flex-wrap
      "
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, rotateX: 90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center w-[100px] h-[100px]"
      >
        <img
          src={logo}
          alt={`${title} Logo`}
          className="w-[100px] h-[100px] object-contain rounded-full"
        />
      </motion.div>

      {/* Card Content */}
      <div className="p-4 flex-1 bg-[#e3f2fd] min-w-full md:min-w-0 rounded-lg shadow-md">
        {/* Header */}
        <div
          className="
            bg-[#90caf9] p-3 rounded-md flex justify-between items-center flex-wrap
          "
        >
          <p className="font-extrabold">{title}</p>
          <p className="font-semibold">{date}</p>
        </div>

        <p className="mt-2 font-semibold text-base">{degree}</p>

        {/* Description List */}
        <ul className="mt-2 space-y-1">
          {description.map((text, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaBolt className="text-[#f5b301] mt-1 shrink-0" />
              <p className="text-sm text-gray-600">{text}</p>
            </li>
          ))}
        </ul>

        {/* Visit Website Button */}
        <div className="text-right mt-2">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-1 px-4 py-2 bg-[#90caf9] text-black rounded-md
              hover:scale-105 transition-transform duration-300
            "
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default DegreeCard;
