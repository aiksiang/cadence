'use strict';

import React, {Component} from 'react';
import jewelry from '../../config/jewelry';
import Divider from '../Divider';

export default class Collection extends Component {
  componentDidMount() {
    $('.special.cards .image').dimmer({ on: 'hover' });
  }

  getCollection() {
    let collection = [];
    for (let i = 1; i <= 24; i++) {
      let image = require(`../../img/collection/picture_${i}.jpg`);
      collection.push(
        <div key={i} className="card">
          <div className="blurring dimmable image">
            <div className="ui dimmer">
              <div className="content">
                <div className="hover-image">
                  View
                </div>
              </div>
            </div>
            <img className="product-images" src={image}/>
          </div>
        </div>
      );
    }
    return collection;
  }

  // getImages() {
  //   let jewelrys = jewelry.map((jewelry_details) => {
  //     let jewelryPictures = [];
  //     for (let i = 1; i <= jewelry_details.noImages; i++) {
  //       let image = require(`../../img/${jewelry_details.name}_${i}.jpg`);
  //       jewelryPictures.push(
  //         <div key={`${jewelry_details.name}_${i}`} className="card">
  //           <div className="image">
  //             <img className="product-images" src={image}/>
  //           </div>
  //         </div>
  //       );
  //     }
  //     return jewelryPictures;
  //   })
  //   return jewelrys;
  // }

  render() {
    return (
      <div className="ui container collection-page">
        <Divider
          name="Collection"
          icon="diamond"/>
        <div className="ui three stackable special cards">
          {this.getCollection()}
        </div>
      </div>
    );
  }
}
