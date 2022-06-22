
import React from 'react';
import SpecificCallData from '../helpers/SpecificCallData';

import {VscCallOutgoing} from 'react-icons/vsc';
import {VscCallIncoming} from 'react-icons/vsc';
import {FcMissedCall} from 'react-icons/fc';

import '../css/callitems.css';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


const CallData= (props) =>{
    const { callId }= useParams();
   console.log(callId);
    const { singleCall } = SpecificCallData(callId);
    console.log("call details", singleCall);
    const dateFormat= (dataString)=>{
        const options= {year:'numeric', month:'long', day:'numeric'};
        return new Date(dataString).toLocaleDateString(undefined, options)
    };

  return (
    <div>
      {singleCall.from && callId && (
        <div className="calldetails">
          <div className="call_time1">
            {dateFormat(singleCall.created_at)}
            {singleCall.call_type === "missed" && (
              <FcMissedCall/>
            )}
            {singleCall.call_type === "answered" &&
              singleCall.direction === "inbound" && (
                <VscCallIncoming/>
              )}
            {singleCall.direction === "outbound" && (
              < VscCallOutgoing />
            )}
          </div>
          <div>
            <p>From: {singleCall.from}</p>
            <p>To: {singleCall.to}</p>
            <p>Via: {singleCall.via}</p>
            <p>Call Duration: {singleCall.duration}mins</p>
            <p>Type: {singleCall.direction}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CallData;

