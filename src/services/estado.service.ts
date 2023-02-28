import { Injectable } from '@angular/core';
import{Edo} from '../models'

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private estado:Edo[];

  constructor() { 
    this.estado.push({conteo:0,hist:-1})
  }
  public setEstado(v:Edo):void{
      this.estado.push(v);
  }
  public getEstado():Edo[]{
    return(this.estado);}

}