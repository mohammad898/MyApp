import React, { Component } from 'react'; 


import First from './componants/First'
import Nav from './componants/Nav'
import Product from './componants/Product'
import About from './componants/About'
class App extends Component {  
   render() {  
      return (  
         <div >
           <First/>
           <Product/>
           <About/> 
           <Nav/>
          
         </div> 
          
      );  
   }  
}  


export default App;  
