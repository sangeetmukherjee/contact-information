import React, {PureComponent} from "react";	

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
			</tr>
		);
	}
}
