import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';


export const firebaseConfig = {
  apiKey: "<Api>",
  authDomain: "<Domain>",
  databaseURL: "<>",
  storageBucket: "<>",
  messagingSenderId: "<>"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
