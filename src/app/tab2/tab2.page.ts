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
    maxBounds: [[ -78.50878781934509,-0.3808794195634348], [ -78.50310056352627,-0.3732155940661458]], //lng, lat
    zoom: 1



    });
    this.crearMArcador( -78.50643383611002,-0.37674950344226943 );
    this.tienda1(-78.50389893796621,-0.37720985274169255 );
    this.tienda2( -78.50727362620276,-0.37642253902698697);
    this.tienda3(  -78.50542359900403,-0.3764608146262333);
    this.tienda4(-78.50579360444378,-0.37722632657567795);
    this.tienda5( -78.50496428190641,-0.37549116606047184);
    
    
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
  tienda1(lng:number, lat:number){
    const tienda1 = new Mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.mapa);

  }
  tienda2(lng:number, lat:number){
    const tienda1 = new Mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.mapa);

  }
  tienda3(lng:number, lat:number){
    const tienda1 = new Mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.mapa);

  }
  tienda4(lng:number, lat:number){
    const tienda1 = new Mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.mapa);

  }
  tienda5(lng:number, lat:number){
    const tienda1 = new Mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(this.mapa);

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
