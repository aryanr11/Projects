import React from "react";
import Box from "@mui/material/Box";
import { Link, ListItemButton } from "@mui/material";

function Materials(props) {
  return (
    <>
      <Box className="Api-c">
        <Box className="Api-c-details" align="center">
          <p>
            <img src={props.img} width={"50%"} alt="" className="scale" />
          </p>
          <p className="text-body">{props.head}</p>
        </Box>
        <button className="Api-c-button">
          <ListItemButton
            sx={{ padding: "0px 0px", justifyContent: "center" }}
            component={Link}
            to={props.path}
          >
            More info
          </ListItemButton>
        </button>
      </Box>
    </>
  );
}

export default Materials;
