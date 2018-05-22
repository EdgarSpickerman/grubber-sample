import React from "react";
import Header from "../common/Header.jsx";
import axios from "axios";

class Home extends React.Component{
  componentDidMount(){
    const data = {};
    axios.get("/Api/Meals",data)
      .then(response=>console.log(response.data))
      .catch(err=>console.log("error",err))
  }

  render(){
    return (
      <div className="app">
        <Header/>
        <div className="landing"></div>
      </div>
    )
  }
}

export default Home;