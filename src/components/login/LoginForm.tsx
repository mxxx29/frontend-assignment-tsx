import React from "react";
import {
  Autocomplete,
  Box,
  TextField,
  FormControl,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { LockOutlined, PersonOutline } from "@mui/icons-material";
import { useNavigate } from "react-router";

const dataOrganization = ["SKY", "Gfin", "Astro", "Pro Inside", "KD"];

function LoginForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      organization: null,
      username: "",
      password: "",
    },
    onSubmit: (e) => {
      navigate("/dashboard");
    },
  });
  const handleChangeOrganization = (e: any, newValue: any) => {
    formik.setValues({ ...formik.values, organization: newValue });
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#333B53",
          height: "630px",
          width: "480px",
          borderRadius: "30px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <img
          src="images/login.png"
          alt="toilet_login"
          style={{
            width: "383px",
          }}
        />

        <Box sx={{ pl: 7, pr: 7 }}>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1rem",
              textAlign: "left",
              fontWeight: 600,
              mb: 1,
            }}
          >
            Organization
          </Typography>
          <FormControl
            fullWidth
            margin="dense"
            id="organization"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              },
              "&.MuiFormControl-root .MuiAutocomplete-root .MuiOutlinedInput-root":
                {
                  color: "#ffffff",
                  height: "55px",
                  paddingLeft: "20px !important",
                },
              "&.MuiFormControl-root .MuiTextField-root": {
                backgroundColor: "#0D152D",
                color: "#ffffff",
                borderRadius: "30px",
              },
              "& .MuiAutocomplete-popper .MuiPopper-root": {
                backgroundColor: "#0D152D !important",
              },
            }}
          >
            <Autocomplete
              id="organization"
              fullWidth
              options={dataOrganization}
              value={formik.values.organization}
              onChange={(e, newValue) => {
                handleChangeOrganization(e, newValue);
              }}
              getOptionLabel={(option) => {
                return `${option}` || "";
              }}
              renderOption={(props, option) => {
                return (
                  <Box component="li" {...props} key={option}>
                    {option}
                  </Box>
                );
              }}
              componentsProps={{
                paper: {
                  sx: {
                    backgroundColor: "#0D152D",
                    color: "#ffffff",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    p: 1,
                    mt: "-15px",
                  },
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Select Organization"
                  sx={{
                    "& .MuiIconButton-root ": {
                      color: "#ffffff !important",
                      right: "15px",
                    },
                  }}
                />
              )}
            />
          </FormControl>
          <TextField
            error={Boolean(formik.touched.username && formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            fullWidth
            margin="dense"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            variant="outlined"
            InputLabelProps={{
              shrink: false,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutline sx={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-input": {
                borderRadius: "30px",
                color: "#ffffff",
                backgroundColor: "#0D152D",
              },
              "& input:-internal-autofill-selected": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill:focus": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill:hover": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill:active": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#0D152D",
                paddingLeft: "30px !important",
                borderRadius: "30px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              },
              "& .MuiFormHelperText-root": { textAlign: "right !important" },
            }}
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            fullWidth
            margin="dense"
            placeholder="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            variant="outlined"
            InputLabelProps={{
              shrink: false,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined sx={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-input": {
                borderRadius: "30px",
                color: "#ffffff",
                backgroundColor: "#0D152D",
              },
              "& input:-internal-autofill-selected": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill:focus": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill:hover": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& :-webkit-autofill:active": {
                transition: "background-color 5000s ease-in-out 0s",
                WebkitTextFillColor: "#ffffff !important",
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#0D152D",
                paddingLeft: "30px !important",
                borderRadius: "30px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              },
              "& .MuiFormHelperText-root": { textAlign: "right !important" },
            }}
          />
          <form onSubmit={formik.handleSubmit}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 4,
                height: "50px",
                backgroundColor: "#5a6179",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: "#5a6179",
                  opacity: 0.8,
                },
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginForm;
