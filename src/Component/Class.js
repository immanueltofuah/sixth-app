import React, { useState} from "react";
class App extends React.Component {

    constructor() {
      super();
      this.state = {firstname:"", surname: "", email: "", password: "" };
    }
  
    handleFirstName(e) {
      this.setState({firstname: e.target.value})
    }
  
    handleSurName(e) {
      this.setState({surname: e.target.value})
    }
    handleEmail(e) {
        this.setState({email: e.target.value})
      }
  
    handlePassword(e) {
      this.setState({password: e.target.value})
    }
  
    handleSubmit(e) {
      e.preventDefault()
      this.setState({firstname: "", surname: "", email: "", password: ""})
    }
  
    render() {
      return (
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input name="firstname" type="text" value={this.state.firstname} onChange={(e) => this.handleFirstName(e)} />
            <input name="surname" type="text" value={this.state.surname} onChange={(e) => this.handleSurName(e)} />
            <input name="email" type="email" value={this.state.email} onChange={(e) => this.handleEmail(e)} />
            <input name="password" type="password" value={this.state.password} onChange={(e) => this.handlePassword(e)} />
            <input type="submit" />
          </form>
        </div>
      );
    }
  }
  export default App;