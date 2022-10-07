import React,{Component} from 'react';
export default class App extends Component{
  componentDidMount(){
    this.props.getData();
  }
  render (){
    console.log("props value :",this.props.fetched_data);
    console.log("error values :", this.props.error_values);
    return(
      <div>App 
         <p> {this.props.error_values} </p>
      </div>
    )
      
  }
}