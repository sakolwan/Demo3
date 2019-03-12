import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';

/**
 * Generated class for the InfoAddToCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-add-to-cart',
  templateUrl: 'info-add-to-cart.html',
})
export class InfoAddToCartPage {
  id : string
  // _id : string
  productName : string
  price : any
  amount : any
  // _amount : any
  product : FormGroup
  newProduct : FormGroup

  constructor(public callApi: CallApiProvider, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.product = fb.group ({
      'id' : null,
      'productName' : null,
      'price' : null,
      'amount' : 0
    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad InfoAddToCartPage');
    this.id = this.navParams.get('id');
    this.getProductById();
    console.log(this.id);
    // this._id = this.navParams.get('id');
    // this.productName = this.navParams.get('productName');
    // this.price = this.navParams.get('price');
    
    // console.log(this.productName);
    // console.log(this.price);
        
  }

  getProductById() {
    this.callApi.GetbyId(this.id).subscribe(data =>
      {
        this.product.setValue(data);
        console.log(this.product.value);

        // this.productName = this.navParams.get('productName');
        // this.price = this.navParams.get('price');
      })
  }

  // postCart() {
  //   this.newProduct = this.fb.group ({
  //     'id' : this.id,
  //     'productName' : this.productName,
  //     'price' : this.price,
  //     'amount' : this.amount
  //   })
  //   console.log(this.newProduct.value);
    
  //   // this.callApi.PostCart(this.newProduct.value).subscribe(data => {
  //   //   console.log(this.newProduct.value);
  //   // })
  //   // this.navCtrl.pop();
  // }
}
