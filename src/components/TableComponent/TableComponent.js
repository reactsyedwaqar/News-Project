import React, { Fragment } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleRow from "./SingleRow";
const TableComponent = (props) => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <Table striped hover responsive="md" cellSpacing={5} cellPadding={5}>
      <thead>
        <tr
          style={{
            backgroundColor: "#ff742b",
            color: "#fff",
            alignItems: "flex-start",
            height: 20,
            fontSize: 16,
            textAlign: "left",
            whiteSpace: "normal",
          }}
        >
          <th style={{ maxWidth: "20%" }}>Comments</th>
          <th style={{ maxWidth: "20%" }}>Votes</th>
          <th style={{ maxWidth: "20%" }}>UpVote</th>
          <th style={{ maxWidth: "80%" }}>News Details</th>
        </tr>
      </thead>
      <tbody>
        {props.loader ? (
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        ) : props.data !== null ? (
          props.data.map((singledata, signleindex) => {
            return (
              <Fragment key={`inrTbl-${signleindex}`}>
                {state.hideNews.newsId.includes(singledata.objectID) ? null : (
                  <Fragment key={`keyitem-${signleindex}`}>
                    <SingleRow
                      singledata={singledata}
                      signleindex={signleindex}
                      key={`keyitem-${signleindex}`}
                    />
                  </Fragment>
                )}
              </Fragment>
            );
          })
        ) : (
          <tr>
            <td>no data!</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableComponent;
