import * as React from "react";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(() => ({
  boxShadow: "none",
  backgroundColor: "transparent",
}));

function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box className="discprition">
      <Grid className="footer" container>
        <Grid xs={4} alignItems="center">
          <Item sx={{ color: "#0F3156" }}>
            <h2>Logo</h2>
          </Item>
          <Stack
            direction="row"
            justifyContent="flex-center"
            alignItems="flex-start"
            spacing={0}
          >
            <Item sx={{ color: "#0F3156", paddingRight: "10px" }}>Home</Item>
            <Item
              sx={{
                color: "#0F3156",
                paddingLeft: "10px",
                borderLeft: "2px solid #0F3a56",
                borderRadius: "0px",
              }}
            >
              Docs
            </Item>
          </Stack>
        </Grid>
        <Grid xs={4} alignItems="center" sx={{ color: "#0F3156" }}>
          <Item sx={{ color: "#0F3156" }}>
            <h2>Contect</h2>
          </Item>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <Item sx={{ color: "#0F3156" }}>
              <AddIcCallIcon sx={{ fontSize: "18px" }} />
            </Item>
            <Item sx={{ color: "#0F3156" }}>72727272</Item>
          </Stack>
          <Stack
            sx={{ margin: "15px 0px" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <Item sx={{ color: "#0F3156" }}>
              <EmailIcon sx={{ fontSize: "18px" }} />
            </Item>
            <Item sx={{ color: "#0F3156" }}>apiforge.org@gamil.com</Item>
          </Stack>
          <Stack
            sx={{ margin: "15px 0px" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            <Item sx={{ color: "#0F3156" }}>
              <LocationOnIcon sx={{ fontSize: "20px" }} />
            </Item>
            <Item sx={{ color: "#0F3156" }}>Surat, India</Item>
          </Stack>
        </Grid>
        <Grid xs={4}>
          <Item sx={{ color: "#0F3156" }}>
            <h2>Description</h2>
          </Item>
          <Item
            sx={{
              padding: "0px 0px 15px 2px ",
              fontSize: "16px",
              color: "#0F3156",
            }}
          >
            <span>
              Overall, fake APIs serve as a practical tool in software
              development, offering flexibility, control, and efficiency in
              testing and building applications that rely on external data
              sources or services.
            </span>
          </Item>
          <Stack
            direction="row"
            justifyContent="fkex-start"
            alignItems="center"
            spacing={2}
          >
            <Item sx={{ color: "#0F3156" }}>
              <TwitterIcon />
            </Item>
            <Item sx={{ color: "#0F3156" }}>
              <LinkedInIcon />
            </Item>
            <Item sx={{ color: "#0F3156" }}>
              <FacebookIcon />
            </Item>
            <Item sx={{ color: "#0F3156" }}>
              <InstagramIcon />
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
