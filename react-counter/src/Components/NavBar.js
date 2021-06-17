import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-light bg-light m-2">
                  <div className="navbar-brand">
                  <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true"></i>
                  <span className="badge bg-dark badge-info m-2" style= {{ width: 50 }}>
                   {this.props.totalcounters}
                  </span>
                   Items
                  </div>
                </nav>
        )
    }
}

export default NavBar
