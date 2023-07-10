import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message: string[] = ['a', 'b'];

  add(message: string) {
    this.message.push(message)
  }
}
