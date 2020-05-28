import React, { Component } from 'react';
import './watch.css';


class Watch extends Component{
   constructor(props) {
       super(props);
       this.state = {date: new Date()}
   }
   componentDidMount() {
       this.timerId = setInterval(() => this.tick(), 1000);
   }
componentWillMount() {
       clearInterval(this.timerId)
}
tick(){
       this.setState({
           date: new Date()
       })
}

render(){
       return (
           <div className="watch">
               <div className="watch__data"> {this.state.date.toLocaleDateString()}</div>
               <h2 className="watch__time"> Текущее время : {this.state.date.toLocaleTimeString()}  </h2>
           </div>
       )
}




}


export default Watch;

