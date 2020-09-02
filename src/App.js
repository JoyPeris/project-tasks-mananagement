import React, { Component } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    tasks: [],
  };
  //Add Task
  newTask = (values) => {
    const newT = {
      id: "Task " + this.state.tasks.length,
      ...values,
    };
    this.setState({
      tasks: [...this.state.tasks, newT],
    });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Home tasks={this.state.tasks} newTask={this.newTask}></Home>
      </div>
    );
  }
}

export default App;
