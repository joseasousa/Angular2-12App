import {type} from 'os';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private url ='https://api.spotify.com/'

    private seachrUrl: string;
    private artistUrl: string;
    private albunsUrl: string;
    private albumUrl: string;

    constructor(private _http: Http) {

    }

    searchMusic(str: string, type = 'artist') {
        this.seachrUrl = this.url+'v1/search?query='+
        str+'&offset=0&limit=20&type='+type;
        return this._http.get(this.seachrUrl)
        .map(res=> res.json());
    }

    getArtist(id:string){
        this.artistUrl = this.url+'v1/artists/'+id;
        return this._http.get(this.artistUrl)
        .map(res=> res.json());
    }

    getAlbuns(id:string){
     this.albunsUrl = this.url+'v1/artists/'+id+'/albums';
        return this._http.get(this.albunsUrl)
        .map(res=> res.json());
    }
     getAlbum(id:string){
     this.albumUrl = this.url+'v1/albums/'+id;
        return this._http.get(this.albumUrl)
        .map(res=> res.json());
    }
}