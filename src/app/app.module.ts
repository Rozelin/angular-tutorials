import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ShopingListRootComponent } from './shopingList/shoping-list-root/shoping-list-root.component';
import { ShopingListHeaderComponent } from './shopingList/shoping-list-header/shoping-list-header.component';
import { ShopingListListComponent } from './shopingList/shoping-list-list/shoping-list-list.component';
import { ShopingListBookComponent } from './shopingList/shoping-list-book/shoping-list-book.component';
import { ShopingListReceipeComponent } from './shopingList/shoping-list-receipe/shoping-list-receipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ShopingListRootComponent,
    ShopingListHeaderComponent,
    ShopingListListComponent,
    ShopingListBookComponent,
    ShopingListReceipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
