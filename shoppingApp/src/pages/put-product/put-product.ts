import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the PutProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-put-product',
  templateUrl: 'put-product.html',
})
export class PutProductPage {
  newProduct : FormGroup

  constructor(public callApi: CallApiProvider ,public fb: FormBuilder ,public navCtrl: NavController, public navParams: NavParams) {
    this.newProduct = fb.group ({
      'id' : null,
      'productName' : [null, Validators.required],
      'price' : [null, Validators.required],
      'amount' : 0
    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad PutProductPage');
    let oldProduct = this.navParams.get('product');
    this.newProduct.setValue(oldProduct);
    console.log(this.newProduct.value);
  }

  putProduct()
  {
    this.callApi.PutProduct(this.newProduct.value).subscribe(data => {
      console.log("put product");
      this.navCtrl.push('ManageProductPage');
    })
  }
}
