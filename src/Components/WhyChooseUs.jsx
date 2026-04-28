import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import Box from "@mui/material/Box";

export default function WhyChooseUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      sx={{
        bgcolor: "#eff2f1",
        display: isMobile ? "block" : "flex",
        padding: isMobile ? "3rem 0" : "5rem 7rem",
      }}
    >
      <Grid
        size={isMobile ? 12 : 7}
        sx={{ textAlign: isMobile ? "center" : "left" }}
      >
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{
            color: "#000000",
            mb: 2,
            fontWeight: 500,
          }}
        >
          Why Choose Us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(99, 98, 97, 0.75)",
            maxWidth: isMobile ? "auto" : "80%",
            lineHeight: 1.7,
            fontSize: isMobile ? "0.6rem" : "0.9rem",
            mb: 1,
          }}
        >
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 3,
            mt: 3,
            marginRight: isMobile ? 0 : 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <LocalShippingOutlinedIcon
              fontSize="large"
              sx={{ display: isMobile ? "none" : "auto", mb: 2 }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#000000",
                mb: 1,
                fontWeight: 500,
              }}
            >
              Fast & Free Shipping
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(99, 98, 97, 0.75)",
                lineHeight: 1.7,
                fontSize: isMobile ? "0.6rem" : "0.9rem",
                mb: 1,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ShoppingBagOutlinedIcon
              fontSize="large"
              sx={{ display: isMobile ? "none" : "auto", mb: 2 }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#000000",
                mb: 1,
                fontWeight: 500,
              }}
            >
              Easy to Shop
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(99, 98, 97, 0.75)",
                lineHeight: 1.7,
                fontSize: isMobile ? "0.6rem" : "0.9rem",
                mb: 1,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 3,
            mt: 3,
            marginRight: isMobile ? 0 : 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AdjustOutlinedIcon
              fontSize="large"
              sx={{ display: isMobile ? "none" : "auto", mb: 2 }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#000000",
                mb: 1,
                fontWeight: 500,
              }}
            >
              24/7 Support
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(99, 98, 97, 0.75)",
                lineHeight: 1.7,
                fontSize: isMobile ? "0.6rem" : "0.9rem",
                mb: 1,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <SyncOutlinedIcon
              fontSize="large"
              sx={{ display: isMobile ? "none" : "auto", mb: 2 }}
            />

            <Typography
              variant="body1"
              sx={{
                color: "#000000",
                mb: 1,
                fontWeight: 500,
              }}
            >
              Hassle Free Returns
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(99, 98, 97, 0.75)",
                lineHeight: 1.7,
                fontSize: isMobile ? "0.6rem" : "0.9rem",
                mb: 1,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid
        size={isMobile ? 12 : 5}
        sx={{ textAlign: isMobile ? "center" : "right" }}
      >
        <img
          src="src/assets/whychooseus-photo.PNG"
          alt="White Chair"
          loading="lazy"
          style={{
            borderRadius: "2rem",
            width: "90%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
}
