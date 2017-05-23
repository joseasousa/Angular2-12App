import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
    apikey: string;
    private urlBase = 'https://api.themoviedb.org/3/discover/movie?language=pt-BR&callback=JSONP_CALLBACK&';
    constructor(private _jsonp: Jsonp) {
        this.apikey = '2931998c3a80d7806199320f76d65298';
        console.log('MovieService Initialized...');
    }

    getPopular() {
        return this._jsonp.get(this.urlBase + 'sort_by=popularity.desc&api_key=' + this.apikey)
            .map(res => res.json());
    }

    getInTheaters() {
        return this._jsonp.get(this.urlBase + 'primary_release_date.gte=2016-09-26&primary_release_date.lte=2016-10-30&api_key=' + this.apikey)
            .map(res => res.json());
    }

    searchMovies(searchStr: string) {
        return this._jsonp.get(this.urlBase + 'query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apikey)
            .map(res => res.json());
    }

    getMovie(id: string) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?language=pt-BR&certification_country=PT&callback=JSONP_CALLBACK&api_key=' + this.apikey)
            .map(res => res.json());
    }
}