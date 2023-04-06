import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutCompanyComponent } from './about-company/about-company.component';

const routes: Routes = [
  {
    path: 'about',
    component:AboutComponent,
    children:[
      {path:"company", component:AboutmeComponent},
      {path: "me", component:AboutCompanyComponent}
    ]
  },
  {
    path: 'user/:id',
    component:UserComponent
  },
  {
    path: 'user',
    component:UserComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: '**',
    component:NopageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
