import React from "react";
import GetData from "../helpers/GetData";
import ListOfCalls from "./ListOfCalls";

const ArchivedCalls = () => {
  const { getCallData } = GetData();

  const archived = getCallData.filter(
    (archive) => archive.is_archived === true
  );
  const archivedItems = archived.map((data) => (
    <ListOfCalls key={data.id} data={data} />
  ));

  return (
    <div>
      <p>List of Archived Calls</p>
      {archivedItems}
    </div>
  );
};

export default ArchivedCalls;