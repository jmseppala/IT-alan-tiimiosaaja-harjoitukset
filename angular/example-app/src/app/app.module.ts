import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { AdditionalPageComponent } from './additional-page/additional-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    AdditionalPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'pertsa',
         component: AdditionalPageComponent
      }
   ]),
   HttpModule,
   ReactiveFormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
