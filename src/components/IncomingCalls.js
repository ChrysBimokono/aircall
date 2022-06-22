import React from 'react'


import GetData from '../helpers/GetData';
import ListOfCalls from './ListOfCalls';

const IncomingCalls= () =>{

    const {getCallData}= GetData();
    const Incoming= getCallData.filter(
        (incoming)=> incoming.direction === 'inbound'
    );

    const inbox= Incoming.map((data)=>{
        return <ListOfCalls data={data} key={data.id} />
    })
  return (
    <div>{inbox}</div>
  )
}

export default IncomingCalls;