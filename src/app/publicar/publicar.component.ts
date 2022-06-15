import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { FirebaseDbService } from '../firebase-db.service';

import {AngularFireStorage} from '@angular/fire/compat/storage';

import { Publicacion } from '../models/publicacion';
import { CamaraService } from '../servicios/camara/camara.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  constructor(
    private db: FirebaseDbService, 
    private storage: AngularFireStorage, 
    private camara: CamaraService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //Formulario 
  /* publicarForm = new FormGroup({
    caption :new FormControl(),
    comentario :  new FormControl(),
    id :  new FormControl(),
    imagen : new FormControl(),
    usuario :  new FormControl()
  }) */

  publicarForm = this.fb.group({
    caption: "", 
    comentario: "", 
    id:"", 
    imagen: "", 
    usuario: ""
  })

  nuevoPost: any = {
    caption: "",
    comentario: "", 
    id: "", 
    imagen: "", 
    usuario: ""
  }

  
  /* subirFoto(event: any) {
    const foto : File = event.target.files[0];

    console.log(foto);
  } */

  capturarFoto() {
    this.camara.tomarFoto();
  }

  publicar(){

    let nPost = this.nuevoPost;
    console.log(this.fb)
    this.db.postPublicacion(this.publicarForm).subscribe(res => {
      console.log("Se publico!");
    })
  }

}
