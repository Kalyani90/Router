import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:usNm', component: DashBoardComponent },
    { path: 'reg/:tm', component: RegistrationComponent }

];


export const AppRouter = RouterModule.forRoot(routes);
