import { Injectable } from '@angular/core';

@Injectable()
export class EstadoService {
  private estado=0;

  constructor() { }
  public setEstado:void(v:number){
      this.estado=v;
  }
  public getEstado:number(){
    return(this.estado);}

}