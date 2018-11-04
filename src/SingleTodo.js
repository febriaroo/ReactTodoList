import React, { Component } from 'react';
import './App.css';

// class SingleTodo extends Component {
//   constructor(){
//     super();
//   }

//   render() {
//       return (
//         <li>{this.props.todo} <button onClick={this.props.delete}>x</button></li>
//       );
//   };

// }
//or we can use this
const SingleTodo = props => {
    return(
        <li>{props.todo} <button onClick={props.delete}>x</button></li>
    );
};

export default SingleTodo;
