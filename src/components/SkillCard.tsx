import type { ReactNode } from "react";
import { BoltIcon } from "@heroicons/react/24/solid"; 
import Motion from "./Motion";

type SkillCardProps = {
  IconSkill: ReactNode;
  titleSkill: string;
  textSkill: string[];
  ImageSrc: string;
  imgeRigthOrLif?: boolean;
};

function SkillCard({
  IconSkill,
  titleSkill,
  textSkill,
  ImageSrc,
  imgeRigthOrLif = false,
}: SkillCardProps) {
  const ImageBox = (
    <div className="w-full md:w-[400px] flex justify-center text-center">
      <img src={ImageSrc} alt={titleSkill} className="max-w-full rounded-xl" />
    </div>
  );

  const TextBox = (
    <div className="max-w-[500px] text-left">
      <div className="flex items-center mb-2">
        <div className="mr-2">{IconSkill}</div>
        <h3 className="text-lg font-semibold">{titleSkill}</h3>
      </div>

      <ul className="space-y-2">
        {textSkill.map((text, index) => (
          <li key={index} className="flex items-start">
            <span className="w-[30px] flex justify-center mt-[2px]">
              <BoltIcon className="w-5 h-5 text-yellow-400" />
            </span>
            <p className="text-gray-600 text-sm">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="mt-8 px-4 flex flex-col md:flex-row justify-center items-center w-full gap-8 flex-wrap">
      {imgeRigthOrLif ? (
        <>
          <Motion xValue={-50}>{TextBox}</Motion>
          <Motion xValue={50}>{ImageBox}</Motion>
        </>
      ) : (
        <>
          <Motion xValue={-50}>{ImageBox}</Motion>
          <Motion xValue={50}>{TextBox}</Motion>
        </>
      )}
    </div>
  );
}

export default SkillCard;
