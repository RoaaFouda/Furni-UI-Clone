import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navLinks = [
  "Home",
  "Shop",
  "About Us",
  "Services",
  "Blogs",
  "Contact Us",
];

export default function ResponsiveNavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#3f5d50", padding: isMobile ? "0" : "0 5.5rem"}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, letterSpacing: 1, color: "#ffffff", fontSize:"1.5rem" }}
          >
            Furni
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: "auto" }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  sx={{
                    color: "#ffffff",
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": { bgcolor: "rgba(108, 103, 103, 0.08)" },
                    margin: "0 1.5rem"
                  }}
                >
                  {link}
                </Button>
              ))}


              <Avatar
                sx={{
                  ml: 1,
                  width: 36,
                  height: 36,
                  bgcolor: "#3f5d50",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  margin: "0 0 0 3rem "
                }}
              >
                
              </Avatar>

              <IconButton sx={{ color: "#ffffff", ml: 1 }}>
    
                  <ShoppingCartIcon />
          
              </IconButton>
            </Box>
          )}

          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ color: "#e0e0ff" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ bgcolor: "#3f5d50", height: "100%", pt: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Typography
            variant="h6"
            sx={{ px: 2, pb: 1, color: "#ffffff", fontWeight: 700, letterSpacing: 1 }}
          >
            Furni
          </Typography>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link} sx = {{color: "#ffffff"}} disablePadding>
                <ListItemButton
                  sx={{
                    "&:hover": { bgcolor: "rgba(124,77,255,0.15)" },
                  }}
                >
                  <ListItemText
                    primary={link}
                    primaryTypographyProps={{
                      sx: { color: "#c9c9ff", fontSize: "0.95rem" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <Box sx={{display: "flex"}}>
            
              <Avatar
                sx={{
                  width: 34,
                  height: 34,
                  bgcolor: "#3f5d50",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
             
              </Avatar>

              <IconButton sx={{ color: "#ffffff" }}>
                  <ShoppingCartIcon />
              </IconButton>
              </Box>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}