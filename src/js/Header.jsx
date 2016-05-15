'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

let NAVIGATION_OPTIONS = ['Home', 'Collection', 'Contact', 'Order']

export default class Header extends Component {
  render() {
    return (
      <div id='header' className="ui container">
        <div className="ui stackable menu navbar">
          <div id='brand-logo'>Cadence & Co.</div>
          {
            NAVIGATION_OPTIONS.map((link) => {
              return (
                <Link key={link} className="item" to={`${link.toLowerCase()}`}>
                  <div id={`navbar-${link}`} className="nav-option">
                    {link}
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    );
  }
}
