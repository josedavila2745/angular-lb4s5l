import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ObjectComponent } from './object/object.component';

interface ImgsType{
	id   :  number;
	name :  string;
  url  :  string;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,ObjectComponent],
  templateUrl: './main.html',
})
export class App implements OnInit{
  name = 'Angular';
  title = 'mem-app';
  imgs: ImgsType[]=[];
  vala: number[][]=[];
  valo: number[][]=[];
  vals: number[]=[];
  ngOnInit() {
    this.imgs=[
      {id:0,name:'Batido',                  url:'/imgs/batido.png'},
      {id:1,name:'Bicarbonato',             url:'/imgs/bicarbonato.png'},
      {id:2,name:'Biomegas',                url:'/imgs/biomegas.png'},
      {id:3,name:'Biomegas Concentrado',    url:'/imgs/biomegas_concentrado.png'},
      {id:4,name:'Colágeno',                url:'/imgs/colageno.png'},
      {id:5,name:'Dicloruro',               url:'/imgs/dicloruro.png'},
      {id:6,name:'Moringa',                 url:'/imgs/moringa.png'},
      {id:7,name:'Nopaloe',                 url:'/imgs/nopaloe.png'},
      {id:8,name:'Nutrimax',                url:'/imgs/nutrimax.png'},
      {id:9,name:'Nutrinmunocan',           url:'/imgs/nutrinmunican.png'},
      {id:10,name:'Sal de Maras',           url:'/imgs/sal_de_maras.png'},
    ];
    this.vala=this.imgs.map((e,index)=>[index, Math.random()]);
    this.valo=this.vala.sort(function(a, b){return a[1] - b[1]});
    for (var i = 0; i < 8; i++) {
      this.vals.push(this.valo[i][0]);
    }
    this.vala=this.vals.map(e=>[e, Math.random()]);
    this.valo=this.vala.sort(function(a, b){return a[1] - b[1]});
    for (var i = 0; i < 8; i++) {
      this.vals.push(this.valo[i][0]);
    }
  }

}

bootstrapApplication(App);
