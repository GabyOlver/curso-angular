import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular';
}
  // Propiedad selector con valor app-root, este valor es el que usa para llamar al componente
 
  //la propiedad templateUrl se asigna una direccion de un html cada que se llama a app-root se llama al doc html y desde ahi se muestra el contenido, 
  //Todo el contenido se puede mostrar desde el archivo typescript para eso se usa unicamente template
  //template permite definir el html directamente desde este componente por ejemplo:
  
  // template: `
  // <h1> Curso de Angular </h1>
  // `,
 
//   styles: [`
//   h1 {
//     color: blue;
//   }
//  `]
  // Ocurre lo mismo en styleUrls que en templateUrls
