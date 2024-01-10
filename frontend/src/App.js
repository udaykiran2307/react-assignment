
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import MyShifts from "./Components/MyShift";
import AvailableShifts from "./Components/AvailableShifts";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActions, CardContent} from "@mui/material";


function App() {
  const [shift, setShift] = useState(0);

  const handleButtonClick = (val) => {
    setShift(val);
  };
  return (
    <div className="App">
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
            alignItems:'center'
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
            {shift === 0 ? <MyShifts /> : <AvailableShifts />}
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
