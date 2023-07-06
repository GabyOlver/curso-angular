import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  persona = {
    nombre: '',
    edad: ''
  }

  procesar() {
    console.log(this.persona)
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
