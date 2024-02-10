import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Constructor")
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  

  render() {
    console.log(this.state.userInfo)
    const { name, location , avatar_url} = this.state.userInfo;
    // console.log(this.props.name + "Render")
    return (
      <div className="user-card">
        <div className="user-pic">
          <img src={avatar_url}/>
        </div>
        <div className="user-info">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: @hdhfkh</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
