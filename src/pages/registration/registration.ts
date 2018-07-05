import { Component } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams,AlertController,LoadingController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  registrationForm:FormGroup;
  userName:AbstractControl;
  email:AbstractControl;
  password:AbstractControl;
  data;
  constructor(public altCrtl:AlertController,private auth:AuthProvider,public fb: FormBuilder,public navCtrl: NavController, public navParams: NavParams,public nav:Nav,public loadingCrtl:LoadingController) {

this.createForm(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  openloginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  createForm(){

this.registrationForm=this.fb.group({

  userName:['',Validators.required],
  email:['',[Validators.required,Validators.minLength(12)]],
  password:['',[Validators.required,Validators.minLength(6)]]

});



this.userName=this.registrationForm.controls['userName'];
this.email=this.registrationForm.controls['email'];
this.password=this.registrationForm.controls['password'];

 
}

OpenLoginPage(){
  this.nav.push(LoginPage);
}

presentLoading() {
  this.loadingCrtl.create({
    content: 'Please wait...',
    duration: 5000,
    dismissOnPageChange: true
  }).present();
}

  onSignup(){
    this.data={
      userName:this.registrationForm.value.userName,
      email:this.registrationForm.value.email,
      password:this.registrationForm.value.password,
    }

    console.log(this.data);
    this.auth.signup(this.data)
    .map(
      data=>{console.log(data);return data;},
      err=>{console.log(err); return err;}
    ).subscribe(

      data=>{
        console.log(data);
       
        let alert=this.altCrtl.create({
          
                      title:' Congrate User is Successfully Registered!',
                      buttons:['Ok']
                    })
          
                    alert.present();
      }
      ,
      err => {
          console.log(err) 
        
          let alert=this.altCrtl.create({
            
                        title:' Sorry User is Unsuccessfully Registered! ',
                        buttons:['Ok']
                      }
                    )
           
            alert.present();
        
        }
    );
   

    
  }


}
