import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function LandingSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#3f5d50",
        minHeight: isMobile ? "auto" : "calc(100vh - 150px)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        overflow: "hidden",
        padding: isMobile ? "0" : "0 7rem"
      }}
    >
      {/* Text Content */}
      <Box
        sx={{
          flex: isMobile ? "none" : 1,
          px: isMobile ? 3 : 0,
          pt: isMobile ? 5 : 0,
          pb: isMobile ? 4 : 0,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            color: "#ffffff",
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: 480,
          }}
        >
          Modern Interior Design Studio
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(241, 240, 238, 0.75)",
            maxWidth: 420,
            lineHeight: 1.7,
            fontSize: isMobile ? "0.6rem" : "0.8rem",
          }}
        >
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f3bf1e",
              color: "#1a1a1a",
              fontWeight: 700,
              borderRadius: "999px",
              px: 3.5,
              py: 1,
              textTransform: "none",
              fontSize: "0.95rem",
              "&:hover": { bgcolor: "rgb(193, 140, 50)" },
            }}
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#a9a298",
              color: "#a9a298",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: "0.95rem",
              "&:hover": {
                borderColor: "#ffffff",
                color: "#ffffff",
                bgcolor: "transparent",
              },
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>

      {/* Couch Image */}
      <Box
        sx={{
          flex: isMobile ? "none" : 1,
          width: isMobile ? "100%" : "auto",
          mt: isMobile ? 2 : 0,
        }}
      >
        <img
          src="src/assets/main-couch.PNG"
          alt="Modern couch"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}