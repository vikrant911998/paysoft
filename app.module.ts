import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { MastersComponent } from "./masters/masters.component";
import { DepartmentComponent } from "./masters/department/department.component";
import { EditComponent } from "./common/edit/edit.component";
import { ListComponent } from "./common/list/list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MastersComponent,
    DepartmentComponent,
    EditComponent,
    ListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
