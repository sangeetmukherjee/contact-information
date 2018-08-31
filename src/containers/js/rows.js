import React, {PureComponent} from "react";
import {Glyphicon} from 'react-bootstrap'

export class Row extends PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<tr>
				<td>{this.props.data.firstName}</td>
				<td>{this.props.data.lastName}</td>
				<td>{this.props.data.email}</td>
				<td>{this.props.data.mobileNumber}</td>
				<td>{this.props.data.radioChecked}</td>
				<td>
          <Glyphicon glyph="edit" className="icon-separator" onClick={() => this.props.editDetails(this.props.data)}/>
          <Glyphicon glyph="trash" onClick={() => this.props.deleteDetails(this.props.data)} />
				</td>
			</tr>
		);
	}
}
