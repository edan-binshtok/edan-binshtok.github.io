import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {HeroSearchComponent} from './hero-search.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';


describe('HeroSearchComponent', () => {
    let component: HeroSearchComponent;
    let fixture: ComponentFixture<HeroSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroSearchComponent],
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
                AngularFireAuthModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
