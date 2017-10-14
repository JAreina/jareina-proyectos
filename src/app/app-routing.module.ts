import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosRealizadosComponent } from './componentes/proyectos-realizados/proyectos-realizados.component';
import { SliderProyectosComponent } from './componentes/slider-proyectos/slider-proyectos.component';


const routes: Routes = [

  {
    path: 'slider/:id',
    component: SliderProyectosComponent,
    
  },
  {
    path: 'proyectosrealizados',
    component: ProyectosRealizadosComponent,
    
  },
  {
    path:'**',
    redirectTo:'proyectosrealizados',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
