import { Card, CardContent, Box, Typography } from "@mui/material";

type CertificateCardProps = {
  image: string;
  title: string;
  author: string;
};

function CertificationCard({ image, title, author }: CertificateCardProps) {
  return (
    <Card
      sx={{
        width: 250,
        height: 230,
        borderRadius: 2,
        p: 2,
        boxShadow: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.4s",
        "&:hover": {
          transform: "scale(1.09)",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          height: "60%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Box>
      <CardContent sx={{ textAlign: "center", p: 1 }}>
        <Typography fontWeight={600}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          - {author}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CertificationCard;
