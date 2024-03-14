import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import { TableContainer } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
}));

const CodeboxPost = (props) => {
  const allFild = props.filed || [];

  return (
    <Box>
      <TableContainer fixed>
        <Grid
          xs={12}
          container
          sx={{
            backgroundColor: "#24233b",
            color: "#FFFFFF",
            borderRadius: "5px",
            padding: "20px 20px",
            margin: "0px 0px 15px",
          }}
        >
          <Grid xs={12} sx={{ textAlign: "left", marginBottom: "15px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Stack spacing={0.5} direction="row">
                <Item className="red circle2"></Item>
                <Item className="green circle2"></Item>
                <Item className="yellow circle2"></Item>
              </Stack>
              <Item sx={{ color: "#FFFFFF", paddingLeft: "10px" }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ fontSize: { xs: "10px", md: "12px" } }}
                >
                  Javascript <JavascriptIcon sx={{ color: "#ffbc06" }} />
                </Button>
                <Button
                  sx={{ backgroundColor: "transparent", marginLeft: "5px" }}
                >
                  <ContentCopyIcon
                    sx={{
                      margin: "0px 10px",
                      verticalAlign: "center",
                      fontSize: { xs: "20px" },
                    }}
                  />
                </Button>
              </Item>
            </Stack>
          </Grid>
          <Grid
            sx={{
              borderRadius: "4px",
              fontSize: "13.5px",
              backgroundColor: "#49465cbc",
              width: "100%",
              padding: "5px 10px",
            }}
          >
            <p>
              <span className="c1">fetch</span>(
              <span className="c2"> '{props.api_c}' </span>
              <span>, {"{"}</span>
              <br />
              <span className="c3"> &nbsp;&nbsp;&nbsp; headers</span>: {"{"}
              <span className="c2"> 'token' </span>:
              <span className="c2"> &nbsp;'Enter Your Token' </span> {"} "}
              <br />
              <span className="c3"> &nbsp;&nbsp;&nbsp; body</span>: {"{"}
              <span className="c5"> JSON</span>.
              <span className="c1">stringify</span>( {"{ "}
              <br />
              {allFild.map((el, index) => (
                <box key={index}>
                  <span className="c3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {el.key}
                  </span>
                  : <span className="c2"> '{el.value}' </span>,<br />
                  <span></span>
                </box>
              ))}
              &nbsp;&nbsp; {"}"})
              <br /> {"}"})
              <br /> .<span className="c1">then</span>(
              <span>
                <span> res</span> =&gt;&nbsp;
              </span>
              res.<span className="c1">json</span>() )
              <br /> .<span className="c1">then</span>(
              <span className="c4"> console</span>.<span>log</span> );
            </p>
          </Grid>
        </Grid>
      </TableContainer>
    </Box>
  );
};

export default CodeboxPost;
