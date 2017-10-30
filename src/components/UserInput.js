import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
       username: '',
       hometown: '',
     };
   }

  handleSubmit (event) {
    event.preventDefault()
// UserInput updates the store when the form is submitted:
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Username:</label>
          <input type= "text"
            name="username"
            value={this.state.username}
              onChange={(event) => this.handleChange(event)}/>
            <input
               type="text"
               name="hometown"
               value={this.state.hometown}
               onChange={(event) => this.handleChange(event)} />
           <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
