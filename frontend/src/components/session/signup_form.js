import React from 'react';
import { withRouter } from 'react-router-dom';
import './session.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorTag = this.errorTag.bind(this)
    this.errorMessage = this.errorMessage.bind(this)
    this.props.clearSessionErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.errors.length === 0 ? this.props.history.push('/accounts') : null); 
  }

  errorTag(field){
    return Object.keys(this.props.errors).includes(field) ? "error" : ""
    
  }

  errorMessage(field){
    if (Object.keys(this.props.errors).includes(field)){
        return <p id='error-message'>{this.props.errors[[field]]}</p>
    }
  }

  render() {
    console.log(this.props.errors)
    return (
      <div className="session-form-container">
        <form id='session-form' onSubmit={this.handleSubmit}>
          <div className="login-form">
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
            <label id={this.errorTag('password2')}>
              <div id='input-section'>
                <p>Verify Password</p>
                <input type="password"
                    value={this.state.password2}
                    onChange={this.update('password2')}
                    placeholder="Verify Password"
                  />
              </div>
              {this.errorMessage('password2')}
            </label>
            <div id='button' onClick={this.handleSubmit}>Signup</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);