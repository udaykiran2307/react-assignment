import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MyShifts from "./Components/MyShift";
import AvailableShifts from "./Components/AvailableShifts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActions, CardContent } from "@mui/material";
import { ShiftContext } from "./Context/ShiftContext";
import axios from "axios";

const fetchShiftData = async () => {
  try{
  const { data } = await axios.get("http://127.0.0.1:8080/shifts");
  console.log(data);
  return data;
  }
  catch(e){
    return false;
  }
  
};

const ErrorHandler = ()=>{
  return (<div>
    Error Occured in fetching data 
  </div>)
}



function App() {
  const [shift, setShift] = useState(0);
  const [shiftData, setShiftData] = useState([]);
  const [errorOccured, setErrorOccured] = useState(false);

  // useEffect(() => {
  //   const result = fetchShiftData();
  //   if(!result)setErrorOccured(true);
  //   else setShiftData(result);
  // }, []);

  const handleButtonClick = (val) => {
    setShift(val);
  };
  return (
    <div className="App">
      <ShiftContext.Provider value={{ shiftData, setShiftData }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="card"
        >
          <Box
            className="toggle-btn"
            style={{
              display: "flex",
              justifyContent: "start",
              alignSelf: "start",
              alignItems: "center",
            }}
          >
            <Button
              variant="text"
              sx={{
                color: shift === 0 ? "004FB4" : "#A4B8D3",
                textTransform: "none",
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "1rem",
              }}
              onClick={() => {
                handleButtonClick(0);
              }}
            >
              My shifts
            </Button>
            <Button
              variant="text"
              sx={{
                color: shift === 1 ? "004FB4" : "#A4B8D3",
                textTransform: "none",
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "1rem",
              }}
              onClick={() => {
                handleButtonClick(1);
              }}
            >
              Available shifts
            </Button>
          </Box>
          <Card
            sx={{
              minWidth: "50vw",
              minHeight: "600px",
              padding: "0px",
              marginTop: "1rem",
            }}
            className="card"
          >
           
            <CardContent style={{ width: "100%", padding: "0px" }}>
            {
              errorOccured?<ErrorHandler/>:(shift === 0 ? <MyShifts /> : <AvailableShifts />)
            }
              {}
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      </ShiftContext.Provider>
    </div>
  );
}

export default App;
