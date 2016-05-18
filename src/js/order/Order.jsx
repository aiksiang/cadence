'use strict';

import React, {Component} from 'react';
import jewelry from '../../config/jewelry';
import Divider from '../Divider';

export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1
    }
  }
  componentDidMount() {
    $('select.dropdown').dropdown();
    $('.ui.checkbox').checkbox();
  }

  getJewelryOptions() {
    return jewelry.map((jewelry_details) => {
      return (
        <option key={jewelry_details.name} value={jewelry_details.name}>{jewelry_details.displayName}</option>
      )
    });
  }

  onQuantityChange(e) {
    if (isNaN(e.target.value) || e.target.value.length > 2)
      return;
    this.setState({
      quantity: e.target.value
    })
  }

  render() {
    return (
      <div className="ui container order">
        <Divider
          name="Order"
          description="Includes Free solid velvet jewelry box and normal shipping. For registered shipping(highly recommended), please top-up S$2.30."
          disclaimer="Full payment before order. No backing out or refund after order and goods are non-exchangable. We will not be responsible for mail that is lost during normal shipping."
          icon="edit"/>
        <div id="payment-container">
          <div className="ui form">
            <div className="fields">
              <div className="thirteen wide field">
                <label>Jewelry</label>
                <select className="ui fluid dropdown">
                  {this.getJewelryOptions()}
                  </select>
              </div>
              <div className="three wide field">
                <label>Quantity</label>
                <input type="text" value={this.state.quantity} onChange={this.onQuantityChange.bind(this)}/>
              </div>
            </div>
            <div className="field">
              <label>Name</label>
              <input type="text"/>
            </div>
            <div className="field">
              <label>Address</label>
              <input type="text"/>
            </div>
            <div className="fields last-row">
              <div className="twelve wide field">
                <div className="ui checkbox">
                  <input type="checkbox" tabIndex="0" className="hidden" defaultChecked={true}/>
                  <label>Registered Mail(+S$2.30)</label>
                </div>
              </div>
              <div className="four wide field">
                <div className="ui submit basic button">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
