type CertificateCardProps = {
  image: string;
  title: string;
  author: string;
};

function CertificationCard({ image, title, author }: CertificateCardProps) {
  return (
    <div
      className="
        w-[250px] h-[230px] rounded-lg p-2 m-1 shadow-md overflow-hidden
        flex flex-col transition-transform duration-400 
        hover:scale-[1.09] bg-white
      "
    >
      <div
        className="
          bg-[#f5f5f5] h-[60%] flex items-center justify-center p-1
        "
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="text-center p-1 flex flex-col">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">- {author}</p>
      </div>
    </div>
  );
}

export default CertificationCard;
