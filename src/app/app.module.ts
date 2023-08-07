import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { provideAnimations } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { JuecesComponent } from './jueces/jueces.component';

import { firebaseConfig } from '../../firebase.config';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    JuecesComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatStepperModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [ provideAnimations() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
