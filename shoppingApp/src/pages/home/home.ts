import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallApiProvider } from '../../providers/call-api/call-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  product : any

  constructor(public callApi: CallApiProvider, public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.getAll();
  }

  getAll()
  {
    this.callApi.GetAll().subscribe(data => {
      this.product = data;
      //แสดงรายการสินค้า
    })
  }

goManagePage()
{
  this.navCtrl.push('ManageProductPage');
}
}
