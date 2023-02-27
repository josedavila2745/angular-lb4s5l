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
  styleUrls: ['./main.css']
})
export class App implements OnInit{
  name = 'Angular';
  title = 'mem-app';
  imgs: ImgsType[]=[];
  vala: number[][]=[];
  valo: number[][]=[];
  vals: number[]=[];
  items:number[] = [];
  anterior=-1;
  actual=-1;

  addItem(newItem: number) {
    this.actual=newItem;
    if (this.items.length!=0){
      this.anterior=this.items[this.items.length]
    }
    this.items.push(newItem);
    alert(this.items);
  }

  ngOnInit() {
    this.imgs=[
      {id:0,name:'Batido',                  url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbatido.png?alt=media&token=b4c6c9ec-e931-4ce2-a94d-a8e1e5083ea8'},
      {id:1,name:'Bicarbonato',             url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbicarbonato.png?alt=media&token=c8e96150-f7f5-44a5-961a-c23d09ca7617'},
      {id:2,name:'Biomegas',                url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbiomegas.png?alt=media&token=7c1623da-3eca-48cd-96be-38409216b564'},
      {id:3,name:'Biomegas Concentrado',    url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbiomegas_concentrado.png?alt=media&token=05d97e88-5596-4e14-bcaa-0cd9105b3f7f'},
      {id:4,name:'Colágeno',                url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fcolageno.png?alt=media&token=c88bfcf1-ce8b-4b75-bc71-d442d152d16e'},
      {id:5,name:'Dicloruro',               url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fdicloruro.png?alt=media&token=bfca5023-c8a9-4286-8ac2-e1d456343c59'},
      {id:6,name:'Moringa',                 url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fmoringa.png?alt=media&token=df3d0fda-8727-4393-aa36-fff93a94a2d3'},
      {id:7,name:'Nopaloe',                 url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fnopaloe.png?alt=media&token=e213a35e-dc7f-46c0-b760-4f3a34845473'},
      {id:8,name:'Nutrimax',                url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fnutrimax.png?alt=media&token=db8027b3-3628-4beb-a523-8c54d80db6b7'},
      {id:9,name:'Nutrinmunocan',           url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fnutrinmunican.png?alt=media&token=fdd063ad-2553-4cac-b072-94ec908232ee'},
      {id:10,name:'Sal de Maras',           url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fsal_de_maras.png?alt=media&token=574e27d8-e337-404d-8b63-a6f98cbc5a56'},
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
