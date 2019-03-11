import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the ManageProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-product',
  templateUrl: 'manage-product.html',
})
export class ManageProductPage {
  product : any

  constructor(public callApi: CallApiProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ManageProductPage');
    this.getAll();
  }

  getAll()
  {
    this.callApi.GetAll().subscribe(data => {
      this.product = data;
      //แสดงรายการสินค้า
    })
  }
}
