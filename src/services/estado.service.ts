import { Injectable } from '@angular/core';

@Injectable()
export class EstadoService {
  private estado=0;

  constructor() { }
  public setEstado(v:number):void{
      this.estado=v;
  }
  public getEstado():number{
    return(this.estado);}

}