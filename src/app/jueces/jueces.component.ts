import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jueces',
  templateUrl: './jueces.component.html',
  styleUrls: ['./jueces.component.css']
})

export class JuecesComponent {
  dimensions: any[] = [];
  surveyName: string = "";
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/survey.json').subscribe(data => {
      this.surveyName = data['information']['name'];
      this.dimensions = data['dimensions'];
    });
  }
}