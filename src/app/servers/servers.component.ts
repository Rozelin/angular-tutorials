import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  title = 'app';
  newServerName: string = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.newServerName);
  }
}

