import React, {Component} from 'react';
import {View} from 'react-native';

export default class Parabola extends Component {
  static defaultProps = {
    rate: 1,
    duration: 500,
    top: 0,
  };

  static propTypes = {
    isTrigger: false, //true/false
    rate: 0.0,
    start: {
      x: 0.0,
      y: 0.0,
    },
    end: {
      x: 0.0,
      y: 0.0,
    },
    duration: 0.0,
    top: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      parabolas: [],
    };
    this._isAnimating = false;
  }

  componentWillReceiveProps(nextProps) {
    let {start, end, isTrigger} = nextProps;
    if (isTrigger) {
      let parabola = {
        start,
        end,
        translateX: 0,
        translateY: 0,
        startTime: Date.now(),
        animationEnd: false,
      };
      this._addBall(parabola);
    }
  }

  _renderParabola({index, translateX, translateY}) {
    return (
      <View
        key={`'parabola-ball-'${index}`}
        style={[
          {position: 'absolute'}, //Don't forget to set this
          {width: 20, height: 20, borderRadius: 10, backgroundColor: '#EB5757'},
          {transform: [{translateX}, {translateY}]},
        ]}
      />
    );
  };

  render() {
    let parabolas = this.state.parabolas.map((parabola, index) => {
      let {translateX, translateY} = parabola;
      return this._renderParabola({
        index,
        translateX,
        translateY,
      });
    });
    return (
      <View style={{position: 'absolute', left: 0, top: 0}}>{parabolas}</View>
    );
  }

  _addBall(parabola) {
    this.state.parabolas.push(parabola);

    if (!this._isAnimating) {
      this._updateBalls();
    }
  }

  _updateBalls() {
    this._isAnimating = true;

    if (this.state.parabolas.length == 0) {
      this._isAnimating = false;
      return;
    }

    let {duration, rate, top: rry1} = this.props;

    //let r_animationEnd //test code

    let parabolas = this.state.parabolas.map(parabola => {
      let {start, end, startTime, animationEnd} = parabola;

      let interval = Date.now() - startTime;

      if (interval > duration) {
        if (animationEnd) {
          return null;
        } else {
          interval = duration;
          parabola.animationEnd = true;
          //r_animationEnd = true //test code
        }
      }

      let percent = interval / duration;

      let {x: rx1, y: ry1} = start;
      let {x: rx2, y: ry2} = end;

      let direction = rx2 > rx1 ? 1 : -1;

      let lmy1 = ry2 - rry1;
      let my1 = ry2 - ry1;
      let mx2 = direction * (rx2 - rx1);
      let lmh = mx2 / 2;
      //let mh = (1 - my1 / lmy1) * lmh
      let mh =
        (1 - my1 / lmy1) * lmh * rate * (1 - my1 / lmy1) +
        lmh * (1 - rate) * (1 + my1 / lmy1);

      let a = my1 / mx2 / (2 * mh - mx2);
      let b = -2 * a * mh;
      let c = my1;

      let mx = percent * mx2;
      let my = a * Math.pow(mx, 2) + b * mx + c;

      parabola.translateX = rx1 + direction * mx;
      parabola.translateY = ry2 - my;

      return parabola;
    });

    parabolas = parabolas.filter(parabola => {
      return parabola != null;
    });

    this.setState({
      parabolas,
    });

    //if(!r_animationEnd)   //test code
    requestAnimationFrame(this._updateBalls.bind(this));
  }
}
