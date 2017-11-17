import React, {Component} from 'react';
import './wishlist.css';
import DataService from '../services/data-service.js';
import Notificationservice,{NOTIF_WISHLIST_CHANGED} from '../services/notification-service.js';
import ProductCondensed from '../product-condensed/product-condensed';

let ns=new Notificationservice();

class Wishlist extends Component{
    //when ever u want to show some thing on screen use render
    
    
    constructor(props){
        
        super(props);
        //we want add observers and remove observers for notifications
        this.state={wishlist:[]};
        //Bind Functions
        
        this.CreateWishlist =this.CreateWishlist.bind(this);
        this.onWishListChanged=this.onWishListChanged.bind(this);
    }
    
    //specific functions in react called by react
    //when about to load can do something
    //add ourselfs as observer to here--first create instance of notification service
    componentDidMount(){
        
        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged);
    }
    //we can do something when it goes out of memory
    //move out ourselfs out as observers from here
    componentWillUnmount(){
         
        ns.removeObserver(this,NOTIF_WISHLIST_CHANGED);
    }
    
    onWishListChanged(newWishList){
        //we want our wishlist items to reset
        this.setState({wishlist:newWishList});
    }


    CreateWishlist = () => {
        const list=this.state.wishlist.map((product)=>
                                         
           <ProductCondensed product={product}key={product._id}/>
                                         
                                
                                         
      );
        return (list);
        
    }
    render(){
        //now write on html for our component
        return(
                <div className="card">
                
                    <div className="card-block">
                       <h4 className="card-title">Wish List</h4>
                        <ul className="list-group">
                          {this.CreateWishlist()}
                        
                        </ul>
                      
                    </div>
            
                </div>
            );
        
    }
}
export default Wishlist;