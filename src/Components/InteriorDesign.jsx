import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function InteriorDesign() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        bgcolor: "#eff2f1",
        display: isMobile ? "block" : "flex",
        maxHeight: "58rem",
        padding: isMobile ? "3rem 0" : "3rem 0",
      }}
    >
      <Grid
        size={isMobile ? 12 : 7}
        sx={{
          textAlign: isMobile ? "center" : "right",
          display: isMobile ? "none" : "auto",
        }}
      >
        <img
          src="src/assets/hidden-photo.PNG"
          loading="lazy"
          style={{
            borderRadius: "2rem",
            width: "60%",
            height: "auto",
            zIndex: "-1",
          }}
        />
        <img
          src="src/assets/small-photo.PNG"
          loading="lazy"
          style={{
            borderRadius: "2rem",
            width: "26%",
            position: "relative",
            bottom: "25rem",
            margin: "1rem",
          }}
        />
        <img
          src="src/assets/blue-photo.PNG"
          loading="lazy"
          style={{
            borderRadius: "2rem",
            width: "48%",
            position: "relative",
            bottom: "25rem",
          }}
        />
      </Grid>

      <Grid
        size={isMobile ? 12 : 5}
        sx={{ px: isMobile ? 3 : 5, textAlign: isMobile ? "center" : "left" }}
      >
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{
            color: "#000000",
            mb: 2,
            fontWeight: 500,
            maxWidth: isMobile ? "auto" : "27rem",
          }}
        >
          We Help You Make Modern Interior Design
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(99, 98, 97, 0.75)",
            maxWidth: isMobile ? "auto" : "80%",
            lineHeight: 1.7,
            fontSize: isMobile ? "0.6rem" : "0.9rem",
            mb: 2,
          }}
        >
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 1.5,
            mb: 3,
            maxWidth: isMobile ? "auto" : "80%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <RadioButtonUncheckedIcon
              sx={{
                color: "#000000",
                fontSize: "1.1rem",
                mt: "2px",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "rgba(99, 98, 97, 0.85)",
                lineHeight: 1.6,
                fontSize: isMobile ? "0.6rem" : "0.85rem",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <RadioButtonUncheckedIcon
              sx={{
                color: "#000000",
                fontSize: "1.1rem",
                mt: "2px",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "rgba(99, 98, 97, 0.85)",
                lineHeight: 1.6,
                fontSize: isMobile ? "0.6rem" : "0.85rem",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <RadioButtonUncheckedIcon
              sx={{
                color: "#000000",
                fontSize: "1.1rem",
                mt: "2px",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "rgba(99, 98, 97, 0.85)",
                lineHeight: 1.6,
                fontSize: isMobile ? "0.6rem" : "0.85rem",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <RadioButtonUncheckedIcon
              sx={{
                color: "#000000",
                fontSize: "1.1rem",
                mt: "2px",
                flexShrink: 0,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "rgba(99, 98, 97, 0.85)",
                lineHeight: 1.6,
                fontSize: isMobile ? "0.6rem" : "0.85rem",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada.
            </Typography>
          </Box>
        </Box>

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
    </Grid>
  );
}
