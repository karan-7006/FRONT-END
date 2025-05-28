// Props: Props stands for properties and is used to pass data from a parent component to a child component in React.
// It only reads Data but does not modify it.
// Constructor: The constructor is a special method for creating and initializing an object created within a class.

import React, { Component } from "react";

class ClassProps extends Component {
  constructor(Props) {
    super(Props);
    this.Props = Props;
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassProps;
