'use strict';

import React, {Component} from 'react';

import ScreenwideCarousel from './ScreenwideCarousel';
import jewelry from '../../config/jewelry';
import Divider from '../Divider';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ScreenwideCarousel/>
          <Divider
            name="Rose Gold Collection"
            description="Our finest selection of Rose Gold plated necklaces are of high quality which results in extremely long lasting color!"/>
      </div>
    );
  }
}
