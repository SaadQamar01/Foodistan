import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav,AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CategoriesPage } from '../categories/categories';
import {FoodPage} from '../food/food';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  addCardTrue: boolean = false;
  totalAmmount: number = 0;
  itemQuantity = 0;
  price =100;

  ProductArray = [];
  dummydata = {name:"abc"};
dummydata1:any;
foodPrice:any;
  constructor(public altCrtl:AlertController,public nav: Nav, public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
     this.foodPrice = localStorage.getItem('foodPrice');
    this.price=this.foodPrice;
    this.dummydata1 = localStorage.getItem('foodName');


    
  }

  returnCatPage() {
    this.nav.setRoot(FoodPage);
  }

  addToCard(){
    if(this.itemQuantity<=0){
      this.addCardTrue=false;
    }
    else{
    this.addCardTrue = true;
    // this.itemQuantity
    }
  }
  add() {
    this.itemQuantity++;
    this.totalAmmount = this.itemQuantity * this.price;
  }
  subtract() {
    if(this.itemQuantity<=0){
      this.itemQuantity=0;
    }
   else {
    this.itemQuantity--;
    this.totalAmmount = this.totalAmmount-this.price;
    }
  }

  sendQuickOrder()
{
  this.http.createQuickOrder(this.price,this.itemQuantity)
  .subscribe(
    
          data=>{
            console.log(data);
           
            let alert=this.altCrtl.create({
              
                          title:' Congrate Order is  send Successfully!',
                          buttons:['Ok']
                        })
              
                        alert.present();
          }
          ,
          err => {
              console.log(err) 
            
              let alert=this.altCrtl.create({
                
                            title:' Sorry Order is not send Unsuccessfully! ',
                            buttons:['Ok']
                          }
                        )
               
                alert.present();
            
            }
        );
       
}
}
