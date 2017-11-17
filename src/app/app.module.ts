
import {AppRouter} from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListFlatComponent } from './dash-board/list--flat/list--flat.component';
import { ProfileComponent } from './dash-board/profile.component';
import { ListnewComponent } from './dash-board/listnew.component';
import { ReactiveRegComponent } from './reactive-reg/reactive-reg.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    RegistrationComponent,
    ListFlatComponent,
    ProfileComponent,
    ListnewComponent,
    ReactiveRegComponent,
    PipesComponent,
    CustomPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
