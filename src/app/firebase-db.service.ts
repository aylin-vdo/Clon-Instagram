import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {AngularFireDatabase} from '@angular/fire/compat/database';
import { ConnectableObservable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private http: HttpClient, private dbFirebase: AngularFireDatabase) { }

  //GET

  getPublicacionesFirebase() {
    return this.dbFirebase.list('publicaciones').valueChanges();
  }
  getPublicaciones(){
    return this.http.get('https://parcial2-893ad-default-rtdb.firebaseio.com/publicaciones.json')
  }

  getBioUsuario(){
    return this.http.get('https://parcial2-893ad-default-rtdb.firebaseio.com/usuario.json')
  }

  getUsuario(){
    return this.http.get('https://parcial2-893ad-default-rtdb.firebaseio.com/usuario/alias.json')
  }

  getFotoPerfil() {
    return this.http.get('https://parcial2-893ad-default-rtdb.firebaseio.com/usuario/fotoPerfil.json')
  }

  getPublicacionDetalle(idPublicacion: string){
    return this.http.get('https://parcial2-893ad-default-rtdb.firebaseio.com/publicaciones' + idPublicacion + '.json')
  }

  getGaleriaUsuario(){
    //return this.http.get()
  }

  getStories() {
    return this.http.get('https://parcial2-893ad-default-rtdb.firebaseio.com/historias.json')
  }


  //DELETE
  deletePublicacion(idPublicacion: number){
    return this.http.delete('https://parcial2-893ad-default-rtdb.firebaseio.com/publicaciones/'+ idPublicacion.toString() +'.json')
  }

  //UPDATE
  updatePublicacion(){}

  updateBioUsuario(nuevaBio: string){
    return this.http.put('https://parcial2-893ad-default-rtdb.firebaseio.com/usuario/bio.json', nuevaBio);
  }

  //POST
  postPublicacion(post: any){
    return this.http.post('https://parcial2-893ad-default-rtdb.firebaseio.com/usuario/publicaciones.json', post)
  }

  postComment(comentario: string, publicacion: number) {
    return this.http.put('https://parcial2-893ad-default-rtdb.firebaseio.com/publicaciones/'+ publicacion.toString() + '/comentario.json', comentario)
  }

}
