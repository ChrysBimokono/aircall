import React, { useState } from "react";

import moment from 'moment';
import { Link, useParams } from "react-router-dom";
import CallData from "./CallData";
import {VscCallOutgoing} from 'react-icons/vsc';
import {VscCallIncoming} from 'react-icons/vsc';
import '../css/callitems.css';


const ListOfCalls = (props) => {
  const { id } = useParams();
  const { data, getArchiveCall, handleSubmit } = props;
  console.log("data inside props", props);

  const dateFormat = (dataString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dataString).toLocaleDateString(undefined, options);
  };

  const eachCall = (id) => {
    console.log("Im here!!");
    return (
      <CallData
        data={data}
        key={data.id}
        from={data.from}
        to={data.to}
        type={data.call_type}
      />
    );
  };

  return (
    <div>
      <div></div>
      <Link
        to={`${data.id}`}
        onClick={() => {
          eachCall(data.id);
        }}
      >
        <div className="call_container">
          <div className="call_time">{dateFormat(data.created_at)}</div>
          <div className="call_content">
            <div className="call_direction">
              <p>
                {(data.direction === "outbound" && (
                  <VscCallOutgoing/>
                )) ||
                  (data.direction === "inbound" && (
                    <VscCallIncoming/>
                  ))}
              </p>
            </div>
            <div className="caller">
              <h4>{data.from}</h4>
              <p>called in {data.via}</p>
              {/* {<CallDetail />} */}
            </div>
            <div className="caller_duration">
              <p>{moment(data.created_at).format("LT")}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListOfCalls;