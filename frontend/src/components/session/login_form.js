import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorTag = this.errorTag.bind(this)
    this.errorMessage = this.errorMessage.bind(this)
    this.props.clearSessionErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/accounts');
  
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    .then(() => this.props.errors.length === 0 ? this.props.history.push('/accounts') : null); 
  }

  errorTag(field){
    let id = Object.keys(this.props.errors).includes(field) ? "error" : ""
    return id;
  }

  errorMessage(field){
    if (Object.keys(this.props.errors).includes(field)){
        return <p id='error-message'>{this.props.errors[[field]]}</p>
    }
  }

  render() {
    return (
      <div className='session-form-container'>
        <form id='session-form' onSubmit={this.handleSubmit}>
            <label id={this.errorTag('email')}>
              <div id='input-section'>
                <p>Email</p>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              </div>
              {this.errorMessage('email')}
            </label>
            <label id={this.errorTag('password')}>
              <div id='input-section'>
                <p>Password</p>
                <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
              </div>
              {this.errorMessage('password')}
            </label>
            <div id='button' onClick={this.handleSubmit}>Login</div>
            

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);