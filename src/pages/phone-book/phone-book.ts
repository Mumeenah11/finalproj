import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name:'Daniel',telephone:'0950682152',imageUrl:'assets/imgs/44.jpg'}
    ,{name:'Minhyun',telephone:'0916439177',imageUrl:'assets/imgs/2.jpg'}
    ,{name:'Sakura',telephone:'0884882209',imageUrl:'assets/imgs/3.jpg'}
    ,{name:'Irene',telephone:'0828267693',imageUrl:'assets/imgs/444.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
