import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaGoogle,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

function SocialLinks() {
  const links = [
    {
      href: "https://github.com/anas-abujaber",
      icon: <FaGithub className="text-[16px] md:text-[20px]" />,
      color: "bg-black",
    },
    {
      href: "https://www.linkedin.com/in/anas-abo-jaber-60b7a0287/",
      icon: <FaLinkedin className="text-[16px] md:text-[20px]" />,
      color: "bg-[#0077b5]",
    },
    {
      href: "mailto:anasadnanabujaber@email.com",
      icon: <FaGoogle className="text-[16px] md:text-[20px]" />,
      color: "bg-[#DB4437]",
    },
    {
      href: "https://x.com/anas_adnan20",
      icon: <FaXTwitter className="text-[16px] md:text-[20px]" />,
      color: "bg-black",
    },
    {
      href: "https://www.facebook.com/anas.abujaber.2025",
      icon: <FaFacebook className="text-[16px] md:text-[20px]" />,
      color: "bg-[#1877F2]",
    },
    {
      href: "https://www.instagram.com/anas.adnan20/#",
      icon: <FaInstagram className="text-[16px] md:text-[20px]" />,
      color: "bg-[#E1306C]",
    },
  ];

  return (
    <div className="flex gap-2 mt-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.color} text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
