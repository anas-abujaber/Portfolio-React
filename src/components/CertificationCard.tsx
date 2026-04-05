type CertificateCardProps = {
  image: string;
  title: string;
  author: string;
  color: string;
  url: string; 
};

export default function CertificationCard({ image, title, author, color, url }: CertificateCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-[290px] h-[380px] flex flex-col transition-all duration-500 hover:-translate-y-2"
    >
      <div 
        className="absolute inset-0 scale-75 blur-[50px] opacity-5 group-hover:opacity-15 transition-opacity duration-500 rounded-full"
        style={{ backgroundColor: color }}
      />

      <div className="relative w-full h-full bg-white border border-gray-100 rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-500 flex flex-col p-5 overflow-hidden">
        
        <div className="relative w-full h-40 bg-gray-50/50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-4 border border-gray-50">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: color }} />
        </div>

        <div className="flex flex-col flex-grow px-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
            <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
              {author}
            </p>
          </div>
          
          <h3 className="text-gray-800 font-bold text-[15px] leading-snug line-clamp-2 group-hover:text-black transition-colors">
            {title}
          </h3>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-tight">
            Verify Certificate
          </span>
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: color }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}