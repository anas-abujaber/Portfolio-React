import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

function DownloadResumeButton() {
  return (
    <Button
      variant="contained"
      href="AnasAbuJaber_CV.pdf"
      download
      startIcon={<DownloadIcon />}
      sx={{
        mt: 3,
        backgroundColor: "#0d1b2a",
        color: "#fff",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "1rem",
        px: 3,
        py: 1.2,
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#08121f",
        },
      }}
    >
      📄 Download My Resume
    </Button>
  );
}

export default DownloadResumeButton;
