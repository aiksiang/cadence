'use strict';

import React, {Component} from 'react';
import _ from 'lodash';

const NO_OF_SCREENWIDE_IMAGES = 3

export default class ScreenwideImage extends Component {
  constructor(props) {
    super(props);
  }

  renderImages() {
    return _.times(NO_OF_SCREENWIDE_IMAGES, (i) => {
      return (
        <div key={i} className={`item ${ i === 0 ? 'active' : '' }`}>
          <div className="carousel-image" style={{'backgroundImage': `url('${require(`../../img/screenwide/screenwide_${i+1}.jpg`)}')`}} />
          <div className="carousel-caption">
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div id="index-carousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#index-carousel" data-slide-to="0" className="active"></li>
          <li data-target="#index-carousel" data-slide-to="1"></li>
          <li data-target="#index-carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          {this.renderImages()}
        </div>
      </div>
    );
  }
}
