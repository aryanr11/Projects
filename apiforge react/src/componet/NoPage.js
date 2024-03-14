import { Box, Container } from "@mui/material";
import * as React from "react";

const NoPage = () => {
  return (
    <>
      <Container fixed sx={{ marginTop: "30px" }}>
        <Box>
          <h1 className="c4">404 Page Note Found</h1>
        </Box>
        <Box>
          <h3 className="c1">Go Back To Home Page or Docs</h3>
        </Box>
      </Container>
    </>
  );
};
export default NoPage;
