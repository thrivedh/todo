import React, { Component } from 'react';
import "./todo.css";

class H extends Component{
    render(){
      return(
        <div className="ex">
                 
            {this.state.list.map((val)=><li>{val}</li>)}

        </div>
  
      );
    }
  }
    
  export default H;