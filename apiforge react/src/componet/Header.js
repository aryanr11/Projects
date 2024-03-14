import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Tokenbox from "./Token";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

const pages = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Docs",
    path: "/docs/",
    component: Docs,
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ position: "sticky", top: "0", zIndex: "999" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", padding: "0px 25px" }}
      >
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              color: "primary.dark",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ 
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary.dark",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="j-end"
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "primary.dark" }}
                component={Link}
                to={page.path}
                startIcon={page.icon}
              >
                {page.name}
              </Button>
            ))}
            <Tokenbox />
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="j-end"
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary.dark"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
