import React, {PureComponent} from "react";
import {formContainer} from './formContainer';
import {Row} from './rows';

export const TableContainer=(props)=>{	
	return(
		<table className="table table-hover">
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
				{props.data.map((data,index)=>{
					return <Row data={data} key={index} row={index}/>
				})}
			</tbody>
		</table>		
	);
}
