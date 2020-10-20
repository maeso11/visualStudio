import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  name = 'Maeso';
  url = 'https://www.google.es';
  activo = false;
  poblacion = 'Manzanares';
  codigoPostal = '13200';

  constructor() { }

  ngOnInit() {
  }

}
