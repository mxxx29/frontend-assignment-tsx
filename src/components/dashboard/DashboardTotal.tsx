import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ITotal from "../../types/total.type";
import { array_total } from "../../__mocks__/Dashboard";

const DashboardTotal = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333B53",
        minHeight: "18vh",
        height: "100%",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        {array_total?.map((i: ITotal) => {
          return (
            <Grid item md={4} sm={6} xs={12} xl={4} key={i.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "100%",
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
                    justifyContent: "center",
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/images/man.png"
                      alt="man"
                      style={{
                        width: "100%",
                        maxWidth: "7vh",
                        height: "auto",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "5vmin",
                        color: "#1DD1E3",
                        ml: 1,
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      {i.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="/images/wc.png"
                        alt="wc"
                        style={{
                          width: "100%",
                          maxWidth: "7vh",
                          height: "auto",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "3vmin",
                          color: "#1DD1E3",
                          fontWeight: 600,
                          lineHeight: 1,
                          ml: 1,
                        }}
                      >
                        {i.wc_value}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="/images/urinal.png"
                        alt="wc"
                        style={{
                          width: "100%",
                          maxWidth: "7vh",
                          height: "auto",
                          marginLeft: "10px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "3vmin",
                          color: "#1DD1E3",
                          fontWeight: 600,
                          lineHeight: 1,
                        }}
                      >
                        {i.urinal_value}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardTotal;
