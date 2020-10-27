import React, { Component } from 'react'

 class User extends Component {
    state={
        name:""
    }
    render() {
        console.log(this.props.name);
       
        return (
            <div>
                <h3>My name is {this.props.name }</h3>
               
            </div>
        )
    }
}

export default User
