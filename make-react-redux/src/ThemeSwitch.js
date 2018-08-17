import React, { Component } from 'react'
import Protypes from 'prop-types'
import { connect } from 'react-redux'

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: Protypes.string,
    onSwitchColor: Protypes.func
  }

  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSwitchColor.bind(this, 'red')} style={{color: this.props.themeColor}}>Red</button>
        <button onClick={this.handleSwitchColor.bind(this, 'blue')} style={{color: this.props.themeColor}}>Blue</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}

const dispatchProps = dispatch => {
  return {
    onSwitchColor: color => {
      dispatch({
        type: 'UPDATE_COLOR',
        themeColor: color
      })
    }
  }
}

ThemeSwitch = connect(mapStateToProps, dispatchProps)(ThemeSwitch)

export default ThemeSwitch
