import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import { addBand } from '../actions/bandsActions'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <hr />
        BandsContainer
        <ul>
          {
            this.props.bands.map((band, idx) => {
              return (<li key={idx} >{band.name}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: (bandName) => dispatch({ type: "ADD_BAND", name: bandName })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
export default connect(mapStateToProps, { addBand })(BandsContainer)

