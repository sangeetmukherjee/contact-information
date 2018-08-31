import React, {PureComponent } from "react";
import {FormContainer} from './formContainer';
import {TableContainer} from './tableContainer';
import '../css/containerStyles.css';

export class ParentContainer extends PureComponent {
	constructor(props){
		super(props);
		this.state={
			dataObj:[]
		}
	}
	
	handleTableContainer=(obj)=>{
		console.log(obj);
		this.setState({
			dataObj:obj
		})
		this.forceUpdate();
	}
	
	render(){
		
		let tableFlag=false;
		let dataTableInfo=this.state.dataObj;
		if(dataTableInfo && dataTableInfo.length>0){
			tableFlag=true;
		}
		return(
			<div className="container_styles">
				<div>
					<h2>Small React App</h2>
					<FormContainer handleTableContainer={this.handleTableContainer}/>
				</div>
				{tableFlag && <TableContainer data={dataTableInfo}/>}
			</div>
		);
	}
};