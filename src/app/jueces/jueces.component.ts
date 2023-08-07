import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-jueces',
  templateUrl: './jueces.component.html',
  styleUrls: ['./jueces.component.css']
})

export class JuecesComponent {

  information: any = {};
  dimensions: any[] = [];
  items: any[] = [];
  fit: any[] = [];
  surveyForm!: FormGroup; 
  nombreForm: FormControl;
  results: any[] = [];
  
  constructor(
    private firestore: AngularFirestore,
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) {
      this.nombreForm = this.formBuilder.control('');
    }
    
    getItemsFormArray(): FormArray | null {
      return this.surveyForm.get('items') as FormArray | null;
    }

    submitSurveyForm() {

      if (this.surveyForm.invalid) {
        console.log('FORMULARIO INVALIDO');
        this.surveyForm.markAllAsTouched();
        return;
      }
    
      const formData = {
        items: this.getItemsFormArray()?.value.map((itemGroup: any) => ({
          item: itemGroup.item,
          dimension: itemGroup.dimension,
          fit: itemGroup.fit,
          comentario: itemGroup.comentario
        })),
        nombre: this.nombreForm.value
      };

      console.log(formData);

      this.firestore.collection('interjueces').add(formData)
        .then(() => console.log('Datos guardados en Firestore'))
        .then(() =>
          this.snackBar.open('¡Gracias por participar!', 'Cerrar', {
            duration: 9000, 
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          })
        )
        .catch(error => console.error('Error al guardar datos en Firestore', error));    
    } 

    ngOnInit() {
      this.http.get<any>('assets/survey.json').subscribe(data => {
  
      this.information = data['information'];
      this.dimensions = data['dimensions'];
      this.items = data['items'];
      this.fit = data['fit'];
  
      this.surveyForm = this.formBuilder.group({
        items: this.formBuilder.array([]), 
        nombre: this.nombreForm
      });
      
      const itemsFormArray = this.getItemsFormArray();

      this.items.forEach(item => {
        const itemGroup = this.formBuilder.group({
          item: [item], 
          dimension: ['', Validators.required],
          fit: [this.fit[ this.fit.length - 1 ], Validators.required],
          comentario: ''
        });
        (itemsFormArray?.push(itemGroup));
      });

    });
  }
  
}

