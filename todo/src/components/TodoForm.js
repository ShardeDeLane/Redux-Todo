import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/actions'

class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({
      input: ""
    })
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <input
            required
            onChange={this.handleChange}
            value={this.state.input}
            type="text"
            placeholder="New Todo"
          />
          <button className="btn waves-effect waves-light" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm)
