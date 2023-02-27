import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object',
  standalone: true,
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  @Input() dorso1!: string;
  @Input() ido!: number;
  dorso0 = "imgs/dorso2.jpg";
  dorso = this.dorso0;
  nocolapsado = 1;
  actual = '';

  constructor() { }

  ngOnInit() {
  }
  cambia() {
    if(this.dorso==this.dorso0){this.dorso=this.dorso1;}else{this.dorso=this.dorso0;}

    /*console.log(this.ido," ",this.dorso1);
    if (this.nocolapsado) {
      this.actual = this.estado.seleccionado;
      console.log(" 1",this.actual);
      if ((this.actual = '')) {
        this.estado.valSel(this.dorso1);
      } else {
        if (this.actual != this.dorso1) {
          this.dorso = this.dorso1;
          setTimeout(this.saludos, 400);
          this.dorso = this.dorso0;
        } else {
          this.nocolapsado = 0;
          this.dorso = this.dorso1;
        }
      }
    }*/
  }
}