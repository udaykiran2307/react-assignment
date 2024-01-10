import axios from "axios"

const fetchShiftData = async () => {
    try{
    const { data } = await axios.get("http://127.0.0.1:8080/shifts");
    console.log("api call data",data);
    return data;
    }
    catch(e){
      return false;
    }
    
  };
  
 export  {fetchShiftData}