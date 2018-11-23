// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  onChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onSubmitForm = (event) => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.onSubmitForm} >
          <input type="text" value={this.state.name} onChange={this.onChangeInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
