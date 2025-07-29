type CardListProps = {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  emoji?: string;
};

function CardList({ title, description, date, icon, emoji }: CardListProps) {
  return (
    <div
      className="
        w-[400px] h-[150px] p-6 shadow-md overflow-hidden 
        flex flex-col justify-between gap-2 
        bg-[#A6E1FA] rounded-lg cursor-pointer
        transition-transform duration-400 hover:scale-[1.03]
      "
    >
      <div className="flex items-center gap-2">
        {emoji && (
          <span role="img" className="text-[22px]">
            {emoji}
          </span>
        )}
        <h3 className="font-semibold text-[18px]">{title}</h3>
      </div>
      <p
        className="
          text-[15px] text-[#222] flex-grow overflow-hidden
          line-clamp-3
        "
      >
        {description}
      </p>

      <div className="flex justify-between items-center mt-1">
        <span className="text-sm font-extralight">Created on {date}</span>
        {icon}
      </div>
    </div>
  );
}

export default CardList;
