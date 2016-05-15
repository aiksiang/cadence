'use strict';

import React, {Component} from 'react';

import ScreenwideImage from './ScreenwideImage';
import jewelry from '../../config/jewelry';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ScreenwideImage jewelry={jewelry[0]}/>
      </div>
    );
  }
}
