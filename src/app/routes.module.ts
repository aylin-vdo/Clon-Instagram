import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import  { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicarComponent } from './publicar/publicar.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'publicacion/:id', component: PublicacionComponent },
  {path:  'publicar', component: PublicarComponent},
  { path: '**', component: FeedComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ], 
  exports: [RouterModule]
})
export class RoutesModule { }
