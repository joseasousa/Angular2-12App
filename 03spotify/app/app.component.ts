import {SpotifyService} from './services/spotify.services';
import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers : [SpotifyService]
})
export class AppComponent { }
