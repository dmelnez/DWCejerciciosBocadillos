import { Injectable } from '@angular/core';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private bocadillos: Receta[] = [
    {nombre: 'Bocadillo de Atum', ingredientes: 'Atum, pan',imagen: '', pasos: ''},
    {nombre: 'Bocadillo de Salmon', ingredientes: 'Salmon, pan',imagen: '', pasos: ''},
    {nombre: 'Bocadillo Vegetal', ingredientes: 'Tomate, pan',imagen: '', pasos: ''},
    {nombre: 'Bocadillo Italiano', ingredientes: 'Salsa italiana, pan',imagen: '', pasos: ''},
    {nombre: 'Bocadillo Cochinito', ingredientes: 'Cochinito, pan',imagen: '', pasos: ''},
  ];


  createReceta(bocadillos: Receta){
   this.bocadillos.push(bocadillos);
  }

  readReceta(): Receta[]{
    return this.bocadillos;
  }

}
