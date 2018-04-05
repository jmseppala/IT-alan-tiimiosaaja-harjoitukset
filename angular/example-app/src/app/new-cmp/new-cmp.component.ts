import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  myvariable = "This is a variable!";

  mycarlist = ["Audi","BMW","Saab","Volvo"];

  isavailable = false;

  isavailabletoo = 100;

  mynewvariable = this.mycarlist[2];

  myjsonvariable = { firstname: "Jari-Matti", familyname: "Seppälä"};

  myServiceVariable= "";

  mybuttonclickeventhandler(event) {
    console.log("You Pressed me!")

  }

  mycarlistchanged(eventtargetvalue) {
    console.log("selection changed to " + eventtargetvalue);
  }

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.myServiceVariable = this.myservice.myServiceVariable;
  }

}
