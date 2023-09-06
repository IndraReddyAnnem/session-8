import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      
            userInfo : {
              name:"dummy name",
              location:"dummy location",
            }
          
        };
        //console.log("child-constructor" + this.props.name)
    }

   componentDidMount(){
      this.timer = setInterval(() => {
        //console.log("Hello world!")
      }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
      if(this.state.count !== prevState.count){

      }
     // console.log("component Did Update")
    }
    
    componentWillUnmount(){
      clearInterval(this.timer);
      //console.log("component Will Unmount");
    }
      

  render(){
    const {count,} = this.state;
     // console.log("child-render" + this.props.name)
    return (
    <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
    </div>
    );
  }
}

export default Profile;

/**
 * async componentDidMount(){
      const data = await fetch("https://api.github.com/users/indrareddyannem")
      const json = await data.json();
      console.log(json)
      this.setState({
        userInfo : json,
      })
       console.log("child-componentDidMount" + this.props.name);
 * 
 */