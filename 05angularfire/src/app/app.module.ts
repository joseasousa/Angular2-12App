import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';


export const firebaseConfig = {
  apiKey: "AIzaSyB5-MmauF7weYBgiqqH4Wbc3A7yjamQf3o",
  authDomain: "fir-6e4dd.firebaseapp.com",
  databaseURL: "https://fir-6e4dd.firebaseio.com",
  storageBucket: "fir-6e4dd.appspot.com",
  messagingSenderId: "1019340223337"
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
