
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/Rx'

@Injectable()
export class WorkoutService {
    static get parameters() {
        return [[Http]];
    }
    private apiKey: string;
    private workoutUrl: string;

    constructor(private http) {
        this.http = http;
        this.apiKey = 'Lo4gFreCn3qVBDiFbBpEKQxx3aTgpgOf';
        this.workoutUrl = 'https://api.mlab.com/api/1/databases/ionicappjose06/collections/workouts';
    }

    getWorkouts() {
        return this.http.get(this.workoutUrl + '?apiKey=' + this.apiKey)
            .map(res => res.json());
    }

    addWorKout(work) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(this.workoutUrl
            + '?apiKey=' + this.apiKey, JSON.stringify(work),
            {headers: headers})
            .map(res => res.json());
    }
}