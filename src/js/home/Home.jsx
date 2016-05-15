'use strict';

import React, {Component} from 'react';

import ScreenwideCarousel from './ScreenwideCarousel';
import jewelry from '../../config/jewelry';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ScreenwideCarousel/>
      </div>
    );
  }
}
