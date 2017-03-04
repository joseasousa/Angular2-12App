import {SpotifyService} from '../../services/spotify.services';
import { Component, OnInit } from '@angular/core';
import { Artist } from './../../../Artist';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: 'search.component.html'
})

export class SearchComponent implements OnInit {
	searchStr: string;
	searcRes: Artist[];
	ngOnInit() { }

	constructor(private _spotifyService:SpotifyService){

	}

	searchMusic() {
		this._spotifyService.searchMusic(this.searchStr).subscribe(res=>{
			this.searcRes=res.artists.items;
		});
	}
}