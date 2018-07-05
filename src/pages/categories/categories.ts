import { Component } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams,LoadingController } from 'ionic-angular';
import { MainPage} from '../Main/Main';
import { SaladsPage } from '../salads/salads';
import { HttpProvider } from '../../providers/http/http';
import { FoodPage} from '../food/food';
import { CartPage} from '../cart/cart';



/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  catArray=[];

  constructor(public http:HttpProvider,public navCtrl: NavController, public navParams: NavParams ,public nav:Nav,public loadingCrtl:LoadingController,private service:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');

    

  }
  ionViewDidEnter(){
    
        this.http.getCatByRestId()
        .subscribe(
          res =>{
          this.catArray= res.data;
          console.log(this.catArray);
    
         
        }, 
      error =>{
        console.log(error);
      })
      }  


  returnMainPage(){

    this.nav.setRoot(MainPage);

  }

  presentLoading() {
    this.loadingCrtl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();

    
  }

  openSubCat(category){

  console.log(category);
  
    localStorage.setItem('category', JSON.stringify(category));
    this.nav.setRoot(FoodPage);
    
    
  }

  // showCatId(id){
    
  //   localStorage.setItem('catId',id);
  // }

// get(){
//   this.service.getPaginatedCategory().subscribe(data=>{
//     console.log(data);
    
//   },

//   err=>{
//     console.error(err,"err");
//   }

// )
// }



}
