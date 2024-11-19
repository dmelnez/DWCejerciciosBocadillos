import { Component, inject, OnInit } from '@angular/core';
import { RecetasService } from '../servicios/recetas.service';
import { Receta } from '../modelos/receta';
@Component({
  selector: 'app-listado-recetas',
  standalone: true,
  imports: [],
  templateUrl: './listado-recetas.component.html',
  styleUrl: './listado-recetas.component.css'
})
export class ListadoRecetasComponent implements OnInit {

  recetasSvc = inject(RecetasService);

  bocadillos: Receta[] = [];

  ngOnInit(): void {
    this.bocadillos = this.recetasSvc.readReceta();
  }

}
