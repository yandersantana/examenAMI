import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { RolComponent } from './components/rol/rol.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
