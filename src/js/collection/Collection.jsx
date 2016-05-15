'use strict';

import React, {Component} from 'react';
import Divider from '../Divider';
import _ from 'lodash';

const NO_OF_IMAGES = 24

export default class Collection extends Component {
  componentDidMount() {
    $('.special.cards .image').dimmer({ on: 'hover' });
  }

  getCollection() {
    return _.times(NO_OF_IMAGES, (i) => {
      return (
        <div key={i} className="card">
          <div className="blurring dimmable image">
            <div className="ui dimmer">
              <div className="content">
                <div className="hover-image">
                  View
                </div>
              </div>
            </div>
            <div className="product-images" style={{'backgroundImage': `url('${require(`../../img/collection/picture_${i+1}.jpg`)}')`}}/>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui container collection-page">
        <Divider
          name="Collection"
          description="Our new collection features a minimalistic design and an elegant touch of rose gold, suitable for all occasions whether it's a casual day out, a hard day at work or a hot dinner date!"
          icon="diamond"/>
        <div className="ui three stackable special cards">
          {this.getCollection()}
        </div>
      </div>
    );
  }
}
