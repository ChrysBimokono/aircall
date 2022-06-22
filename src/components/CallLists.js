import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useEffect } from 'react';
import GetData from "../helpers/GetData";
import ListOfCalls from "./ListOfCalls";


const CallLists = () => {
  const { getCallData, getArchivedData, makeAllCallsArchived } =
    GetData();
  console.log("in list item", getCallData);

  const handleSubmit = (id) => {
    const archived = makeAllCallsArchived(id);
  };
  const renderCalls = getCallData.map((data) => (
    <ListOfCalls
      data={data}
      key={data.id}
      getArchiveCall={getArchivedData}
      handleSubmit={handleSubmit}
    />
  ));

  return (
    <div>
      {/* <button type="submit" onClick={handleSubmit}>Archive all Calls</button> */}
     
      {renderCalls}
    </div>
  );
};

export default CallLists;