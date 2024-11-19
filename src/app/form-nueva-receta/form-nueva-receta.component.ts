import { Component, inject } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';
import { Receta } from '../modelos/receta';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-nueva-receta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-nueva-receta.component.html',
  styleUrl: './form-nueva-receta.component.css'
})
export class FormNuevaRecetaComponent {

  recetasSvc = inject(RecetasService);

  bocadillos: Receta = {
    nombre: '',
    ingredientes: '',
    imagen: '',
    pasos: ''
  };
    
  addReceta(){
    console.log("Se ha creado una nueva receta");
    this.recetasSvc.createReceta(this.bocadillos);
  }

}
