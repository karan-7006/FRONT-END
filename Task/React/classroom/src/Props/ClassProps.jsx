// Props: Props stands for properties and is used to pass data from a parent component to a child component in React.
// It only reads Data but does not modify it.
// Constructor: The constructor is a special method for creating and initializing an object created within a class.

import React, { Component } from "react";

class ClassProps extends Component {
  constructor(Props) {
    super(Props);
    this.Data = Props;
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.Data.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.Data.title}</h5>
            <p className="card-text">
              {this.Data.description}
            </p>
            <a href="#" className="btn btn-primary">
              Explore This!!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassProps;
