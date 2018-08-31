import React, {PureComponent } from "react";
import '../css/formStyle.css';

export class FormContainer extends PureComponent {
	constructor(props){
		super(props);
		this.state={
			input : 'Submit',
			radioChecked : '',
			users : []
		}
		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmitHandle.bind(this);
	}
	
	handleChange=(event)=>{
		if(event.target.name === "firstName"){
			this.setState({firstName: event.target.value});
		}if(event.target.name === "lastName"){
			this.setState({lastName: event.target.value});
		}if(event.target.name === "email"){
			this.setState({ email: event.target.value});
		}if(event.target.name === "mobileNumber"){
			this.setState({ mobileNumber: event.target.value});
		}
	}
	
	onSubmitHandle=(event)=>{
		event.preventDefault();
		const obj = {firstName:this.state.firstName, lastName:this.state.lastName,email:this.state.email,mobileNumber:this.state.mobileNumber, radioChecked:this.state.radioChecked};
		let userState = this.state.users;
		userState.push(obj);
		this.setState({firstName: '',lastName:'',email:'',mobileNumber:'',radioChecked:'',users:userState});
		this.props.handleTableContainer(userState);
	}
	
	handleOptionChange=(changeEvent)=>{
		this.setState({
			radioChecked: changeEvent.target.value
		});
	}
	
	onResetClick=()=>{
		
		this.state.firstName='';
		this.state.lastName='';
		this.state.email='';
		this.state.mobileNumber='';
		this.setState({radioChecked:''});
	}
	
	render(){
		return(
			<form onSubmit={this.onSubmitHandle}>
				<article>
					<div className="form_elements">
						<label>First Name:</label>
						<input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required/>
					</div>
					<div className="form_elements">
						<label>Last Name:</label>
						<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required/>
					</div>
					<div className="form_elements">
						<label>E-Mail ID::</label>
						<input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
					</div>
					<div className="form_elements">
						<label>Mobile No::</label>
						<input type="tel" name="mobileNumber" maxlength="10" value={this.state.mobileNumber} onChange={this.handleChange} />
					</div>
					<div className="label_style">
						<label><b>STATUS</b></label>
					</div>
					<div>
						<div>
							<input id="3" type="radio" name="status" value="Active" checked={this.state.radioChecked==='Active'} onChange={this.handleOptionChange}/>
							<label for="3">Active</label>
							
							<input id="4" type="radio" name="status" value="Inactive" checked={this.state.radioChecked==='Inactive'} onChange={this.handleOptionChange}/>
							<label for="4">Inactive</label>
						</div>
					</div>
				</article>
				
				<section className="radio_elements">
					<div>
						<button type="submit" className="add_button_elements" value="Submit">ADD</button>
						<button type="button" className="reset_button_elements" onClick={this.onResetClick}>RESET</button>
					</div>
				</section>
			</form>
		);
	}
};