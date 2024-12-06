import React from 'react'
import PropTypes from 'prop-types'
import '../props/Student.css'

function Student (props){
    return(
        <div className='Student'>
         <p>Name: {props.name}</p>
         <p>age: {props.age}</p>
         <p>Student: {props.isStudent ? "yes" : "No"}</p>
        </div>
    )
}

//proptypes
Student.propTypes={
 name: PropTypes.string,
 age: PropTypes.number,
 isStudent: PropTypes.bool,
}

//default props
Student.defaultProps={
name: "Srinu",
age: 50,
isStudent: false,
}
export default Student;