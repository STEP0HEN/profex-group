import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Mail, Phone } from "@mui/icons-material";
import "./Navbar.css";
const logo = require("../../assets/images/logo.jpeg");

const pages = ["Gallery"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHomeRedirect = () => {
    navigate("/");
  };

  const handleRedirect = (page) => {
    const route = page.toLowerCase();
    route.includes("gallery") && navigate(`/${route}`);
    handleCloseNavMenu();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <a
          href="tel:+4542941344"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{ padding: "5px" }}
            color="inherit"
          >
            <Phone />
          </IconButton>
          42941344
        </a>
        <a
          href="mailto:info@profexgroup.dk"
          style={{
            color: "black",
            textDecoration: "none",
            marginLeft: "20px",
          }}
        >
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            className="mail-icon"
            // sx={{ width: { xs: "12px", sm: "auto", lg: "auto" } }}
          >
            <Mail />
          </IconButton>
          info@profexgroup.dk
        </a>
      </div>
      <AppBar
        position="static"
        style={{ backgroundColor: "beige", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={logo}
              alt="logo"
              width={100}
              style={{ mixBlendMode: "multiply", cursor: "pointer" }}
              onClick={handleHomeRedirect}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleRedirect(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleRedirect(page)}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
