import React, { Component } from 'react'
class Notification extends Component{
    render(props){
        return(
            <div>
                <h1>{this.props.name} {this.props.type} your post</h1>
            </div>
        )
    }
}
export default Notification;