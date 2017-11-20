import { Routes, RouterModule }  from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'auth',
    component: AuthFormComponent,
  },
  {
    path: 'signup',
    component:  AuthFormComponent,
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
