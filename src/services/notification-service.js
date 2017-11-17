//to post notifications we need a const to store them taht is a global const ,if we have a central place it will be easier to access
export const NOTIF_WISHLIST_CHANGED="notif_wishlist_changed";

var observers = {};//object full of arrays
let instance=null;
class Notificationservice
    {
        constructor(){
            if(!instance){
                instance=this;
            }
            return instance;
        }
        //notifname:type of notification we want to listen for
        //observer:the component that wants to listen,so that it can register the spot in memory
        //callBack is function that gona call us to call ex:phone number
        
        
        //here we are posting the notification and the data that come with it.
    postNotification = (notifName,data)=>{
        let obs=observers[notifName];
        for(var x=0;x<obs.length;x++){
            var obj=obs[x];
            obj.callBack(data);//we are passing in the data that needs to get pushed in there.
        }
    }    
   removeObserver =(observer,notifName)=>{
            var obs=observers[notifName];
            if(obs){
                for(var x=0;x<obs.length;x++){
                    if(observer === obs[x].observer){
                        obs.splice(x,1);
                        observers[notifName]=obs;//reset the array to new that item out of it that matches
                        break;
                    }
                }
            }
        }
        addObserver =(notifName, observer, callBack)=>{
            let obs=observers[notifName];
            
            if(!obs){
                observers[notifName]=[];
            }
            
            let obj={observer:observer,callBack:callBack};
            observers[notifName].push(obj);
        }
    }
    export default Notificationservice;