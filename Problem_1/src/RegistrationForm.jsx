import React from 'react'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: {},
      submittedData: null,
    }
  }

  handleChange = (e) => {
    const { name, type, value, checked } = e.target
    this.setState({ [name]: type === 'checkbox' ? checked : value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = this.state
    const data = { name, email, password }
    this.setState({ submittedData: data, errors: {} })
  }

  render() {
    const { name, email, password, errors, submittedData } = this.state

    return (
      <div className="registration-form" style={{ maxWidth: 500, margin: '0 auto', textAlign: 'left' }}>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label>Name</label>
            <input name="name" value={name} onChange={this.handleChange} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div>
            <label>Email</label>
            <input name="email" type="email" value={email} onChange={this.handleChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label>Password</label>
            <input name="password" type="password" value={password} onChange={this.handleChange} />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div style={{ marginTop: 12 }}>
            <button type="submit">Register</button>
          </div>
        </form>

        {submittedData && (
          <div className="submitted" style={{ marginTop: 16 }}>
            <h3>Submitted data</h3>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
