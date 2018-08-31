import React, {PureComponent} from "react";
import {formContainer} from './formContainer';
import {Row} from './rows';
import {Table} from 'react-bootstrap'

export const TableContainer = (props) => {
  return (
    <div className="table-container">
      <Table responsive>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
        </thead>
        <tbody>
        {props.data.map((data, index) => {
          return <Row data={data} key={index} row={index}
                      editDetails={props.editDetails}
                      deleteDetails={props.deleteDetails}/>
        })}
        </tbody>
      </Table>
    </div>
  );
}
