import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallApiProvider } from '../../providers/call-api/call-api';
import { ManageProductPage } from '../manage-product/manage-product';

/**
 * Generated class for the InfoManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-manage',
  templateUrl: 'info-manage.html',
})
export class InfoManagePage {
  id : string
  product : FormGroup

  constructor(public callApi: CallApiProvider, public fb: FormBuilder ,public navCtrl: NavController, public navParams: NavParams) {
    this.product = fb.group ({
      'id' : null,
      'productName' : [null, Validators.required],
      'price' : [null, Validators.required],
      'amount' : 0
    })
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad InfoManagePage');
    this.id = this.navParams.get('id');
    console.log(this.id);
    this.getProductById()
  }

  getProductById() {
    this.callApi.GetbyId(this.id).subscribe(data =>
      {
        this.product.setValue(data);
        console.log(this.product.value);
      })
  }

  deleteProduct(id : string) 
  {
    // Delete Product
    this.callApi.DeleteProduct(id).subscribe(data => {
      this.navCtrl.pop();
    })
  }

  putProduct()
  {
    this.navCtrl.push('PutProductPage', {product : this.product.value});
  }
}
