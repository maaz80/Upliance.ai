import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Typography, Snackbar } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isFormDirty, setIsFormDirty] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userData") || "{}");
    if (savedUser.id) {
      setUserData(savedUser);
    } else {
      setUserData({ ...userData, id: uuidv4() }); // Generate new ID if not found
    }
  }, []);

  // Warn user about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsFormDirty(false);
    setOpenSnackbar(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Box sx={{ p: 3, mt: 2, maxWidth: 600, mx: "auto", bgcolor: "white" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        User Data Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" name="name" value={userData.name} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Address" name="address" value={userData.address} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Email" name="email" type="email" value={userData.email} onChange={handleChange} margin="normal" required />
        <TextField fullWidth label="Phone" name="phone" type="tel" value={userData.phone} onChange={handleChange} margin="normal" required />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Save Data
        </Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={2000} message="Data Saved!" onClose={() => setOpenSnackbar(false)} />
    </Box>
  );
};

export default UserForm;
