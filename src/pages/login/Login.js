import React, { useCallback, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/actions/login-action";

const theme = createTheme();

export default function Login() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.login);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = useCallback(
    (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
    [form]
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.email === "test@gmail.com" && form.password === "12345") {
      const loggedUser = {
        name: "Annette",
        state: "Kerala",
        country: "India",
      };
      const token = "bfebf8437tr2034r3y2hf34r";
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
      dispatch(setLogin({ loggedUser, token }));
      nav("/");
    } else {
      alert("Login error");
    }
  };

  return isLoggedIn ? (
    <Navigate to="/" />
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <fieldset
              margin="0"
              background-color="#fff"
              border="1"
              border-radius="5px"
              box-shadow="0 1px 3px rgba(0,0,0,0.2)"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={form.email}
                onChange={changeHandler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={form.password}
                autoComplete="current-password"
                onChange={changeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>{" "}
            </fieldset>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
