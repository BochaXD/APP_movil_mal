import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner:BarcodeScanner, private dataLocal:DataLocalService) {}

  ionViewWillEnter(){
    console.log("TAB1: viewWillEnter Preparando Info.");
  }
  ionViewDidEnter(){
    console.log("TAB1: viewDidEnter  App cargado");
    this.scann();
  }
  ionViewWillLeave(){
    console.log("TAB1: viewWillLeave Cerrando componentes");
  }
  ionViewDidLeave(){
    console.log("TAB1: viewDidLeave Cerrando App")
  }
  scann(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);
      this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
     }).catch(err => {
       this.dataLocal.guardarRegistro('https','https://www.ups.edu.ec');
         console.log('Error', err);
     });
  }
}
