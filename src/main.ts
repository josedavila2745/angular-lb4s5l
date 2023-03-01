import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ObjectComponent } from './object/object.component';
import { ImgsType } from './models';
import { EstadoService } from './services/estado.service';

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
  anterior=-1;  actual=-1;
  constructor(private vvistas: EstadoService) {
    vvistas.getVistas
   }

  ngOnInit() {
    this.imgs=this.vvistas.getvVistas();
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

  addItem(newItem: string) {
    //console.log("Ta:  ",newItem);
    this.actual=parseInt(newItem);
    if (this.items.length!=0){
      this.anterior=this.items[this.items.length]
    }
    this.items.push(this.actual);

  }

}

bootstrapApplication(App);
