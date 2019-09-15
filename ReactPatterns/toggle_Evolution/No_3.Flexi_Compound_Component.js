// Flexible Compound Components with context

import React from 'react'
import {Switch} from '../switch'

/**
 * 1. Creating a context with no default value
 */
const ToggleContext = React.createContext()


class Toggle extends React.Component {
  
  /**
   * 5. These are all static properties of the class Toggle
   * These properties happen to be HOC / functional component 
   * 
   * `Context.Consumer` subscribes to context changes. 
   * This lets you subscribe to a context within a function component.
   * 
   * 
   * Requires a function as a child. The function receives the current context value and returns a React node. 
   * The value argument passed to the function will be equal to the value prop 
   * of the closest Provider for this context above in the tree.
   * 
   * 
   */
  static On = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? children : null)}
    </ToggleContext.Consumer>
  )
  static Off = ({children}) => (
    <ToggleContext.Consumer>
      {({on}) => (on ? null : children)}
    </ToggleContext.Consumer>
  )
  static Button = props => (
    <ToggleContext.Consumer>
      {({on, toggle}) => (
        <Switch on={on} onClick={toggle} {...props} />
      )}
    </ToggleContext.Consumer>
  )
  
  
  state = {on: false}
  toggle = () =>
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on),
    )
  render() {
    return (
      
      /**
       * 2. `ToggleContext` should be available in the scope-chain
       * Using a `Provider` here to pass the current context-value so that it can
       * be available to the children below
       */

       /**
        * 3. Point to Remember
        * All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
        * The propagation from Provider to its descendant consumers `is not subject to the shouldComponentUpdate`
        *  method, so the consumer is updated even when an ancestor component bails out of the update.
        */
       /**
        * 4. Another point to remember
        * Here we are not using `static contextType = ToggleContext` in the class definition, which means
        * `this.context` will not be available
        * [https://reactjs.org/docs/context.html#classcontexttype]
        */
      <ToggleContext.Provider
        value={{on: this.state.on, toggle: this.toggle}}
      >
        {this.props.children}
      </ToggleContext.Provider>
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
      <div>
        <Toggle.Button />
      </div>
    </Toggle>
  )
}
Usage.title = 'Flexible Compound Components'

export {Toggle, Usage as default}
