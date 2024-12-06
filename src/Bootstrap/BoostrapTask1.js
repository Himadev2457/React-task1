import React from "react"
import Accordion from 'react-bootstrap/Accordion';

function Accordian(props){
return(
    <div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          {props.info}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  
)
}
export default Accordian;