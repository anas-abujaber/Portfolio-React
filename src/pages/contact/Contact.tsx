import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SocialLinks from "../../comonenets/SocialLinks";
import { useState } from "react";
import Motion from "../../comonenets/Motion";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setOpenDialog(true);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio Contact Form");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);

    window.location.href = `mailto:anasadnanabujaber@gmail.com?subject=${subject}&body=${body}`;
    setOpenDialog(false);
    setEmail("");
    setMessage("");
  };

  return (
    <Motion yValue={20}>
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          px: 2,
          py: 5,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Let's Get in Touch ✉️
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 600, lineHeight: 1.6 }}>
          👋 Whether you're looking to collaborate, have a question, or just
          want to say hello — I'd love to hear from you!
          <br />
          Reach out via social media or drop a message directly through the form
          below.
        </Typography>

        <SocialLinks />

        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
          <Stack spacing={2}>
            <TextField
              label="Your Email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Your Message"
              multiline
              minRows={4}
              fullWidth
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#001E62",
                "&:hover": { backgroundColor: "#00184F" },
                width: "fit-content",
                px: 4,
                py: 1,
                fontWeight: 500,
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle fontWeight="600">Confirm Send</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to send this message to Anas?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={() => setOpenDialog(false)} color="inherit">
              Cancel
            </Button>
            <Button
              onClick={handleSendEmail}
              variant="contained"
              sx={{
                backgroundColor: "#001E62",
                "&:hover": { backgroundColor: "#00184F" },
              }}
            >
              Yes, Send it
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Motion>
  );
}

export default Contact;
