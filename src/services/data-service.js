import Notificationservice,{NOTIF_WISHLIST_CHANGED} from './notification-service.js';
let ns=new Notificationservice();//how ever "new" objects create new copy but we still referencing a single memory here. 
//singleton instance
let instance=null;
var wishlist = [];

class DataService {
    constructor(){
        if(!instance)
            {
                instance=this;
            }
        return instance;
    }
    
    //few functions to manipulate the wishlist
    itemOnWishlist = item => {
        for(var x=0; x< wishlist.length; x++){
            if(wishlist[x]._id === item._id){
                return true;
            }
        }
        return false;
    }

    addWishListItem = item => {
        wishlist.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED,wishlist);
    }
    
    removeWishListItem = item => {
        for (var x=0;x<wishlist.length;x++)
        {
            if(wishlist[x]._id === item._id){
                wishlist.splice(x,1);//get rid of 1 element at that index
                ns.postNotification(NOTIF_WISHLIST_CHANGED,wishlist);
                break;
            }
        }
    }
}

export default DataService;