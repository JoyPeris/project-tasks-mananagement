import React, { Component } from "react";
import Gantt from "./Gantt";
import Task from "./Task";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Task tasks={this.props.tasks} newTask={this.props.newTask}></Task>
          </div>
          <div className="col-sm-12 col-md-8">
            <Gantt tasks={this.props.tasks}></Gantt>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
