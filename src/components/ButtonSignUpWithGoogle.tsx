import { FC } from "react";
import Button from "@mui/material/Button";
import { AiOutlineGoogle } from "react-icons/ai";

const GoogleSignUpButton: FC = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<AiOutlineGoogle style={{ color: "#EA4335" }} />}
      onClick={() => alert("Sign Up with Google")}
      sx={{
        textTransform: "none",
        backgroundColor: (theme) => theme.background.default,
        color: (theme) => theme.palette.primary.main,
        border: (theme) => theme.borderStyle.light,
        boxShadow: (theme) => theme.boxShadow.main,
        fontWeight: "bold",
        padding: "8px 16px",
        borderRadius: 1,
      }}
    >
      Sign Up with Google
    </Button>
  );
};

export default GoogleSignUpButton;
