import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JuecesComponent } from './jueces/jueces.component';

import { firebaseConfig } from '../../firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    JuecesComponent
  ],
  imports: [
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
