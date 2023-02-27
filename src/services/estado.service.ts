import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private estado:number=0;

  constructor() { }
  public setEstado(v:number):void{
      this.estado=v;
  }
  public getEstado():number{
    return(this.estado);}

}