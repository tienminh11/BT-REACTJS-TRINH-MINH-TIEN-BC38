import React, { Component } from 'react'
import "./css/Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand footer-brand text-center" href="#">
            Copyright © Your Website 2022
            </a>
            
          </div>
        </nav>
      </footer>
    )
  }
}
