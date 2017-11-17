import React, {Component} from 'react';
import './product.css';

import DataService from '../services/data-service';
import Notificationservice,{NOTIF_WISHLIST_CHANGED} from '../services/notification-service.js';

let ds=new DataService();
let ns = new Notificationservice();

class Product extends Component{
    
    constructor(props){
        super(props);
        
        this.state={onWishlist:ds.itemOnWishlist()};
        
        //Bind functions
        this.onButtonClicked=this.onButtonClicked.bind(this);
         this.onWishListChanged=this.onWishListChanged.bind(this);
    }
    
    componentDidMount(){
        
        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged);
    }
    //we can do something when it goes out of memory
    //move out ourselfs out as observers from here
    componentWillUnmount(){
         
        ns.removeObserver(this,NOTIF_WISHLIST_CHANGED);
    }
    
    onWishListChanged(newWishlist){
        
        this.setState({onWishlist: ds. itemOnWishlist(this.props.product)});
    }
    
    onButtonClicked=()=>{
        
        if(this.state.onWishlist){
            ds.removeWishListItem(this.props.product);
        }else{
        ds.addWishListItem(this.props.product);
            }
    }
    
    //when ever u want to show some thing on screen use render
    render(){
        //now write on html for our component
        //in react es6 u have to onClick not onclick
        
        //here change the style of button according to state of product in wishlist.
        var btnClass;
        
        if(this.state.onWishlist){
            btnClass="btn btn-danger";
        }else{
             btnClass="btn btn-primary";
        }
        return(
                <div className="card product">
                    <img className="card-img-top" src={this.props.product.imgUrl} alt="Product" >
                    </img>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.product.title}</h4>
                        <p className="card-text">Price : ${this.props.product.price}</p>
            
                        <a href="#" onClick={()=>this.onButtonClicked()} className={btnClass}>{this.state.onWishlist ? "Remove From Wishlist" : "Add To Wishlist"}</a>
                    </div>
        
                </div>
                );
        
    }
}
export default Product;