import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button, Box, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  // Save count in localStorage on change
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  // Bezier curve color change (from light to dark)
  const backgroundSpring = useSpring({
    background: `rgb(${200 - count * 5}, ${200 - count * 9}, ${200 - count * 3})`,
    config: { tension: 170, friction: 26 },
  });

  return (
    <animated.div style={{ ...backgroundSpring, minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ textAlign: "center", p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)} sx={{ m: 1 , fontSize:'21px' ,height:'35px'}}>
          +
        </Button>
        <Button variant="contained" color="error" onClick={() => setCount(0)} sx={{ m: 1 }}>
          Reset
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)} sx={{ m: 1 , fontSize:'21px' ,height:'35px'}}>
          -
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
