import {SpotifyService} from '../../services/spotify.services';
import {Album} from '../../../Album';

import { Component, OnInit } from '@angular/core';
import { Artist } from './../../../Artist';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'album',
	templateUrl: 'album.component.html'
})

export class AlbumComponent implements OnInit {

		id: string;

	album: Album;

	constructor(
		private _spotify: SpotifyService,
		private _route: ActivatedRoute) {
	}

	ngOnInit() {
		this._route.params.map(params => params['id'])
			.subscribe((id) => {
				
				this._spotify.getAlbum(id).subscribe(album => {
					this.album = album;
				});
			});


	}
}