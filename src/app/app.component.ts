// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'interjueces';
// }

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="saveData()">Guardar datos en Firestore</button>
  `
})

export class AppComponent {
  constructor(private firestore: AngularFirestore) {}

  saveData() {
    const data = { message: 'Hola, Firestore!' };
    this.firestore.collection('myCollection').add(data)
      .then(() => console.log('Datos guardados en Firestore'))
      .catch(error => console.error('Error al guardar datos en Firestore', error));
  }
}
