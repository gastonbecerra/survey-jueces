import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/survey.json').subscribe(data => {
      this.information = data['information'];
      this.dimensions = data['dimensions'];
      this.items = data['items'];
      this.fit = data['fit'];
    });
  }
}