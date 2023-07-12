import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IComplaint from "../../types/complaint.type";
import { array_complaint } from "../../__mocks__/Dashboard";

const DashboardComplaint = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {array_complaint?.map((i: IComplaint) => {
          return (
            <Grid item md={3} sm={6} xs={6} xl={3} key={i.id}>
              <Box
                sx={{
                  backgroundColor: "#333B53",
                  height: "21vh",
                  width: "100%",
                  borderRadius: "30px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={i.img}
                  alt={i.name}
                  style={{
                    width: "100%",
                    maxWidth: "9vh",
                    height: "auto",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "2vmin",
                    color: "#ffffff",
                    mt: 3,
                    fontWeight: 600,
                  }}
                >
                  {i.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardComplaint;
