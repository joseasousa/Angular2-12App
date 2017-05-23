import { Component } from '@angular/core';
import {MovieService} from './services/movie.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [MovieService]
})
export class AppComponent { }
