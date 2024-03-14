import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, TableContainer } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

function Output(props) {
  const allField = props.field || [];
  const [showOutput, setShowOutput] = useState(false);

  const toggleOutput = () => {
    setShowOutput(!showOutput);
  };

  return (
    <>
      <Box>
        <Button variant="outlined" onClick={toggleOutput}>
          Show output
        </Button>
        <TableContainer>
          <Grid
            xs={12}
            className={`dis ${showOutput ? "show" : "hide"}`}
            container
            sx={{
              backgroundColor: "#24233b",
              color: "#FFFFFF",
              borderRadius: "5px",
              padding: "20px 20px",
              margin: "15px 0px",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                borderRadius: "4px",
                fontSize: "13px",
                backgroundColor: "#49465C",
                width: "100%",
                padding: "5px 10px",
                overflow: "hidden",
              }}
            >
              <p>
                {"{"}
                <br />
                {allField.map((el, index) => (
                  <box key={index}>
                    <span className="c3">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {el.key}
                    </span>
                    : <span className="c2"> '{el.value}' </span>,<br />
                    <span></span>
                  </box>
                ))}
                {"}"}
              </p>
            </Grid>
          </Grid>
        </TableContainer>
      </Box>
    </>
  );
}

export default Output;
