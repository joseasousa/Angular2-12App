import {SpotifyService} from '../../services/spotify.services';

import {ActivatedRoute, ActivatedRouteSnapshot, Route} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../../../Artist';
import { Album } from './../../../Album';


@Component({
	moduleId: module.id,
	selector: 'Artist',
	templateUrl: 'Artist.component.html'
})

export class ArtistComponent implements OnInit {
	id: string;
	artist: Artist[];
	albuns: Album[];

	constructor(
		private _spotify: SpotifyService,
		private _route: ActivatedRoute) {

	}

	ngOnInit() {
		this._route.params.map(params => params['id'])
			.subscribe((id) => {
				this._spotify.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
					});

				this._spotify.getAlbuns(id).subscribe(albuns => {
					this.albuns = albuns.items;
				});
			});


	}
}