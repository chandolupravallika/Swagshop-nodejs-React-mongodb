import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//components
import Product from '../product/product.js';
import Wishlist from '../wishlist/wishlist.js';
//services
import HttpService from '../services/http-service.js';


const http=new HttpService();
//const is cant be modified where as var is can be modified.

class App extends Component {
    
    //create a constructor--it is very first thing called when class loads
    
    constructor(props)
    {
        //call the http service
        super(props);
        this.state = {products:[]};
       // http.getProducts();
        //Bind functions
        this.loadData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);
        
        
        this.loadData();
    }
    
    loadData = () => {
        //we are inside of a promise it destroys "this" completely so create reference to this.
        var self=this;
        http.getProducts().then(data => {
            
            //console.log(data);
            self.setState({products:data})
            //setstate will reload the entire component
        },err => {
            
        });
    }
    
 //   productList = () => {
        
  //      const list = this.state.products.map((product) => 
            
  //           <div className="col-sm-4" 
  //               key={product._id}>
   //              <Product title={product.title} price={product.price} imgUrl={product.imgUrl}>
    //             </Product>
    //           </div>
        
    //    );
   // return (list);
   // }
    
    productList = () => {
        
        const list = this.state.products.map((product) => 
             //here we are passing whole product as props
             <div className="col-sm-4" 
                 key={product._id}>
                 <Product product={product}/>
                
               </div>
        
        );
    return (list);
    }
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Swag shop</h2>
        </div>
            
        <div className="container-fluid App-main">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                       {this.productList()}
                    </div>    
                </div>
                <div className="col-sm-4">
                  <Wishlist />
                </div>
            </div> 
            <div className="row">
                <div className="col-sm-4">
                  <Wishlist />
                
                </div>
            
            </div>
        </div>
      </div>
    );
  }
}

export default App;
