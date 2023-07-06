import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  dia?: string;
  // El signo significa que no tienen ningun valor de inicio

  constructor() { }

  ngOnInit(): void {
    
  }

}
