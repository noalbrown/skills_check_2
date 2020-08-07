import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super()
    state = {
      imageURL: '',
      productName: '',
      price: 0
    }
  }

  handleImageURL(e) {
    this.setState({
      imageURL: e.target.value
    })
  }

  handleProductName(e) {
    this.setState({
      productName: e.target.value
    })
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  handleReset() {
    this.setState({
      imageURL: '', productName: '', productName: 0
    })
  }

  render() {

    return (
      <div>
        <h3>Image URL:</h3>
        <input onChange={(e) => {
          this.handleImageURL(e)
        }} />

        <h3>Product Name:</h3>
        <input onChange={(e) => {
          this.handleProductName(e)
        }} />

        <h3>Price:</h3>
        <input onChange={(e) => {
          this.handlePrice(e)
        }} />
        <div>
          <button onClick={(e) => this.handleReset(e)}>Cancel</button>
          <button>Add to inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;