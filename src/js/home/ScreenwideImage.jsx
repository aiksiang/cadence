'use strict';

import React, {Component} from 'react';

export default class ScreenwideImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let image = require(`../../img/screenwide/${this.props.jewelry.name}.jpg`);
    return (
      <div className="screenwide-container" style={{backgroundImage: `url('${image}')`}}>
        <div className="screenwide-name">
          {this.props.jewelry.displayName}
        </div>
      </div>
    );
  }
}
