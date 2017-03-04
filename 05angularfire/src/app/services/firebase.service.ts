import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Business } from '../model/Business';
import { Category } from '../model/Category';

@Injectable()
export class FirebaseService {
    business: FirebaseListObservable<Business[]>;
    categories: FirebaseListObservable<Category[]>;

    constructor(private af: AngularFire) {

    }

    getBusiness(category: string = null) {
        if (category != null) {
            this.business = this.af.database.list('/business', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            }) as
                FirebaseListObservable<Business[]>
        } else {
            this.business = this.af.database.list('/business') as
                FirebaseListObservable<Business[]>
        }

        return this.business;
    }

    getCategory() {
        this.categories = this.af.database.list('/categories') as
            FirebaseListObservable<Category[]>
        return this.categories;
    }
    addBusiness(newBusines){
        return this.business.push(newBusines);
    }
    editBusiness(key,newBusines){
        return this.business.update(key,newBusines);
    }
    delBusiness(key){
       return this.business.remove(key);

    }


}