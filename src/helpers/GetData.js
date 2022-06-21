import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const GetData =()=>{
    const URL= 'https://aircall-job.herokuapp.com/activities';
    const [getCallData, setGetCallData]= useState([]);
   
    useEffect(()=>{
        axios
        .get(URL, {headers: {"content-Type": "application/json"},})
        .then((res)=>{ setGetCallData(res.data);})
        .catch((err)=> console.log('error', err))
    },[]);


const getArchivedData = (id) => {
  const filterData= getCallData.find( (data) => data.id === id);
  const setCallArchived= {
       is_archived: true,
  };
  if(filterData.is_archived === true){
      setCallArchived.is_archived = false;
  }

  const CallUpdate= Object.assign(filterData, setCallArchived)
  return axios
         .post(` https://aircall-job.herokuapp.com/activities/${filterData.id}`)
         .then( (res) => {
             setGetCallData([...getCallData, CallUpdate]);
         })
         .catch( (err) =>console.log('error',err))
}

  return {
      getCallData,
      getArchivedData
  }
   
}

export default GetData;
