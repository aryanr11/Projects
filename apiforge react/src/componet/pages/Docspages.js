import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Codbox from "../Codebox";
import CodeboxPost from "../Codeboxpost"; // Make sure the path is correct
import Output from "../Output";
import OutputMulti from "../OutputMulti";
import APIContext from "../../APIContext";
import { useContext } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const Docspages = () => {
  console.log("aryan");
  const { Data, selectedItem } = useContext(APIContext);
  const [rel, setRel] = React.useState(Data.Blog);
  console.log(selectedItem);
  React.useEffect(() => {
    if (selectedItem === "Blog") {
      setRel(Data.Blog);
    } else if (selectedItem === "Contact Book") {
      setRel(Data.Contactbook);
    } else if (selectedItem === "Food") {
      setRel(Data.Food);
    } else if (selectedItem === "GST Invoice") {
      setRel(Data.GST);
    } else if (selectedItem === "Hospital") {
      setRel(Data.Hospital);
    } else if (selectedItem === "Hotel") {
      setRel(Data.Hotel);
    } else if (selectedItem === "Insurance") {
      setRel(Data.Insurance);
    } else if (selectedItem === "MailId Sever") {
      setRel(Data.Mailid);
    } else if (selectedItem === "Mobile") {
      setRel(Data.Mobile);
    } else if (selectedItem === "Movie") {
      setRel(Data.Movie);
    } else if (selectedItem === "Password Saver") {
      setRel(Data.Password);
    } else if (selectedItem === "Note") {
      setRel(Data.Note);
    } else if (selectedItem === "Payment") {
      setRel(Data.Payment);
    } else if (selectedItem === "Playlist") {
      setRel(Data.Playlist);
    } else if (selectedItem === "Sports") {
      setRel(Data.Sports);
    } else {
      setRel(Data.Blog);
    }
  }, [Data, selectedItem]);
  return (
    <>
      <Container fixed sx={{ marginTop: "30px" }}>
        <Box>
          <Grid container spacing={2}>
            <Stack
              direction="column"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Grid item xs={8}>
                <Item sx={{ color: "#0F3156" }}>
                  <h2 color="#0F3156">{rel.name}</h2>
                </Item>
                <Item>{rel.describe}</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <hr className="hr" color="#8ec0f5" />
                  <Item
                    sx={{
                      color: "#0F3156",
                      display: "flex",
                      margin: "25px 0px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <span color="#0F3156">Get All Data</span>
                    <button className="method b-lightBlue">GET</button>
                  </Item>
                </Item>
                <Codbox api_c={rel.link1} />
                <OutputMulti field={rel.field} />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <hr className="hr" color="#8ec0f5" />
                  <Item
                    sx={{
                      color: "#0F3156",
                      display: "flex",
                      margin: "25px 0px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <span color="#0F3156">Add Data</span>
                    <button className="method b-lightGreen">POST</button>
                  </Item>
                </Item>
                <CodeboxPost api_c={rel.link2} />
                <Output field={rel.field} />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <hr className="hr" color="#8ec0f5" />
                  <Item
                    sx={{
                      color: "#0F3156",
                      display: "flex",
                      margin: "25px 0px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <span color="#0F3156">Delete Data</span>
                    <button className="method b-danger">DELETE</button>
                  </Item>
                </Item>
                <Codbox api_c={rel.link3} />
                <Output field={rel.field} />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <hr className="hr" color="#8ec0f5" />
                  <Item
                    sx={{
                      color: "#0F3156",
                      display: "flex",
                      margin: "25px 0px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <span color="#0F3156">Update Data</span>
                    <button className="method b-lightYellow">PUT</button>
                  </Item>
                </Item>
                <CodeboxPost api_c={rel.link4} />
                <Output field={rel.field} />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <hr className="hr" color="#8ec0f5" />
                  <Item
                    sx={{
                      color: "#0F3156",
                      display: "flex",
                      margin: "25px 0px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <span color="#0F3156">Find Data By Search</span>
                    <button className="method b-lightBlue">GET</button>
                  </Item>
                </Item>
                <Codbox api_c={rel.link5} />
                <OutputMulti field={rel.field} />
              </Grid>
              <Grid item xs={12}>
                <Item>
                  <hr className="hr" color="#8ec0f5" />
                  <Item
                    sx={{
                      color: "#0F3156",
                      display: "flex",
                      margin: "25px 0px",
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <span color="#0F3156">Find Data By Id</span>
                    <button className="method b-lightBlue">GET</button>
                  </Item>
                </Item>
                <Codbox api_c={rel.link6} />
                <Output field={rel.field} />
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Docspages;
