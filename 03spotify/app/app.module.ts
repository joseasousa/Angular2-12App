import {ArtistComponent} from './components/Artist/Artist.component';
import {Http, HttpModule} from '@angular/http';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AlbumComponent } from './components/album/album.component';


@NgModule({
  imports: [BrowserModule,
    routing,
    FormsModule,
    HttpModule],
  declarations: [AppComponent,
    SearchComponent,
    NavbarComponent,
    AboutComponent,
    ArtistComponent,
    AlbumComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
