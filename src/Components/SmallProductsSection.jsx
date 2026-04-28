import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function SmallProductsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#eff2f1",
        padding: isMobile ? "2rem 1.5rem" : "4rem 7rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 4,
      }}
    >

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, flex: 1 }}>
        <Box
          sx={{
            bgcolor: "#dce8e4",
            borderRadius: "1rem",
            minWidth: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="src/assets/firstChair.PNG"
            style={{ width: 80, height: 80, objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, color: "#000", mb: 0.5 }}>
            Nordic Chair
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(99,98,97,0.85)", lineHeight: 1.6, mb: 1 }}>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
          </Typography>
          <Button
            variant="text"
            sx={{ p: 0, textTransform: "none", color: "#000", fontWeight: 500, fontSize: "0.9rem",
              "&:hover": { color: "#c8a96e", bgcolor: "transparent" } }}
          >
            Read More
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, flex: 1 }}>
        <Box
          sx={{
            bgcolor: "#dce8e4",
            borderRadius: "1rem",
            minWidth: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="src/assets/secondChair.PNG"
            style={{ width: 80, height: 80, objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, color: "#000", mb: 0.5 }}>
            Kruzo Aero Chair
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(99,98,97,0.85)", lineHeight: 1.6, mb: 1 }}>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
          </Typography>
          <Button
            variant="text"
            sx={{ p: 0, textTransform: "none", color: "#000", fontWeight: 500, fontSize: "0.9rem",
              "&:hover": { color: "#c8a96e", bgcolor: "transparent" } }}
          >
            Read More
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2, flex: 1 }}>
        <Box
          sx={{
            bgcolor: "#dce8e4",
            borderRadius: "1rem",
            minWidth: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="src/assets/thirdChair.PNG"
            style={{ width: 80, height: 80, objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, color: "#000", mb: 0.5 }}>
            Ergonomic Chair
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(99,98,97,0.85)", lineHeight: 1.6, mb: 1 }}>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
          </Typography>
          <Button
            variant="text"
            sx={{ p: 0, textTransform: "none", color: "#000", fontWeight: 500, fontSize: "0.9rem",
              "&:hover": { color: "#c8a96e", bgcolor: "transparent" } }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}