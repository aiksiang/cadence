'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import gsap from 'gsap';

import Header from 'Header';
import Home from 'home/Home';
import Collection from 'collection/Collection';
import Order from 'order/Order';
import Contact from 'contact/Contact';

require("../css/index.scss");

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children
    }
  }

  componentDidMount() {
    let tl = new TimelineMax();

    // tl.from($('#brand-logo'), 1, {y: 20, opacity: 0});
    // tl.from($('#navbar-0'), 0.5, {y: -10, opacity: 0});
    // tl.from($('#navbar-1'), 0.5, {y: -10, opacity: 0}, "-=0.25");
    // tl.from($('#navbar-2'), 0.5, {y: -10, opacity: 0}, "-=0.25");
    // tl.from($('#navbar-3'), 0.5, {y: -10, opacity: 0}, "-=0.25");
    // tl.from($('.screenwide-container'), 1, {y: -20, opacity: 0});
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.children.type == nextProps.children.type) {
      return;
    }
    TweenLite.to(document.getElementById('content'), 0.5, { opacity: 0 });
    setTimeout(() => {
      TweenLite.to(document.getElementById('content'), 0.5, { opacity: 1 });
      this.setState({ children: nextProps.children })
    }, 500);
  }

  render() {
    return (
      <div>
        <Header/>
        <div id='content'>{this.state.children}</div>
      </div>
    );
  }
}


render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="collection" component={Collection}/>
      <Route path="order" component={Order}/>
      <Route path="contact" component={Contact}/>
    </Route>
    <Route path="/cadenceco/" component={Index}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="collection" component={Collection}/>
      <Route path="order" component={Order}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>
, document.getElementById('root'));
