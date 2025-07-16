import { Box, Card, Typography } from "@mui/material";

type CardListProps = {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  emoji?: string;
};

function CardList({ title, description, date, icon, emoji }: CardListProps) {
  return (
    <Card
      sx={{
        width: "400px",
        height: "150px",
        padding: 3,
        boxShadow: 3,
        overflow: "hidden",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.4s",
        backgroundColor: "#A6E1FA",
        "&:hover": {
          transform: "scale(1.03)",
        },
        cursor:"pointer",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {emoji && (
          <Typography sx={{ fontSize: 22 }} role="img">
            {emoji}
          </Typography>
        )}
        <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "18px" }}>
          {title}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: "15px",
          color: "#222",
          flexGrow: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <Typography variant="body2" sx={{ fontWeight: "200" }}>
          Created on {date}
        </Typography>
        {icon}
      </Box>
    </Card>
  );
}

export default CardList;
