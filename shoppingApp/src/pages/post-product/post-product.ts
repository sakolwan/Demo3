import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the PostProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-product',
  templateUrl: 'post-product.html',
})
export class PostProductPage {
  newProduct: FormGroup;

  constructor(public callApi: CallApiProvider ,public fb: FormBuilder ,public navCtrl: NavController, public navParams: NavParams) {
    this.newProduct = fb.group ({
      'id' : null,
      'productName' : [null, Validators.required],
      'price' : [null, Validators.required],
      'amount' : 0
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostProductPage');
  }

  postProduct() {
    this.callApi.PostProduct(this.newProduct.value).subscribe(data => {
      console.log("Create.");
      this.navCtrl.pop();
    });
  }
}
