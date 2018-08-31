import React, {PureComponent} from "react";
import {FormContainer} from './formContainer';
import {TableContainer} from './tableContainer';
import '../css/containerStyles.css';
import {Navbar, Grid, Row, Col} from 'react-bootstrap'
import _ from 'lodash'

export class ParentContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: [],
      firstName: '',
      lastName:'',
      email:'',
      mobileNumber:'',
      radioChecked:''
    }
  }

  deleteDetails = (data) => {
    let dataObj = _.cloneDeep(this.state.dataObj)
    dataObj.splice(_.findIndex(dataObj, d => d.id === data.id), 1)
    this.setState({
      dataObj: dataObj
    })
    if(data.id === this.state.id) {
      this.onResetClick()
    }
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
      firstName:data.firstName,
      lastName:data.lastName,
      email:data.email,
      mobileNumber:data.mobileNumber,
      radioChecked:data.radioChecked
    })
  }

  handleChange=(event)=>{
    if(event.target.name === "firstName"){
      this.setState({firstName: event.target.value});
    }if(event.target.name === "lastName"){
      this.setState({lastName: event.target.value});
    }if(event.target.name === "email"){
      this.setState({ email: event.target.value});
    }if(event.target.name === "mobileNumber"){
      if(event.target.value.match(/^\d+$/)) {
        this.setState({mobileNumber: event.target.value});
      }
    }
  }

  onSubmitHandle=(event)=>{
    event.preventDefault();
    let userState = _.cloneDeep(this.state.dataObj);
    let id = 0
    if(this.state.id !== undefined && this.state.id !== '') {
      userState = _.map(userState, user => {
        if(user.id === this.state.id) {
          user.firstName=this.state.firstName,
          user.lastName=this.state.lastName,
          user.email=this.state.email,
          user.mobileNumber=this.state.mobileNumber,
          user.radioChecked=this.state.radioChecked
        }
        return user
      })
    } else {
      if (userState.length) {
        id = _.maxBy(userState, user => user.id).id + 1
      }
      const obj = {
        id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobileNumber: this.state.mobileNumber,
        radioChecked: this.state.radioChecked
      };

      userState.push(obj);
    }
    this.setState({id: '', firstName: '',lastName:'',email:'',mobileNumber:'',radioChecked:'',dataObj: userState});
  }

  handleOptionChange=(changeEvent)=>{
    this.setState({
      radioChecked: changeEvent.target.value
    });
  }

  onResetClick=()=>{

    this.setState({id:'',
      radioChecked:'',
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: ""});
  }

  render() {

    let tableFlag = false;
    let dataTableInfo = this.state.dataObj;
    if (dataTableInfo && dataTableInfo.length > 0) {
      tableFlag = true;
    }
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand className="header-logo">
              Contact Information
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid fluid>
          <Row className="add-contact-form">
            <Col>
              <FormContainer handleTableContainer={this.handleTableContainer}
                             handleChange={this.handleChange}
                             onSubmitHandle={this.onSubmitHandle}
                             handleOptionChange={this.handleOptionChange}
                             onResetClick={this.onResetClick}
                             firstName={this.state.firstName}
                             lastName={this.state.lastName}
                             email={this.state.email}
                             mobileNumber={this.state.mobileNumber}
                             radioChecked={this.state.radioChecked}
                             id={this.state.id}
              />
            </Col>
          </Row>
        </Grid>
        {tableFlag && <TableContainer data={dataTableInfo}
                                      editDetails={this.editDetails}
                                      deleteDetails={this.deleteDetails}
        />}
      </div>
    );
  }
};
