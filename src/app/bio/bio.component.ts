import { Component, OnInit } from '@angular/core';
import * as data from '../datos.json';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit(): void {
  }

  //datos: data = {}

  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  usuario = {
    "nombre":"alicia",
    "alias": "@polaroid333",
    "fotoPerfil": "../assets/imagenes/perfil.jpg",
    "seguidores": 100,
    "seguidos": 1,
    "bio": "buenos dias!", 
    "publicaciones": [
      "../assets/imagenes/1.jpg",
      "../assets/imagenes/2.jpg",
      "../assets/imagenes/3.jpg"
    ]
  }

  async createActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Cancelar', 
        role: 'cancel'
      },
      {
        text: 'Bloquear usuario', 
        role: 'destructive'
      }]
    });

    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {
    
  }

  enviarEmail(): void {

  }

  desplegarOpciones(): void {
    //En proceso.
  }


}
