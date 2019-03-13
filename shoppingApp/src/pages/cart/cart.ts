import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

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
  allCart : any
  total : any

  constructor(public callApi: CallApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CartPage');
    this.getAllCart()
  }

  getAllCart() {
    this.callApi.GetAllCart().subscribe(data => {
      this.allCart = data;

      var sum = 0;
      for (let index = 0; index < this.allCart.length; index++) {
        sum += (this.allCart[index].price * this.allCart[index].amount)
      }
      console.log(sum);
      this.total = sum;
    })
  }


}
