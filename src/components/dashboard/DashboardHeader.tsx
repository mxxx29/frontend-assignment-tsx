import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { dateTimeToString } from "../../utils/helper";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const [dateNow, setdateNow] = useState(new Date());
  const onLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setdateNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#333B53",
        height: "10vh",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: 3,
        pl: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/user.png"
          alt="user"
          style={{
            width: "100%",
            maxWidth: "7vh",
            height: "auto",
          }}
        />
        <Box sx={{ ml: 3, width: "fit-content" }}>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              textAlign: "left",
              fontSize: "1.5vmin",
            }}
          >
            Miss Lorem Ipsumlorem
          </Typography>
          <Typography
            sx={{ color: "#ffffff", textAlign: "left", fontSize: "1.4vmin" }}
          >
            Maid : Men floor 6
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            textAlign: "left",
            fontSize: "2vmin",
          }}
        >
          {dateTimeToString(dateNow)}
        </Typography>
      </Box>
      <Button
        sx={{
          backgroundColor: "#1DD1E3",
          width: "12vh",
          height: "4vh",
          borderRadius: "10px",
          color: "#ffffff",
          fontSize: "1.25vmin",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#1DD1E3",
            opacity: 0.9,
          },
        }}
        onClick={onLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default DashboardHeader;
