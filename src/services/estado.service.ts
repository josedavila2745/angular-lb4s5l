import { Injectable } from '@angular/core';
import{Edo} from '../models'

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private estado:Edo[]=[{conteo:0,img:-1,ido:-1}];
  

  constructor() {}
  public setEstado(v:Edo):void{
      this.estado.push(v);
  }
  public getEstado():Edo[]{
    return(this.estado);}

}