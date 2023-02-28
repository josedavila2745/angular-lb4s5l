import { Component, Input, DoCheck } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import{Edo} from '../models'

@Component({
  selector: 'app-object',
  standalone: true,
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent {
  @Input() dorso1!: string;
  @Input() ido!: number;
  @Input() img!: number;
  @Output() clickado = new EventEmitter<string>();
  dorso0 = "https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fdorso2.jpg?alt=media&token=31b763f4-cfc5-4780-baae-9add3b291eb3";
  dorso = this.dorso0;
  nocolapsado = 1;
  endorso = 1;
  clicks:Edo[];
  click1:Edo;
  click2:Edo;
  constructor(public edo: EstadoService) { }
  fueClickado() {
    this.clicks=this.edo.getEstado();
    console.log("clicks: ", this.clicks); 
    let long=this.clicks.length;
    if(this.clicks[long-1].ido!=this.ido){
      this.dorso=this.dorso1;
      this.edo.setEstado({conteo:(this.clicks[long-1].conteo+1),img:this.img,ido:this.ido});
    }
    /*this.clickado.emit(this.img.toString());

    if(long==0){
      this.cambia();
      this.edo.setEstado({conteo:1,img:this.img,ido:this.ido});
      this.endorso=0;
    }else{
      if(long==1){
        if(this.endorso){
          if(this.clicks[long-1].img==this.img){
            this.cambia();
            this.edo.setEstado({conteo:0,img:this.img,ido:this.ido});
            this.nocolapsado=0;
          }else{
            this.cambia();
            setTimeout(this.cambia,600);
            this.edo.setEstado({conteo:0,img:this.img,ido:this.ido});
          }
        }
      }else{
        if(this.clicks[long-1].conteo==0){
          this.cambia();
          this.edo.setEstado({conteo:0,img:this.img,ido:this.ido});
          this.endorso=0;
        }else{
          if(this.clicks[long-1].img==this.img){
            this.cambia();
            this.edo.setEstado({conteo:0,img:this.img,ido:this.ido});
            this.endorso=0;
            this.nocolapsado=0;
          }else{
            this.cambia();
            setTimeout(this.cambia,600);
            this.edo.setEstado({conteo:0,img:this.img,ido:this.ido});
            this.endorso=1;
          }

        }
      }
    }*/
  }
  ngDoCheck() {
    if(this.nocolapsado){
      this.clicks=this.edo.getEstado();
      console.log("clicks: ", this.clicks); 
      let long=this.clicks.length;
      if(this.clicks[long-1].conteo==2){
        this.click1=this.clicks[long-2];this.click2=this.clicks[long-1];
        this.edo.setEstado({conteo:0,img:-1,ido:-1});
        if(this.click1.img==this.click2.img && this.click1.img==this.img ){
          this.nocolapsado=0;
        }else{
          this.dorso=this.dorso1;
          this.edo.setEstado({conteo:0,img:-1,ido:-1});
        }
      }
    }

    /*/
    if(long>1){
      
      if(this.click1.img!=this.click2.img ){
        this.cambia();  
      }
   
 
    }*/

  }
  cambia() {
    if (this.nocolapsado) {
      if(this.dorso==this.dorso0){this.dorso=this.dorso1;}else{this.dorso=this.dorso0;}
    }


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