// Compound Components

import React from 'react'
import {Switch} from '../switch'

class Toggle extends React.Component {
  
    /**
     * Static properties which can be accessed from the 
     * class itself without using an instance
     * 
     * here each returns a component or a null value
     */
  static On = ({on, children}) => (on ? children : null)
  // static on = ({on,children}) => (on?children:null)
  
  static Off = ({on, children}) => (on ? null : children)
  //static off  =({on,children})=>(on ? null:children)
  
  static Button = ({on, toggle, ...props}) => (
    <Switch on={on} onClick={toggle} {...props} />
  )
  /**
   * BUILDING MUSCLE MEMORY 
   * static Button = ({on, toggle, ...theRest}) => (
   * <Switch on={on} onClick={toggle} {...theRest} />
   * )
   *  */ 

  
  
  
  /**
   * Initializing the state without a constructor
   * state = {on:false} with no semicolon in the end
   * 
   */
  state = {on: false}
  
  /**
   * toggle = ()=>
   *    this.setState(
   *        ({on})=>({on:!on}),
   *        ()=>this.props.onToggle(this.state.on)
   *    )
   * 
   */
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
    )
  
 render() {
    
    return React.Children.map(this.props.children, child =>
        /**
         * clones the element and preserves the key,ref
         * children
         * 
         * once the component has been instantiated, it's internal-state which 
         * is a product of props (value of props at the time of instantiation),
         * if changed dynamically after instantiation will not change any of the dependent internal state
         * 
         * One has to clone the child or the component-instance and pass in the required props
         */
        React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      }),
    )
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  )
}
Usage.title = 'Compound Components'

export {Toggle, Usage as default}
