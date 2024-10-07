import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserPostComponent } from './user-post/user-post.component';

export const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add-post', component: UserPostComponent },
  { path: 'register', component: RegisterComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
