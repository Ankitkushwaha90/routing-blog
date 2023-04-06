import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-blog';
  memberData=[
    {name:'Hello', email:'welcome.com'},
    {name:'Sam', email:'Sam.com'},
    {name:'Bhasker', email:'Bhasker.com'},
    {name:'peter', email:'peter.com'}
  ]
}
