import React, { Component } from 'react'
import ReactDom from 'react-dom';
import DashBoard from '../components/DashBoard';
import Error1 from './Error';
const start = (props) => {
  
    return(
        <div>
           {props.status == 'valid' ? <DashBoard/> : <Error1 />} 
        
        </div>
        
    );
}
// class Start extends Component{
//   state ={mgs:'false'};
//   Starting(props) {
//     if(props.status == 'valid'){
//       this.setState({mgs:"true"})
//     }
//   }
//   start = (props) => {
      
//             <div>
//                {props.status == 'valid' ? <DashBoard/> : <Error1 />} 
//             </div>
//     }
//   render(){
//     return(
//       <div>
//         {this.state.mgs}
//        { starting('valid')}
//       </div>
//     )
//   }
// }
  
  
export default start;
