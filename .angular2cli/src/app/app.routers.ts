import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FeedComponent } from './components/feed/feed.component';
import {Create_accountComponent} from './components/create-account/create_account.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'auth',
    component: AuthFormComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'signup',
    component:  AuthFormComponent,
  },
  {
    path: 'create_account',
    component: Create_accountComponent,
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
