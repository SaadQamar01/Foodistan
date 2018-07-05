import { Http,Headers,Response,RequestOptions} from '@angular//http';
import { Injectable } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams,AlertController,ToastController,LoadingController  } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  baseUrl:string='https://foodistanweb.herokuapp.com/api/';

  constructor(public http: Http ) {
    console.log('Hello AuthProvider Provider');
  }

  createAutherizedHeader(headers:Headers){
    headers.append('Auherization',window.localStorage.getItem('token'));
  }

 private(){
   let headers=new Headers();
   this.createAutherizedHeader(headers);
   return this.http.get(this.baseUrl+'private',{
  headers:headers
   }).map(res=>res.json());
 }

 login(data){
   return this.http.post(this.baseUrl+"auth/local",data)
   .map(this.extractdata);
 }

 private extractdata(res:Response){

  let body=res.json();
 
  if(body.success==true){

    window.localStorage.setItem('token',body.token);

  };
  return body || {};
  }
isLogged(){
  if(window.localStorage.getItem('token')){
    return true;
  }
  else{
    return false;
  }
}

logout(){
  window.localStorage.removeItem('token');
  return true;
}

signup(RegistrationForm) {
 
  console.log(RegistrationForm)
 
  let headers = new Headers({ 'Content-Type': 'application/json' });
 
  let options = new RequestOptions({ headers: headers });
 
  return this.http.post('https://foodistanweb.herokuapp.com/api/users', RegistrationForm, options)
 
  .map(res => {
 
    console.log(res.json())
 
    return res.json()
 
  })
 
  .catch((err) => {
 
    console.log(err.json)
 
    return err.json()
 
  })

}

getToken(){
  return localStorage.getItem('token');
}

isAuthenticated(){

  const token =this.getToken();
  if(token){
    
    return true;
  
  }
  else{
    
    return false;
 
}

}

}
