import React, { Component } from "react";
import Product from '../Product/Product'

class Dashboard extends Component {
  render() {
    const newProducts = this.products.map((e, id) => (
      <Product key={id} data={e} />
    ))
    return (
      <div>
        <h1>Dashboard</h1>
        {newProducts}
      </div>
    );
  }
}

export default Dashboard;