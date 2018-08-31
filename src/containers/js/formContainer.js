import React, {PureComponent } from "react";
import '../css/formStyle.css';
import {Button} from 'react-bootstrap'

export class FormContainer extends PureComponent {

	render(){
		return(
			<form onSubmit={this.props.onSubmitHandle} className="contact-form">
				<div>
					<div className="form_elements col col-xs-6">
						<label>First Name:</label>
						<input type="text" name="firstName" className="form-control" value={this.props.firstName} onChange={this.props.handleChange} required/>
					</div>
					<div className="form_elements col col-xs-6">
						<label>Last Name:</label>
						<input type="text" name="lastName" className="form-control" value={this.props.lastName} onChange={this.props.handleChange} required/>
					</div>
					<div className="form_elements col col-xs-6">
						<label>E-Mail ID:</label>
						<input type="email" name="email" className="form-control" value={this.props.email} onChange={this.props.handleChange} />
					</div>
					<div className="form_elements col col-xs-6">
						<label>Mobile No:</label>
						<input type="tel" name="mobileNumber" className="form-control" maxLength="10" minLength="10" value={this.props.mobileNumber} onChange={this.props.handleChange} />
					</div>
					<div className="form_elements col col-xs-12">
						<label>Status:</label>
            <div className="radio-container">
							<input id="3" type="radio" name="status" value="Active" checked={this.props.radioChecked==='Active'} onChange={this.props.handleOptionChange}/>
							<label for="3">Active</label>

							<input id="4" type="radio" name="status" value="Inactive" checked={this.props.radioChecked==='Inactive'} onChange={this.props.handleOptionChange}/>
							<label for="4">Inactive</label>
            </div>
						</div>
					</div>

        <div className="button-container">
          <Button type="submit" bsStyle="primary" className="add-button-elements" value="Submit">{this.props.id === undefined || this.props.id ==='' ? 'ADD' : 'SAVE'}</Button>
          <Button type="button" className="reset-button-elements" onClick={this.props.onResetClick}>RESET</Button>
        </div>
			</form>
		);
	}
};
