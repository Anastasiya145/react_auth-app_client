import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme/theme";
import { AuthProvider } from "./context/AuthProvider";
import CustomSnackbarProvider from "./context/CustomSnackbarProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const theme = getTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

root.render(
  <React.StrictMode>
    <CustomSnackbarProvider>
      <AuthProvider>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
          </ThemeProvider>
        </GoogleOAuthProvider>
      </AuthProvider>
    </CustomSnackbarProvider>
  </React.StrictMode>
);
