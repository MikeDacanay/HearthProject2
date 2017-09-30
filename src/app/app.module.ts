import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Cards } from './create-decklist/cardlist'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDecklistComponent } from './create-decklist/create-decklist.component';
import { StreamProComponent } from './stream-pro/stream-pro.component';
import { ProListComponent } from './pro-list/pro-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateDecklistComponent,
    StreamProComponent,
    ProListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Cards],
  bootstrap: [AppComponent]
})
export class AppModule { }
