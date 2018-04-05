import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  myServiceVariable = "puttepossu";

  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
