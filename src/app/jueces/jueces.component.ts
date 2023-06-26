import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

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
  results: any[] = [];
  
  constructor(
    private http: HttpClient, 
    private formBuilder: FormBuilder
  ) {}

  getItemsFormArray(): FormArray | null {
    return this.surveyForm.get('items') as FormArray | null;
  }

  submitSurveyForm() {
    const itemsFormArray = this.getItemsFormArray();
  
    if (itemsFormArray) {
      const formData = {
        items: itemsFormArray.value
      };
  
      console.log(formData);
    }
  }

  ngOnInit() {
    this.http.get<any>('assets/survey.json').subscribe(data => {
  
      this.information = data['information'];
      this.dimensions = data['dimensions'];
      this.items = data['items'];
      this.fit = data['fit'];
  
      this.surveyForm = this.formBuilder.group({
        items: this.formBuilder.array([]) // Array de items
      });
  
      const itemsFormArray = this.getItemsFormArray();

      this.items.forEach(item => {

        console.log(item);

        const itemGroup = this.formBuilder.group({
          item: [item], 
          dimension: ['', Validators.required],
          fit: ['', Validators.required],
          comentario: ''
        });
        (itemsFormArray?.push(itemGroup));
      });

    });
  }
  

}
