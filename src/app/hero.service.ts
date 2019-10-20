import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {Hero} from './hero';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({providedIn: 'root'})
export class HeroService {
    constructor(private afs: AngularFirestore) {
    }

    getHeroes(): Observable<Hero[]> {
        return this.afs.collection<Hero>(`heroes`).snapshotChanges().pipe(
            map(heroesSnapshot => heroesSnapshot.map(heroSnapshot => {
                return {id: heroSnapshot.payload.doc.id, ...heroSnapshot.payload.doc.data() as Hero};
            }))
        );
    }

    getHero(id: string): Observable<Hero> {
        return this.afs.collection<Hero>(`heroes`).doc(id).snapshotChanges().pipe(
            map(heroSnapshot => {
                return {id: heroSnapshot.payload.id, ...heroSnapshot.payload.data() as Hero};
            })
        );
    }

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            return of([]);
        }
        return this.afs.collection<Hero>(`heroes`, ref => ref.where('name', '==', term)).snapshotChanges().pipe(
            map(heroesSnapshot => heroesSnapshot.map(heroSnapshot => {
                return {id: heroSnapshot.payload.doc.id, ...heroSnapshot.payload.doc.data() as Hero};
            }))
        );
    }

    addHero(hero: Hero): Observable<any> {
        return of(this.afs.collection('heroes').add(hero));
    }

    deleteHero(hero: Hero): Observable<any> {
        return of(this.afs.collection('heroes').doc(hero.id).delete());
    }

    /** PUT: update the hero on the server */
    updateHero(hero: Hero): Observable<any> {
        console.log(hero);
        return of(this.afs.collection('heroes').doc(hero.id).set(hero));
    }
}
