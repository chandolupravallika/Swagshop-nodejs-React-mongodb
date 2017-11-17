import React, {Component} from 'react';
import './product-condensed.css';
import Dataservice from '../services/data-service.js';

let ds = new Dataservice();
class ProductCondensed extends Component{
    
    
    
    constructor(props){
        super(props);
        
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }
    
    //when ever u want to show some thing on screen use render
    render(){
        //now write on html for our component
        return(
               <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                        <p>{this.props.product.title}  |  <b>${this.props.product.price} </b></p>
              
               </li>
             );
        
    }
}
export default ProductCondensed;