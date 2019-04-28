import React, { Component } from 'react'

import './welcome.scss'

export default class Welcome extends Component {
    count = 0;
    state = {
        figure: 'is-egg'
    }

    changeTriangles = () => {

        this.count++;
        const classes = ['is-egg','is-react','is-net','is-js','is-css'];
        
        if (this.count > 4){
            this.count = 0;
        }
        console.log(this.count);
        this.setState({ figure: classes[this.count]});
    }

    componentDidMount() {
        this.interval = setInterval(this.changeTriangles, 2000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

  render() {
      console.log(this.state);
    const {figure} = this.state;
    const clazzName = `canvas ${figure}`
    let divArray = [];
    for (let i = 1; i < 103; i++) {
        const clazzName = `p${i}`;
        const someDiv = <div key={i} className={clazzName}></div>
        divArray.push(someDiv)
    }
    return <div className={clazzName}>{divArray}</div>;

  }
}