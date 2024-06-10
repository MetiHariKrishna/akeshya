import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import logo from "../Assets/logo.png";
import { Grid, Link } from "@mui/material";
import styles from "@/styles/Header.module.css";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} className={styles.headerText}>
        AKESHYA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) =>
          item === "Contact" ? (
            <Button key={index} variant="contained" className={styles.contact}>
              Contact us
            </Button>
          ) : (
            <Button key={index} color="inherit">
              {item}
            </Button>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#fff",
          minHeight: "30px",
          boxShadow: "none",
          paddingTop: "20px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              paddingLeft: "80px",
              display: { xs: "none", sm: "block", md: "flex" },
              color: "#14279b",
              alignItems: "center",
            }}
          >
            <Image src={logo} alt="logo" width={80} height={80} />
            <Typography className={styles.headerText}>AKESHYA</Typography>
          </Grid>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item, index) =>
              item === "Contact" ? (
                <Button
                  key={index}
                  variant="contained"
                  className={styles.contact}
                >
                  Contact us
                </Button>
              ) : (
                <Link key={index} className={styles.headerLink}>
                  {item}
                </Link>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
