import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import {FoodPage} from '../food/food';

/**
 * Generated class for the CustomFoodItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-food-item',
  templateUrl: 'custom-food-item.html',
})
export class CustomFoodItemPage {
  addCardTrue: boolean = false;
  
  totalAmmount:number = 0;
  quantityTotal=0;
  foodItemsArray=[];
  dummydata2:any;
  foodPrice:any;
  price: number =100;
  price1=0;
  itemQuantity = 0;
  foodItemQuantity = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    items=[];

  
  constructor(public altCrtl:AlertController,public nav:Nav,public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomFoodItemPage');
    this.foodPrice = localStorage.getItem('foodPrices');
    this.price= this.foodPrice;
    console.log("Food Price",this.price);    
    this.dummydata2 = localStorage.getItem('foodNames');
    console.log("FoodName",this.dummydata2);

  }

  returnCatPage() {
    this.nav.setRoot(FoodPage);
  }


  ionViewDidEnter(){
    
        this.http.getAllItemsByFoodId()
        .subscribe(
          res =>{
          this.foodItemsArray= res.data;
          console.log(this.foodItemsArray);
          
         
        }, 
      error =>{
        console.log(error);
      })

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
       console.log("total amount", this.totalAmmount, this.price);
        this.totalAmmount = this.totalAmmount + Number(this.price);
    
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
    
sum(index){
  
  if(!this.foodItemsArray[index]['quantity'])
    this.foodItemsArray[index]['quantity'] = 0;
  //re kar
  //aisBe likha ka ab bolo JAB NECHAY WALA TB CHALY JAB UPER WALY QUANTITY 1 HO WRNA NECHAY WALA KAAM NA KAR bhai yeh cheez ab nhi kar skte puri logic change karni par jaegi balke kar deta hu
// bt sn uper wala add nhe hota deakh me deakha tha hu n
  if(index > 0)
  {  
    if(this.foodItemsArray[index-1]['quantity'] > 0 && this.foodItemsArray[index-1]['quantity'])
    { 
      this.foodItemsArray[index]['quantity']+=1;

      this.quantityTotal+=this.foodItemsArray[index].price;
      this.totalAmmount += this.quantityTotal; 
    }
  }
  //RE kar BT SUN MINUS KE WAJA SE AMOUNT - ME JA RAHA HAI NECHAY WALY ok samajh gaya apka bhund NECAHY  han han
    //BHai tor de ionic ko :@ HAHA  KIA KRU ME 2 DIN SE LAGA HUNAWA HA ruk jaa re kar le ho jaega
  else{
    this.foodItemsArray[index]['quantity']+=1;
    this.totalAmmount+=this.foodItemsArray[index].price;
  }

console.log(this.foodItemsArray[index]['quantity']);
  
  
  this.foodItemQuantity[index] = this.foodItemsArray[index]['quantity'];
  
  
    
  
    
  
}

minus(index){
  if(!this.foodItemsArray[index]['quantity']||this.foodItemsArray[index]['qunatity']==0){

    this.foodItemsArray[index]['quantity']=0;
    
  }
  else if(this.totalAmmount < this.foodItemsArray[index].price){
    this.foodItemsArray[index]['quantity']=0;
  }

  else{
    this.foodItemsArray[index]['quantity']-=1;
    this.foodItemQuantity[index] = this.foodItemsArray[index]['quantity'];
    this.totalAmmount-=this.foodItemsArray[index].price;
  }
  console.log(this.foodItemsArray[index]['quantity']);



  

}

sendCustomOrder()
{
  this.http.createCustomOrder(this.price,this.itemQuantity,this.foodItemsArray)
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
