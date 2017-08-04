import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { NativeScriptHttpModule } from "nativescript-angular/http";///
import { AppComponent } from "./app.component";
import { feedService } from "./services/feedService";
import{SideDrawerGettingStartedComponent} from "./components/sideDrawer/getting-started.component"; 
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SecureComponent } from "./components/secure/secure.component";
import {detailsComponent} from './components/details/details.component';
import {listComponent} from './components/list/list.component';
 
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        AppRoutingModule
        
    ],
    declarations: [
        SideDrawerGettingStartedComponent,
        AppComponent,
        LoginComponent,
        RegisterComponent,
        SecureComponent,
        detailsComponent,
        listComponent
    ],
  providers:[feedService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }