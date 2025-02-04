import React from "react";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import { Box } from "@mui/material";
import RichTextEditor from "./components/RichTextEditor";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center" }} >
     <div className="poppins-regular">
     <Navbar/>
      <Counter />
      <div className="flex items-center justify-between w-full">
        <UserForm />
        <RichTextEditor />
      </div>
     </div>
    </Box>
  );
};

export default App;
