import React, { Component } from 'react'
import BandInput from './BandInput';
<<<<<<< HEAD
import Band from './Band'
=======
>>>>>>> 8cc7b707e6b573e343b39c58485eef6a082c50f8
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => (
    this.props.bands.map((band) => <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />)
  )
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
<<<<<<< HEAD
        <ul>{this.renderBands()}</ul>
=======
>>>>>>> 8cc7b707e6b573e343b39c58485eef6a082c50f8
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)