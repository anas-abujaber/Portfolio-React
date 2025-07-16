import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { GitHub, LinkedIn, Facebook } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function SocialLinks() {
  return (
    <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
      <IconButton
        href="https://github.com/anasadnan2"
        target="_blank"
        sx={{ bgcolor: "#000", color: "#fff" }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/anas-abo-jaber-60b7a0287/"
        target="_blank"
        sx={{ bgcolor: "#0077b5", color: "#fff" }}
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="mailto:anasadnanabujaber@email.com"
        sx={{ bgcolor: "#DB4437", color: "#fff" }}
      >
        <GoogleIcon />
      </IconButton>
      <IconButton
        href="https://x.com/anas_adnan20"
        target="_blank"
        sx={{ bgcolor: "#000", color: "#fff" }}
      >
        <XIcon />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/anas.abujaber.2025"
        target="_blank"
        sx={{ bgcolor: "#1877F2", color: "#fff" }}
      >
        <Facebook />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/anas.adnan20/#"
        target="_blank"
        sx={{ bgcolor: "#E1306C", color: "#fff" }}
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  );
}

export default SocialLinks;
