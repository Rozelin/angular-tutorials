import { Component } from '@angular/core';

@Component({
  selector: 'app-server',    // this is a tag selector <spp-server></app-server>
  // selector: '[app-server]',  // this is selector by attribute
  //selector: '.app-server',    // this is selector by class
  template:
      `<div class="container">
        <p>Server status: <span [ngClass]="{
          'text-success': serverStatus === 'online',
          'text-danger': serverStatus === 'offline'
          }"> {{ serverStatus }} </span></p>
      </div>`,
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverStatus: string = 'offline';
    constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online': 'offline';
    }
}
