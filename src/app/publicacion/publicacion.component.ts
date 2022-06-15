import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [{
        "usuario": "@polaroid333",
        "imagen": "../assets/imagenes/1.jpg",
        "caption": "holaa",
        "comentario": "", 
        "id": "01"
    },
    {
        "usuario": "@polaroid333",
        "imagen": "../assets/imagenes/2.jpg",
        "caption": "que bonito dia",
        "comentario": "", 
        "id": "02"
    },
    {
        "usuario": "@polaroid333",
        "imagen": "../assets/imagenes/3.jpg",
        "caption": "de vacaciones...",
        "comentario": "", 
        "id": "03"
    }
];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
