import {Component} from '@angular/core';
import { auth } from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';

    constructor(public afAuth: AngularFireAuth) {
    }

    login() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
