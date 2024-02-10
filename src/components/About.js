import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount(){
    //  console.log("Parent DidMount Called")
  }

  render() {
    // console.log("Parent Render")
    return (
      <div className="about">
        <h1>About</h1>
        <h2>This is About Page</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
