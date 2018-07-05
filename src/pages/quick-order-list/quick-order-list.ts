import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { MainPage} from '../Main/Main';
/**
 * Generated class for the QuickOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quick-order-list',
  templateUrl: 'quick-order-list.html',
})
export class QuickOrderListPage {
quickOrderList=[];
  constructor(public nav:Nav,public navCtrl: NavController, public navParams: NavParams,public http:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickOrderListPage');
  }

  ionViewDidEnter(){
    
        this.http.getAllQuickOrdersList()
        .subscribe(
          res =>{
          this.quickOrderList= res.data;
          console.log(this.quickOrderList);
    
         
        }, 
      error =>{
        console.log(error);
      })

      }  

      returnMainPage(){
        this.nav.setRoot(MainPage);
      }


}
