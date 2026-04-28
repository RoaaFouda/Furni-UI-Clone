import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function HorizontalGrid() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        bgcolor: "#eff2f1",
        display: isMobile ? "block" : "flex",
        padding: isMobile ? "0" : "3rem 7rem",
      }}
    >
      <Grid
        size={isMobile ? 12 : 3}
        sx={{ padding: "1rem", textAlign: isMobile ? "center" : "left" }}
      >
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{
            color: "#000000",
            mb: 2,
            fontWeight: 500
          }}
        >
          Crafted with excellent material.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(99, 98, 97, 0.75)",
            lineHeight: 1.7,
            fontSize: isMobile ? "0.6rem" : "0.8rem",
            mb: 1,
          }}
        >
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </Typography>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#1a1a1a",
            color: "#ffffff",
            fontWeight: 700,
            borderRadius: "999px",
            px: 3.5,
            py: 1,
            my: 1,
            textTransform: "none",
            fontSize: "0.95rem",
          }}
        >
          Explore
        </Button>
      </Grid>

      <Grid size={isMobile ? 12 : 3} sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <img
          src="src/assets/firstChair.PNG"
          alt="White Chair"
          loading="lazy"
          style={{
            width: isMobile ? "50%" : "80%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 700,
            lineHeight: 1.7,
            mt: "auto"
          }}
        >
          Nordic Chair
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 900,
            lineHeight: 1.7,
            mb: 1,
          }}
        >
          $50.00
        </Typography>
      </Grid>
      <Grid size={isMobile ? 12 : 3} sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="src/assets/secondChair.PNG"
          alt="White Chair"
          loading="lazy"
          style={{
            width: isMobile ? "50%" : "80%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 700,
            lineHeight: 1.7,
            mt: "auto"
          }}
        >
          Kruzo Aero Chair
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 900,
            lineHeight: 1.7,
            mb: 1,
          }}
        >
          $78.00
        </Typography>
      </Grid>
      <Grid size={isMobile ? 12 : 3} sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="src/assets/thirdChair.PNG"
          alt="White Chair"
          loading="lazy"
          style={{
            width: isMobile ? "50%" : "80%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 700,
            lineHeight: 1.7,
            mt: "auto"
          }}
        >
          Ergonomic Chair
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000000",
            fontWeight: 900,
            lineHeight: 1.7,
            mb: 1,
          }}
        >
          $43.00
        </Typography>
      </Grid>
    </Grid>
  );
}
