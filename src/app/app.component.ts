import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

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
      console.log(element);
    });
  }
}
