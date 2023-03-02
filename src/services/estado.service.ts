import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import{Edo, ImgsType} from '../models'

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
  private estado:Edo[]=[{conteo:0,img:-1,ido:-1}];
  private vistas:number[];
  private vistas$:Subject<number[]>;
  private vvistas:ImgsType[]=[
    {id:0,name:'Batido',                  url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbatido.png?alt=media&token=b4c6c9ec-e931-4ce2-a94d-a8e1e5083ea8'},
    {id:1,name:'Bicarbonato',             url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbicarbonato.png?alt=media&token=c8e96150-f7f5-44a5-961a-c23d09ca7617'},
    {id:2,name:'Biomegas',                url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbiomegas.png?alt=media&token=7c1623da-3eca-48cd-96be-38409216b564'},
    {id:3,name:'Biomegas Concentrado',    url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fbiomegas_concentrado.png?alt=media&token=05d97e88-5596-4e14-bcaa-0cd9105b3f7f'},
    {id:4,name:'Colágeno',                url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fcolageno.png?alt=media&token=c88bfcf1-ce8b-4b75-bc71-d442d152d16e'},
    {id:5,name:'Dicloruro',               url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fdicloruro.png?alt=media&token=bfca5023-c8a9-4286-8ac2-e1d456343c59'},
    {id:6,name:'Moringa',                 url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fmoringa.png?alt=media&token=df3d0fda-8727-4393-aa36-fff93a94a2d3'},
    {id:7,name:'Nopaloe',                 url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fnopaloe.png?alt=media&token=e213a35e-dc7f-46c0-b760-4f3a34845473'},
    {id:8,name:'Nutrimax',                url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fnutrimax.png?alt=media&token=db8027b3-3628-4beb-a523-8c54d80db6b7'},
    {id:9,name:'Nutrinmunocan',           url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fnutrinmunican.png?alt=media&token=fdd063ad-2553-4cac-b072-94ec908232ee'},
    {id:10,name:'Sal de Maras',           url:'https://firebasestorage.googleapis.com/v0/b/memoria-18394.appspot.com/o/imgs%2Fsal_de_maras.png?alt=media&token=574e27d8-e337-404d-8b63-a6f98cbc5a56'},
  ];
  
  constructor() {
    this.vistas=[];
    this.vistas$= new Subject();
  }
  public setEstado(v:Edo):void{
      this.estado.push(v);
  }
  public getEstado():Edo[]{
    return(this.estado);}
  
  public setVistas(v:number[]):void{
      this.vistas=v;
      this.vistas$.next(this.vistas);
  }
  public getVistas():number[]{
    return(this.vistas);}  
  
    public getVistas$():Observable<number[]>{
      return(this.vistas$.asObservable());}  

  public setvVistas(v:ImgsType[]):void{
      this.vvistas=v;
  }
  public getvVistas():ImgsType[]{
      return(this.vvistas);}  
  

}