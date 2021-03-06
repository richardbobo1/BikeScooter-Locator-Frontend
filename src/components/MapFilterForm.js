import React, { useState } from "react";
import { Form, Checkbox, Button} from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css';
 
class MapFilterForm extends React.Component {

  constructor(){
    super()
  }

  componentDidMount(){

  }

 



  render() {



    return (
        <>
        
  
        <Form>
        <Form.Field>
          Companies:
        </Form.Field>
        <Form.Field>
          <Checkbox
            toggle 
            label='CapBike Share'
            name='checkboxRadioGroup'
            value='cap'
            defaultChecked = {this.props.displayCB}
            // checked={this.state.value === 'this'}
            onChange={(event) => this.props.changeFilter("cap")}
         
          />
        </Form.Field>

        <Form.Field>
          <Checkbox
            toggle 
            label='Helbiz Bikes'
            name='checkboxRadioGroup'
            value='helbiz'
            defaultChecked = {this.props.displayHB}
            // checked={this.state.value === 'that'}
            onChange={(event) => this.props.changeFilter("helbiz")}
       
          />
        </Form.Field>

        <Form.Field>
          <Checkbox
            toggle 
            label='JUMP Bikes*'
            name='checkboxRadioGroup'
            value='jump'
            defaultChecked = {this.props.displayJB} 
            // checked={this.state.value === 'that'}
            onChange={(event) => this.props.changeFilter("jump")}
        
          />
        </Form.Field>
       
      </Form>
   
      <br />
      <br />
      <Button primary onClick={(event) => this.props.handleRefreshBikes(event) } >Refresh</Button>



</>

    )
   
  }
}
 
export default MapFilterForm;