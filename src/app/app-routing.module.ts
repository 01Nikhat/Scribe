import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Login1Component } from './login1/login1.component';
import { HomeComponent } from './home/home.component';
import { MyblogComponent } from './myblog/myblog.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ViewComponent } from './view/view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'login1', component: Login1Component
  },
  {
    path:'profile/:id',component: ProfileComponent

  },
  {
    path:'edit-profile/:id',component:EditProfileComponent
  },
  {
    path:'view/:postId', component: ViewComponent
  },
  {
    path:'myblog', component: MyblogComponent, canActivate:[AuthGuard]
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports :[ RouterModule ]
})
export class AppRoutingModule { }
