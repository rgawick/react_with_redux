import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dog extends Component {

    constructor(props) {
      super(props)
  
      this.state = {
        imageURL: 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000'
      }
    }
  
    render() {
      return (
        <div>
          <h1>Dog Images</h1>
          <img src={this.props.add}></img>
          <button onClick={this.props.onIncrementList}>Add Dog Image</button>
        </div>
      )
    }
  }
  
  
  // map global state to local props
  const mapStateToProps = (state) => {
    return {
      add: state.imageURL // this.props.ctr
    }
  }
  
  // make the dispatches available on local props
  // dispatch is used to communicate with the reducer
  // so the reducer can change the global state
  const mapDispatchToProps = (dispatch) => {
    return {
      // this.props.onIncrementCounter
      onIncrementList: () => dispatch({type: "INCREMENT", value: 'https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000'})
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dog)