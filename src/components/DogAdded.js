import React, { Component } from 'react';
import { connect } from 'react-redux'


class DogAdded extends Component {

  render() {

    const results = this.props.myURLS.map((url,index) => <li key={index}>
    <img src={url} />
    </li>)

    return (
      <div>
      <h3>Display Images</h3>
      {results}
      </div>
    )
  }
}



const mapStateToProps = (state) => {
 
  return {
    myURL: state.imageURL,
    myURLS: state.imageURLs
  }
}

export default connect(mapStateToProps)(DogAdded)