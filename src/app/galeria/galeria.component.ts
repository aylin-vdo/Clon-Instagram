import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

  usuario = {
    "nombre":"alicia",
    "alias": "@polaroid333",
    "fotoPerfil": "../assets/imagenes/perfil.jpg",
    "seguidores": 100,
    "seguidos": 1,
    "bio": "buenos dias!", 
    "publicaciones": [ {
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
    ]
  }

}
