import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JuecesComponent } from './jueces/jueces.component';

import { firebaseConfig } from '../../firebase.config';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// import { initializeApp } from 'firebase/app';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    JuecesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule, // **2do: para que estoy usando auth?
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
