import React, { useContext, useEffect, useState } from "react";
import HeadAvailableComponent from "../SubComponents/HeadAvailableComponent";
import AvailableShiftEntry from "../SubComponents/AvailableShiftEntry";
import ChooseArea from "../SubComponents/ChooseArea";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ShiftContext } from "../Context/ShiftContext";
import Helsinki from "../Areas/Helsinki";
import Tampere from "../Areas/Tampere";
import Turku from "../Areas/Turku";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const getAvailDataFromShift = (data) => {
  // console.log(typeof(data))
  if(!data || data.length === 0)return {};
  const available = data.filter((e) => e.booked === false);
  const helsinki = available.filter((e) => e.area === "Helsinki");
  const tampere = available.filter((e) => e.area === "Tampere");
  const turku = available.filter((e) => e.area === "Turku");
  return { available, helsinki, tampere, turku };
};

const HLine = () => {
  return (
    <div
      style={{ width: "100%", height: "1px", backgroundColor: "#F1F4F8" }}
    ></div>
  );
};

const AvailableShifts = () => {
  const [availShiftData, setAvailShiftData] = useState([]);
  const { shiftData, setShiftData } = useContext(ShiftContext);
  const data = getAvailDataFromShift(shiftData);
  const [value, setValue] = React.useState(0);
  const [helsinki, setHelsinki] = useState([]);
  const [tampere, setTampere] = useState([]);
  const [turku, setTurku] = useState([]);

  // useEffect(() => {
  //   const { available, helsinki, tampere, turku } =
  //   getAvailDataFromShift(shiftData);
  //   setAvailShiftData(available);
  //   setHelsinki(helsinki);
  //   setTampere(tampere);
  //   setTurku(turku);
  // }, [shiftData]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ width: "100%" }}
        >
          <Tab
            label={`Helsinki (${helsinki.length})`}
            {...a11yProps(0)}
            sx={{ textTransform: "none", fontFamily: "Poppins" }}
          />
          <Tab
            label={`Tampere (${tampere.length})`}
            {...a11yProps(1)}
            sx={{ textTransform: "none", fontFamily: "Poppins" }}
          />
          <Tab
            label={`Turku (${turku.length})`}
            {...a11yProps(2)}
            sx={{ textTransform: "none", fontFamily: "Poppins" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Helsinki data={helsinki}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Tampere data={tampere}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Turku data={turku}/>
      </CustomTabPanel>
    </Box>
  );
};

export default AvailableShifts;
/*
 <ChooseArea/> 
      <HeadAvailableComponent date='Today'/>
      <AvailableShiftEntry/>
      <HLine/>
      <AvailableShiftEntry/>
      <HLine/>
      <HeadAvailableComponent date='Tommorow'/>
       <AvailableShiftEntry/>
       <HLine/>
       <HeadAvailableComponent date='September 21'/>
       <AvailableShiftEntry/>
       <HLine/>
*/
