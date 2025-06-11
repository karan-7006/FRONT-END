// State: It is a variable that is used to modify the data of a component.
// We can change data in the same File where the component is defined.
// Construtor is cumpolsury used in Class state 



import React, { Component } from 'react'
import ImagesState from './ImagesState';

class ClassState extends Component {

  constructor(){
    super();
    this.state ={
      name: "Harsh",
      count: 0,
      isimage: true,
      course : {
        Course1 : "HTML",
        Course2 : "CSS",
        Course3 : "JavaScript",
        Course4 : "ReactJS",
      }


    }
  }

  getchange=()=>{
    this.setState({
      name : "Het Patel"
    })
  }


  render() {
    return (

      // console.log(this.state),

      <div>
        <h1>Hello, This is ClassState!</h1>
        <h1>Hello Name = {this.state.name}</h1>
        <button onClick={()=>this.setState({name : "Karan"})}>Change Name</button>
        <button onClick={()=>this.setState({name : "Akash"})}>Change Name Again!</button>
        <button onClick={this.getchange}>change Name Again & Again</button>
        <br /><br />

        <h1>Hello, This Course: {this.state.course.Course1}</h1>
        <button onClick={()=>this.setState(prevState => ({course: {...prevState.course,Course1: "Data Analysis"}}))}>Change Course</button>
        <br /><br />
 
        <h1>Hello, Count = {this.state.count}</h1>
        <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
        <button onClick={()=>this.setState({count : this.state.count - 1})}>Decrement</button>  
        <button onClick={()=>this.setState({count : 0})}>Reset</button>

        <br /><br />

        <button onClick={()=>this.setState({isimage : false})}>Hide</button>
        <button onClick={()=>this.setState({isimage : true})}>Show</button>
        <button onClick={()=>this.setState({isimage : !this.state.isimage})}>Toogle</button>


        {

          (this.state.isimage)? <ImagesState /> : false

        }


      </div>
    )
  }
}

export default ClassState
