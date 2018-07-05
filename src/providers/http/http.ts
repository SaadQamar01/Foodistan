import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions} from '@angular//http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  baseUrl='https://foodistanweb.herokuapp.com/api/';

  constructor(public http: HttpClient,private _http:Http) {

    console.log('Hello HttpProvider Provider');
    
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }
  getPaginatedCategory(){
     let headers = new Headers();
     this.createAuthorizationHeader(headers);
    return this._http.get(this.baseUrl+"category",{
      headers: headers
    }).map(data=>{

      console.log(data.json());
      return data.json()
    })
  }

  getAllRestaurant(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
   return this._http.get(this.baseUrl+"restaurant/all",{
     headers: headers
   }).map(data=>{

     console.log(data.json());
     return data.json()
   });
  }
  
  getRestById(){
    let id=localStorage.getItem('restId');
    console.log(id);
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(this.baseUrl+"restaurant/res/"+id,{
      headers: headers
    });

  }

  getCatByRestId(){
    let id=localStorage.getItem('restId');
    console.log(id);
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(this.baseUrl+"category/res/"+id,{
      headers: headers
    })
    .map(data=>{
      
           console.log(data.json());
           return data.json()
         });

  }

  getFoodByRestId(){

    let id=localStorage.getItem('catId');
    console.log(id);
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(this.baseUrl+"food/"+id,{
      headers: headers
    })
    .map(data=>{
      
           console.log(data.json());
           return data.json()
         });

  }

  getAllFoodResByCatId(){

    let id1=localStorage.getItem('catId');
    console.log(id1);
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.get(this.baseUrl+"category/cat/"+id1,{
      headers: headers
    })
    .map(data=>{
      
           console.log(data.json());
           return data.json()
         });

  }

  getAllItemsByFoodId(){
    
        let id1=localStorage.getItem('foodId');
        console.log(id1);
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this._http.get(this.baseUrl+"item/user/list/"+id1,{
          headers: headers
        })
        .map(data=>{
          
               console.log(data.json());
               return data.json()
             });
    
      }

      createQuickOrder(price,quantity) {
        
         console.log(" Price: "+price+" \nQTY: "+quantity);
        
         let headers = new Headers();

         this.createAuthorizationHeader(headers);
         
         
         let options = new RequestOptions({ headers: headers });

         let foodId = localStorage.getItem("foodId");
         let resId=localStorage.getItem("restId");
        
         return this._http.post('https://foodistanweb.herokuapp.com/api/order', {
           "foodId":foodId,
           "resId":resId,
           "quantity":quantity,
           "price":price,
           "deliveryCharges":'100',
           "deliveryAddress":'Nazimabad',
           "deliveryPhone":'03072756748'

         }, options)
        
         .map(res => {
        
           console.log(res.json())
        
           return res.json()
        
         })
        
         .catch((err) => {
        
           console.log(err.json)
        
           return err.json()
        
         })
       
       }

       createCustomOrder(price,quantity,foodItemArray) {
        
         console.log(" Price: "+price+" \nQTY: "+quantity);
        
         let headers = new Headers();

         this.createAuthorizationHeader(headers);
         
         
         let options = new RequestOptions({ headers: headers });

         let foodId = localStorage.getItem("foodId");
         let resId=localStorage.getItem("restId");
        
         return this._http.post('https://foodistanweb.herokuapp.com/api/order', {
           "foodId":foodId,
           "resId":resId,
           "quantity":quantity,
           "price":price,
           "deliveryCharges":'100',
           "list":{foodItemArray},
           "deliveryAddress":'Nazimabad',
           "deliveryPhone":'03072756748'

         }, options)
        
         .map(res => {
        
           console.log(res.json())
        
           return res.json()
        
         })
        
         .catch((err) => {
        
           console.log(err.json)
        
           return err.json()
        
         })
        }
       
       getAllQuickOrdersList(){
        
            let headers = new Headers();
            this.createAuthorizationHeader(headers);
            return this._http.get(this.baseUrl+"order/list",{
              headers: headers
            })
            .map(data=>{
              
                   console.log(data.json());
                   return data.json()
                 });
        
          }
    

}
