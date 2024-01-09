import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MyShifts from "./Components/MyShift";
import AvailableShifts from "./Components/AvailableShifts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActions, CardContent, Typography } from "@mui/material";

function App() {
  const [myShifts, setMyShifts] = useState(0);

  const handleButtonClick = (val) => {
    setMyShifts(val);
  };

  return (
    <div className="App">
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'center'}>
      <Box display={"flex"} justifyContent={"center"}sx={{ minWidth: "50vw" }}>
        
      <Button
        variant="text"
        sx={{ color: "green", textTransform: 'none' }}
        onClick={() => {
          handleButtonClick(0);
        }}
      >
        My shifts
      </Button>
      <Button
        variant="text"
        sx={{ color: "green",textTransform: 'none' }}
        onClick={() => {
          handleButtonClick(1);
        }}
      >
        Available shifts
      </Button>
      </Box>

     
      <Card sx={{ minWidth: "50vw", height: "100vw", padding:'0px' }}>
        <CardContent style={{width:'100%',padding:'0px'}}>
        {myShifts === 0 ? <MyShifts /> : <AvailableShifts />}
        </CardContent>
        <CardActions>
         
        </CardActions>
      </Card>
      </Box>
    </div>
  );
}

export default App;
