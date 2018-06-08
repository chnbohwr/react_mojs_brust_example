import React, { Component } from 'react';
import mojs from 'mo-js';

const burst = new mojs.Burst({
  radius: { 0: 1000 },
  children: {
    shape: 'circle',
    fill: { '#E16B8C': '#FEDFE1' },
    duration: 750,
    radius: 200,
  }
});

const burst2 = new mojs.Burst({
  radius: { 200: 300 },
  count: 20,
  children: {
    shape: 'line',
    stroke: ['white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202'],
    scale: 1,
    scaleX: { 1: 0 },
    // pathScale:    'rand(.5, 1.25)',
    degreeShift: 'rand(-90, 90)',
    radius: 'rand(20, 40)',
    // duration:     200,
    delay: 'rand(0, 150)',
    isForce3d: true
  }
});

export default class RouteAnime extends Component {
  componentDidMount() {
    this.props.history.listen(() => {
      burst.tune({
        count: 'rand(3,7)',
        angle: 'rand(0, 360)'
      }).replay();
      burst2.replay();
    });
  }

  render() {
    return (
      <div />
    );
  }
}
