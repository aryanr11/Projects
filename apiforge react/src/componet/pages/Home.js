import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Img1 from "../photos/7100343.png";
import Img2 from '../photos/social-networking.jpeg'
import Img3 from '../photos/Whats-it-native-1 (1).png'
import Img4 from '../photos/mobile-dev-featured.jpg'
import Img5 from '../photos/Web-Mobile-App.png'
import EastIcon from "@mui/icons-material/East";
import ActionAreaCard from "../cards";
import Button from "@mui/material/Button";
import Codbox from "../Codebox";
import Output from "../Output";
import Materials from "../Materials";
import Blog_img from "../photos/Blog.png";
import Contact_img from "../photos/Contact.png";
import Food_img from "../photos/food.png";
import Gst_img from "../photos/Gst.png";
import Hospital_img from "../photos/Hospital.png";
import Hotel_img from "../photos/Hotel.png";
import Insurance_img from "../photos/Insurance.png";
import Play_list_img from "../photos/play-list.png";
import { TableContainer } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer";

const Item = styled(Paper)(() => ({
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const Home = () => {
  return (
    <>
      <Box fixed>
        <Grid container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: "0px 50px" }}
          >
            <Grid
              item
              xs={6}
              sx={{ margin: { xs: "30px 0px", sm: "30px 0px" } }}
            >
              <Stack
                className="information"
                sx={{ width: { xs: "80%", sm: "100%" } }}
              >
                <Item
                  className="bg-transparent"
                  sx={{
                    color: "#002884",
                    fontWeight: "600",
                    fontSize: { xs: "8px", sm: "30px", md: "18px" },
                    paddingBottom: "10px",
                  }}
                >
                  Now extract, transfer, and load data with
                </Item>
                <Item
                  className="bg-transparent m-0 api"
                  sx={{
                    color: "primary.dark",
                    fontWeight: "600",
                    fontSize: { xs: "17px", sm: "30px", md: "48px" },
                    padding: "20px 0px",
                  }}
                >
                  API FORGE
                </Item>
                <Item
                  sx={{
                    color: "grey",
                    fontSize: { xs: "8px", sm: "12px", md: "16px" },
                  }}
                >
                  Fake APIs can be used in educational settings to teach
                  students how to interact with APIs or demonstrate API-related
                  concepts without requiring access to a live service.
                </Item>
                <Item
                  sx={{
                    color: "#ffff",
                    marginTop: { xs: "10px", sm: "15px", md: "40px" },
                    marginBottom: { sm: "10px", md: "10px" },
                  }}
                >
                  <Button
                    variant="text"
                    className="get-start"
                    sx={{
                      backgroundColor: "#002884",
                      color: "white",
                      border: "1px solid #002884",
                      borderRadius: "5px",
                      fontSize: { xs: "8px", sm: "10px", md: "12px" },
                      padding: { xs: "2px 5px", md: "5px 15px" },
                      gap: "8px",
                    }}
                  >
                    Get start
                    <EastIcon
                      sx={{ fontSize: { xs: "10px", sm: "15px", md: "16px" } }}
                      className="v-align"
                    />
                  </Button>
                </Item>
              </Stack>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                justifyContent: "end",
              }}
            >
              <Stack>
                <img className={"animation"} src={Img1} width="600px" alt="" />
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#f7f7f7" }} className="p-50">
        <Stack
          direction="row"
          justifyContent="center"
          paddingBottom={"25px"}
          alignItems="center"
          spacing={2}
        >
          <Item sx={{ color: "#0F3156", fontSize: { xs: "8px", sm: "18px" } }}>
            {" "}
            <h2>Discover Our API Platform </h2>
          </Item>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "0px 25px" }}
          spacing={2}
        >
          <Grid container overflow={"Hidden"}>
            <Grid xs={12} sm={6} md={3} padding={"15px"}>
              <Item xs={{ margin: "0px 5px" }}>
                <ActionAreaCard number={1} head={"Read"} cimg={Img2} />
              </Item>
            </Grid>
            <Grid xs={12} sm={6} md={3} padding={"15px"}>
              <Item xs={{ margin: "0px 5px" }}>
                <ActionAreaCard
                  number={2}
                  head={"Start"}
                  cimg={Img3}
                  pading={"10px"}
                />
              </Item>
            </Grid>
            <Grid xs={12} sm={6} md={3} padding={"15px"}>
              <Item xs={{ margin: "0px 5px" }}>
                <ActionAreaCard number={3} head={"Docs"} cimg={Img4} />
              </Item>
            </Grid>
            <Grid xs={12} sm={6} md={3} padding={"15px"}>
              <Item xs={{ margin: "0px 5px" }}>
                <ActionAreaCard number={4} head={"Search"} cimg={Img5} />
              </Item>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <TableContainer>
        <Box className={"p-50"}>
          <Box sx={{ padding: "0px 25px" }}>
            <Box sx={{ margin: "30px 0px 0px", color: "#0F3156" }}>
              <h2>TRY &nbsp;IT....!</h2>
            </Box>
            <Codbox />
            <Output />
          </Box>
        </Box>
      </TableContainer>

      <TableContainer sx={{ backgroundColor: "#f7f7f7" }} className="p-50">
        <Box className="p-50">
          <Grid container spacing={2} sx={{ padding: "0px 25px" }}>
            <Stack
              direction="column"
              sx={{ width: "100%" }}
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Item
                sx={{ fontSize: "25px", fontWeight: "600", color: "#0F3156" }}
              >
                Materials
              </Item>
              <Item align="center" sx={{ marginBottom: "30px" }}>
                <Grid container spacing={0}>
                  <Grid item xs={12} sx={{ padding: "0px 0px 50px" }}>
                    <span>
                      A fake API is a simulated interface that mimics the
                      behavior of a real API.
                    </span>
                  </Grid>
                </Grid>
              </Item>
              <Item>
                <Grid container spacing={3} sx={{ padding: "10px" }}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials head="Blog" img={Blog_img} path="/docs/" />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials
                        head="Contect"
                        img={Contact_img}
                        path="/docs/contactbook"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials head="Food" img={Food_img} path="/docs/" />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials
                        head="Gst Invoice"
                        img={Gst_img}
                        path="/docs/"
                      />
                    </Item>
                  </Grid>
                </Grid>
              </Item>
              <Item>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials
                        head="Hospital"
                        img={Hospital_img}
                        path="/docs/"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials head="Hotel" img={Hotel_img} path="/docs/" />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials
                        head="Insurance"
                        img={Insurance_img}
                        path="/docs/"
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Item sx={{ margin: "0px 12px" }}>
                      <Materials
                        head="Play list"
                        img={Play_list_img}
                        path="/docs/"
                      />
                    </Item>
                  </Grid>
                </Grid>
              </Item>
              <Item sx={{ color: "#ffff" }}>
                <Button
                  variant="text"
                  className="get-start"
                  sx={{
                    backgroundColor: "#002884",
                    color: "white",
                    border: "1px solid #002884",
                    borderRadius: "5px",
                    fontSize: { xs: "8px", sm: "10px", md: "12px" },
                    padding: { xs: "2px 5px", md: "5px 15px" },
                    gap: "8px",
                  }}
                  component={Link}
                  to="/docs/"
                >
                  more
                  <EastIcon
                    sx={{ fontSize: { xs: "10px", sm: "15px", md: "16px" } }}
                    className="v-align"
                  />
                </Button>
              </Item>
            </Stack>
          </Grid>
        </Box>
        <Footer />
      </TableContainer>
    </>
  );
};
export default Home;
