import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  src:string = 'https://images.pexels.com/photos/14944868/pexels-photo-14944868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}
