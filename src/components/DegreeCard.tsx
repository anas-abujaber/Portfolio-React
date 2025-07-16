import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { motion } from "framer-motion";

type DegreeCardProps = {
  logo: string;
  title: string;
  date: string;
  degree: string;
  description: string[];
  website: string;
};

function DegreeCard({
  logo,
  title,
  date,
  degree,
  description,
  website,
}: DegreeCardProps) {
  return (
    <Box
      sx={{
        mt: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      <motion.div
        initial={{ opacity: 0, rotateX: 90 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          height: "100px",
        }}
      >
        <img
          src={logo}
          alt={`${title} Logo`}
          style={{
            width: 100,
            height: 100,
            objectFit: "contain",
            borderRadius: "50%",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>

      {/* Card Content */}
      <Card
        sx={{
          p: 2,
          flex: 1,
          backgroundColor: "#e3f2fd",
          minWidth: { xs: "100%", md: "0" },
        }}
      >
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: "#90caf9",
            p: 2,
            borderRadius: 1,
            flexWrap: "wrap",
          }}
        >
          <Typography fontWeight={800}>{title}</Typography>
          <Typography fontWeight={600}>{date}</Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight={600} mt={2}>
          {degree}
        </Typography>

        <List dense>
          {description.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon sx={{ minWidth: "32px" }}>
                <FlashOnIcon sx={{ color: "#f5b301" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" color="text.secondary">
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Box textAlign="right">
          <Button
            variant="contained"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 1, backgroundColor: "#90caf9", color: "black" }}
          >
            Visit Website
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default DegreeCard;
