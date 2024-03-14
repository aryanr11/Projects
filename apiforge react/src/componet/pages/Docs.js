import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import MasksIcon from "@mui/icons-material/Masks";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PasswordIcon from "@mui/icons-material/Password";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PaidIcon from "@mui/icons-material/Paid";
import Docspages from "./Docspages";
import { useContext } from "react";
import APIContext from "../../APIContext";

let base_url = [
  {
    name: "Blog",
    icone: CollectionsBookmarkIcon,
  },
  {
    name: "Contact Book",
    icone: ContactPageIcon,
  },
  { name: "Food", icone: FastfoodIcon },
  {
    name: "GST Invoice",
    icone: ReceiptIcon,
  },
  {
    name: "Hospital",
    icone: LocalHospitalIcon,
  },
  { name: "Hotel", icone: HotelIcon },
  {
    name: "Insurance",
    icone: MasksIcon,
  },
  {
    name: "MailId Sever",
    icone: ContactMailIcon,
  },
  {
    name: "Mobile",
    icone: StayCurrentPortraitIcon,
  },
  {
    name: "Movie",
    icone: MovieCreationIcon,
  },
  { name: "Note", icone: EventNoteIcon },
  {
    name: "Password Saver",
    icone: PasswordIcon,
  },
  {
    name: "Payment",
    icone: PaidIcon,
  },
  {
    name: "Playlist",
    icone: PlaylistAddIcon,
  },
  {
    name: "Sports",
    icone: SportsEsportsIcon,
  },
];

function Docs(props) {
  const { window } = props;
  const [drawerWidth, setDrawerWidth] = React.useState(250);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [showOutput, setShowOutput] = React.useState("showMenu");
  const allData = useContext(APIContext);

  const toggleOutput = () => {
    if (drawerWidth === 250) {
      setDrawerWidth(90);
      setShowOutput("hideMenu");
    } else {
      setDrawerWidth(250);
      setShowOutput("showMenu");
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleListItemClick = (name) => {
    allData.setSelectedItem(name);
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ minHeight: "78px", height: "78px" }} />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleOutput} sx={{ minHeight: "48px" }}>
            <ListItemIcon className="c-black">
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" className={showOutput}></ListItemText>
          </ListItemButton>
        </ListItem>
        {base_url.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              sx={{
                minHeight: "48px",
              }}
              onClick={() => handleListItemClick(text.name)} // Fix applied here
            >
              <ListItemIcon className="c-black">
                <text.icone />
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                className={showOutput}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Toolbar
          sx={{
            position: "fixed",
            background: "white",
            width: "100%",
            display: { sm: "none" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: 1 }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography paragraph>
            <Docspages />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Docs;
