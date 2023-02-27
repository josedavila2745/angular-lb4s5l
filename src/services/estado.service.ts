import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private estado:number[]=[];

  constructor() { }
  public setEstado(v:number):void{
      this.estado.push(v);
  }
  public getEstado():number[]{
    return(this.estado);}

}