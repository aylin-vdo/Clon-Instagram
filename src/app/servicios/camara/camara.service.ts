import { Injectable } from '@angular/core';

// import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// import { Capacitor } from '@capacitor/core';
// import { Share } from '@capacitor/share';
// import { Plugins } from '@capacitor/core';


import { Camera , CameraOptions } from '@awesome-cordova-plugins/camera/ngx';


@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(
    private camera: Camera
  ) { }

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imagenData) => {
        var imagen = imagenData.webPath; //puedes usarlo como src en un visualizador de fotos
      },
      (err) => {
        console.log("Problemas tecnicos ", err)
      }
    )
  }
  
}
//   checkPlatformForWeb() {
//     if(Capacitor.getPlatform() == 'web') return true;
//     return false;
//   }

//   async tomaFoto() {
//     //const estado = await Camera.requestPermissions(); // Not implemented for web
//     const imagen = await Camera.getPhoto({
//       quality: 90, 
//       source: CameraSource.Camera,  //Camera o Photos
//       width: 600,
//       resultType: CameraResultType.Uri
//     });

//     console.log(imagen, "imagen");

//     //var imagenUrl = imagen.webPath;

// //para poner como src en un visor de foto
//     // let shareRet = await Share.share({
//     //   title: 'Foto',
//     //   text: 'Preview',
//     //   url: this.selectImagen,
//     //   dialogTitle: 'Preview de foto'
//     // })
//   }

