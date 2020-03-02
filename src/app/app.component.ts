import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'jsonToHtml';
  constructor(private httpService: HttpClient) { }
  arrLogin: any = [];
  showError: boolean;
   // tslint:disable-next-line:variable-name
   form_template: any = [
    {
      type: 'select',
      label: 'favorite book',
      options: ['Jane Eyre', 'Pride and Prejudice', 'Wuthering Heights']
    }
  ];
ngOnInit() {
    this.httpService.get('./assets/authentication.json').subscribe(
      data => {
        this.arrLogin = data;
      });
  }
onSubmit() {
    this.arrLogin.forEach(element => {
      if (element.required && element.value === '') {
          this.showError = true;
       }
    });
  }
}
