import { Routes } from '@angular/router';
import { ListadoRecetasComponent } from './listado-recetas/listado-recetas.component';
import { FormNuevaRecetaComponent } from './form-nueva-receta/form-nueva-receta.component';
export const routes: Routes = [

    {path: 'lista-Recetas', component: ListadoRecetasComponent},
    {path: 'nueva-receta', component: FormNuevaRecetaComponent}

];
