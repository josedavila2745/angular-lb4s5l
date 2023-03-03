import { Component,  OnInit, Input,Output, EventEmitter, DoCheck  } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import{Edo} from '../models'

@Component({
  selector: 'app-object',
  standalone: true,
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit, DoCheck{
  @Input() ido!     : number;
  @Input() img!     : number;
  @Input() frente!  : string;
  @Input() dorso1!  : number;
  @Output() clickado = new EventEmitter<string>();
  dorso:string=''
  dorso0 = "https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fdorso2.jpg?alt=media&token=31b763f4-cfc5-4780-baae-9add3b291eb3";
  frontal = this.frente; 
  private mvistas:number[];
  vists:number[]=[];



  nocolapsado = 1;
  endorso = 1;
  clicks:Edo[];
  click1:Edo;
  click2:Edo;
  constructor(public edo: EstadoService) { }

  ngDoCheck(): void {
 /*this.dorso=(this.endorso)?this.dorso0:this.frontal;
 if(this.endorso==0){
 let jj= this.mvistas=this.edo.getVistas();
 this.dorso=this.dorso0;
 if(jj[this.ido]==1){this.dorso=this.frontal};
 this.endorso=1;
 }*/
}
  ngOnInit(){
    if(this.dorso1){
      this.dorso= this.dorso0;
      this.dorso= this.frontal;
    }else{
      this.dorso= this.dorso0;
    }

   // this.dorso = (this.dorso1) ? this.frontal : this.dorso0;
    

  }
  fueClickado() {
      this.clicks=this.edo.getEstado();
      //console.log("clicks: ", this.clicks); 
      let long=this.clicks.length;
      if(this.clicks[long-1].ido!=this.ido){
        this.dorso=this.frente;
        for(let i=1; i<2000;i++){
          let y=0;
        }
        console.log("cuentas: ", this.clicks[long-1].conteo); 
        this.edo.setEstado({conteo:(this.clicks[long-1].conteo+1),img:this.img,ido:this.ido});
        //setTimeout(this.cambia, 500);
        this.mvistas=this.edo.getVistas();
        if(this.clicks[long-1].img==this.img)
            {
              let obj1=this.clicks[long-1].ido; let obj2=this.ido;
              this.mvistas[obj1]=1; this.mvistas[obj2]=1;
              
            }
        if (this.clicks[long-1].conteo==1){this.edo.setEstado({conteo:0,img:-1,ido:-1});}
        this.edo.setVistas(this.mvistas);
        this.clickado.emit(" ");        
        this.endorso=0;
       }
      


  }

 
 /* ngDoCheck() {


    if(this.endorso==0){
      this.dorso=this.dorso0;
    }
    if(this.nocolapsado){
      this.clicks=this.edo.getEstado();
      //console.log("clicks: ", this.clicks); 
      let long=this.clicks.length;
      let ult=this.clicks[long-1].ido
      let van=this.clicks[long-1].conteo
      if( van > 1 && ult==this.ido ){ 
        console.log("entro ",this.ido);       
        if(this.clicks[long-1].img!=this.clicks[long-2].img){
          this.dorso=this.dorso0
        }else{
          console.log("Obj: ", this.ido,"Van: ", van, "imags: ", this.clicks[long-1].img," - ", this.clicks[long-2].img ); 
        }
        console.log("Obj: ", this.ido,"Van: ", van, "imags: ", this.clicks[long-1].img," - ", this.clicks[long-2].img ); 
        this.edo.setEstado({conteo:0,img:-1,ido:-1});
      }
    }*/

    /*/
    if(long>1){
      
      if(this.click1.img!=this.click2.img ){
        this.cambia();  
      }
           this.click1=this.clicks[long-2];this.click2=this.clicks[long-1];
        this.edo.setEstado({conteo:0,img:-1,ido:-1});
        if(this.click1.img==this.click2.img && this.click1.img==this.img ){
          this.nocolapsado=0;
        }else{
          this.dorso=this.dorso0;
          this.edo.setEstado({conteo:0,img:-1,ido:-1});
        }
 
    }

  }*/
  cambia() {
    this.endorso=0;
    this.dorso=this.dorso0;


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