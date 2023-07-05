import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

numero: number = 1;

decrementar() {
  this.numero--;
}

incrementar() {
  this.numero += 1;
}
  
}
