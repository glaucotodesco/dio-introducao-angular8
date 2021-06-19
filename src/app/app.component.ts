import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title     : string  = 'course-manager';
  name      : string  = 'John';             //Use to show One Way data binding
  lastName  : string   = 'Silva'             //Use to shw Two Way data binding
}
