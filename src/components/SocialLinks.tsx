import { FaGithub, FaLinkedin, FaFacebook, FaGoogle, FaXTwitter, FaInstagram } from "react-icons/fa6";

function SocialLinks() {
  const links = [
    { href: "https://github.com/anas-abujaber", icon: <FaGithub size={20} />, color: "bg-black" },
    { href: "https://www.linkedin.com/in/anas-abo-jaber-60b7a0287/", icon: <FaLinkedin size={20} />, color: "bg-[#0077b5]" },
    { href: "mailto:anasadnanabujaber@email.com", icon: <FaGoogle size={20} />, color: "bg-[#DB4437]" },
    { href: "https://x.com/anas_adnan20", icon: <FaXTwitter size={20} />, color: "bg-black" },
    { href: "https://www.facebook.com/anas.abujaber.2025", icon: <FaFacebook size={20} />, color: "bg-[#1877F2]" },
    { href: "https://www.instagram.com/anas.adnan20/#", icon: <FaInstagram size={20} />, color: "bg-[#E1306C]" },
  ];

  return (
    <div className="flex gap-2 mt-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.color} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
