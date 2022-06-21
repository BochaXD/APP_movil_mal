import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataLocalService } from '../services/data-local.service';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  mapa: Mapboxgl.Map;
  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
    container: 'mapa-mapbox',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [-78.4305382,-0.1865944 ],//lng, lat
    zoom: 16


    });
    this.crearMArcador(-78.4305382,-0.1865944 );
    
  }
  crearMArcador(lng:number, lat:number){
    const marker = new Mapboxgl.Marker({
      draggable: true
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
      marker.on('drag',()=>{
        console.log(marker.getLngLat());
      })
  }

  constructor(public dataLocal:DataLocalService) {}


  abrirRegistro(registro){
    console.log(registro);
  }
  
  ionViewWillEnter(){
    console.log("TAB2: viewWillEnter");
  }
  ionViewDidEnter(){
    console.log("TAB2: viewDidEnter");
  }
  ionViewWillLeave(){
    console.log("TAB2: viewWillLeave");
  }
  ionViewDidLeave(){
    console.log("TAB2: viewDidLeave")
  }
}
