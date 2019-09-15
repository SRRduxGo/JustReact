import React from 'react'
import {Switch} from '../switch'

/**
 * Analyse this code* */
class Toggle extends React.Component {
  state = {on: false} /**Initializing state without using a constructor 
  how will pass props to the super()
  */
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),/***
      Not directly setting the state with some object
      but pre-processing the existing  de-structured value of a
      property  using a callback function and get the current state
      */
      () => {
        /**
         * another call back function to be called when state is set
         */
        this.props.onToggle(this.state.on)
      },
    )
  
  render() {
    const {on} = this.state /***
     de-structure the state to get the on value 
     */ 
    /**
     * passing  the sme value to the imported component
     */
     return <Switch on={on} onClick={this.toggle} />
  }
}

function Usage({
  /**
   * providing a default value to a de-structured property
   */
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

/**
 * Cool way of exporting the default and the component
 */
export {Toggle, Usage as default}