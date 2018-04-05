import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-additional-page',
  templateUrl: './additional-page.component.html',
  styleUrls: ['./additional-page.component.css']
})
export class AdditionalPageComponent implements OnInit {
  todaydate;
  httpdata;
  constructor(private myservice: MyserviceService,
  private http: Http) {}
  ngOnInit() {

    this.todaydate = this.myservice.showTodayDate();

    this.http.get("http://jsonplaceholder.typicode.com/users")
    .map( (response) => response.json() )
    .subscribe( (data) => {this.displaydata(data); })
  }
  
  displaydata(data) {
      this.httpdata = data;
  }
}
