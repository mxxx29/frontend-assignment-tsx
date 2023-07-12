import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import IWeatherItems from "../../types/weatherItems.type";
import { array_weather } from "../../__mocks__/Dashboard";

const DashboardWeather = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333B53",
        height: "38vh",
        width: "100%",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Grid container>
        <Grid item md={6} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <img
              src="/images/cloud.png"
              alt="cloud"
              style={{
                width: "100%",
                maxWidth: "20vh",
                height: "auto",
              }}
            />
            <Typography
              sx={{
                fontSize: "4vmin",
                color: "#ffffff",
                lineHeight: 1,
                fontWeight: 600,
                textAlign: "left",
                zIndex: 4,
                ml: -3,
              }}
            >
              34
              {"\u00b0"}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "2vmin",
                color: "#ffffff",
                lineHeight: 1,
                fontWeight: 600,
                textAlign: "left",
              }}
            >
              {array_weather.detail.weather}
            </Typography>
            <Typography
              sx={{
                fontSize: "2vmin",
                color: "#ffffff",
                mt: 2,
                textAlign: "left",
              }}
            >
              H:{array_weather.detail.high} L:{array_weather.detail.low}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5vmin",
                color: "#ffffff",
                mt: 2,
                textAlign: "left",
              }}
            >
              Precipitation: {array_weather.detail.precipitation}
              {"\u0025"}
              <br /> Humidity: {array_weather.detail.humidity}
              {"\u0025"} <br />
              Wind: {array_weather.detail.wind} km/h
            </Typography>
          </Box>
        </Grid>
        {array_weather?.items.map((i: IWeatherItems) => {
          return (
            <Grid item md={2} sm={2} xs={2} key={i.id}>
              <Typography
                sx={{
                  fontSize: "1.5vmin",
                  color: "#ffffff",
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {i.time}
              </Typography>

              <img
                src={i.img}
                alt={i.time}
                style={{
                  width: "100%",
                  maxWidth: "7vh",
                  height: "auto",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1.5vmin",
                  color: "#ffffff",
                  lineHeight: 1,
                  mt: 1,
                }}
              >
                {i.value}
                {"\u00b0"}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DashboardWeather;
