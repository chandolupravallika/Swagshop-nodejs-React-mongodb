//this is to use the code to communicate with our api
//install whatwg-fetch 
import 'whatwg-fetch';//there is no need to create variable as we installed we can call directly
//create function in class to create a list of products
class HttpService
    {
        getProducts = () => {
            //1 
            var promise = new Promise((resolve,reject) => {
            //get the produts by using fetch library
                //2
            fetch('http://localhost:3000/product')
                .then(response => {
                //4
                    // console.log(response.json());
                 resolve(response.json());
                
                })
            });
            //3
            return promise;
            
        }
    }
    
    export default HttpService;