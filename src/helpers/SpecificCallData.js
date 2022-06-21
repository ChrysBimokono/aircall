import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SpecificCallData= (id) => {
    const [specificCall, setSpecificCall]= useState([]);

    useEffect (()=>{
        axios
        .get(`https://aircall-job.herokuapp.com/activities/${id}`)
        .then((res)=> {
            setSpecificCall(res.data)
        })
        .catch((err)=> console.log('error',err))
    },[id])


return {
    specificCall,
};

}

export default SpecificCallData;