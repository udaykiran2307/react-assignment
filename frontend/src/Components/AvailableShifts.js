import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { fetchShiftData } from "../Utils/apiCalls";
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

const AvailableShifts = () => {
  const [shiftData, setShiftData] = useState([]);
  const [value, setValue] = useState(0);
  const [helsinki, setHelsinki] = useState([]);
  const [tampere, setTampere] = useState([]);
  const [turku, setTurku] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchShiftData();
      setShiftData(data);
      console.log(data);
      const available = data.filter((e) => e.booked === false);
      setHelsinki(available.filter((e) => e.area === "Helsinki"));
      setTampere(available.filter((e) => e.area === "Tampere"));
      setTurku(available.filter((e) => e.area === "Turku"));
    };

    fetchData();
  }, []);

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
        <Helsinki data={helsinki} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Tampere data={tampere} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Turku data={turku} />
      </CustomTabPanel>
    </Box>
  );
};

export default AvailableShifts;
