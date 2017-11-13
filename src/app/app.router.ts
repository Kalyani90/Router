import { ReactiveRegComponent } from './reactive-reg/reactive-reg.component';
import { ProfileComponent } from './dash-board/profile.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ListnewComponent } from './dash-board/listnew.component';

const dashRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: ListnewComponent }
];

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:usNm', component: DashBoardComponent, children: dashRoutes },
    { path: 'reg/:tm', component: RegistrationComponent },
    { path: 'regRec', component: ReactiveRegComponent},
];


export const AppRouter = RouterModule.forRoot(routes);
