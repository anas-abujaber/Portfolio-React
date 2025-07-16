import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Motion from "./Motion";

type SkillCardProps = {
  IconSkill: React.ReactNode;
  titleSkill: string;
  textSkill: string[];
  ImageSrc: string;
  imgeRigthOrLif?: boolean; // optional: image on right if true
};

function SkillCard({
  IconSkill,
  titleSkill,
  textSkill,
  ImageSrc,
  imgeRigthOrLif = false,
}: SkillCardProps) {
  const ImageBox = (
    <Box
      sx={{
        width: { xs: "100%", md: "400px" },
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={ImageSrc}
        alt={titleSkill}
        style={{
          maxWidth: "100%",
          borderRadius: "12px",
        }}
      />
    </Box>
  );

  const TextBox = (
    <Box sx={{ maxWidth: 500, textAlign: "left" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Box sx={{ mr: 1 }}>{IconSkill}</Box>
        <Typography variant="h6" fontWeight={600}>
          {titleSkill}
        </Typography>
      </Box>

      <List dense>
        {textSkill.map((text, index) => (
          <ListItem key={index} sx={{ pl: 0 }}>
            <ListItemIcon sx={{ minWidth: "30px" }}>
              <FlashOnIcon sx={{ color: "#f5b301" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        mt: 4,
        px: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 4,
        flexWrap: "wrap",
      }}
    >
      {imgeRigthOrLif ? (
        <>
          <Motion xValue={-50}>{TextBox}</Motion>
          <Motion xValue={50}> {ImageBox}</Motion>
        </>
      ) : (
        <>
          <Motion xValue={-50}> {ImageBox}</Motion>
          <Motion xValue={50}> {TextBox}</Motion>
        </>
      )}
    </Box>
  );
}

export default SkillCard;
