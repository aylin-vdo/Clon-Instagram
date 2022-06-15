import { Component, OnInit } from '@angular/core';

import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {

  constructor(private db: FirebaseDbService) { }

  ngOnInit(): void {
    this.db.getStories().subscribe(res => {
      this.historias = res;
    })
  }

  historias: any = [];

  mostrarHistorias(): any {
    
  }

}
