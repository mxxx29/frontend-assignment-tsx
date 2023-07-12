import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ITemp from "../../types/temp.type";
import { array_temp } from "../../__mocks__/Dashboard";

const DashboardTemp = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333B53",
        height: "18vh",
        width: "100%",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Grid container>
        {array_temp?.map((i: ITemp) => {
          return (
            <Grid item md={4} sm={4} xs={4} xl={4} key={i.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2vmin",
                    color: "#ffffff",
                    fontWeight: 600,
                  }}
                >
                  {i.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    mt: 3,
                  }}
                >
                  <img
                    src={i.img}
                    alt={i.name}
                    style={{
                      width: "100%",
                      maxWidth: "7vh",
                      height: "auto",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "5vmin",
                      color: "#ffffff",
                      ml: 1,
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {i.value}
                    {i.symbol}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardTemp;
