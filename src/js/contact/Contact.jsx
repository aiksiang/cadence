'use strict';

import React, {Component} from 'react';
import Divider from '../Divider';

export default class Contact extends Component {
  render() {
    return (
      <div className="ui container contact-page">
        <Divider
          name="Contact"
          icon="comment outline"/>
      </div>
    );
  }
}
