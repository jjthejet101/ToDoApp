import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
 
  name;
  status;
 
  constructor(public navParams: NavParams){
 
  }
 
  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.status = this.navParams.get('item').status;
  }
 
}