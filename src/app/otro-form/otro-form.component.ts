import { Component } from '@angular/core';

@Component({
  selector: 'app-otro-form',
  templateUrl: './otro-form.component.html',
  styleUrls: ['./otro-form.component.css']
})
export class OtroFormComponent {

  persona = {
    nombre: '',
    edad: ''
  }

  procesar() {
    console.log(this.persona)
  }
  
}
