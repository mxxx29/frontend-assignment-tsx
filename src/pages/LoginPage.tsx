import { Box, Grid } from "@mui/material";
import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginImg from "../components/login/LoginImg";

function LoginPage() {
  return (
    <Box
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        height: "100%",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid
          item
          md={6}
          xl={6}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <LoginImg />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;
