"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var http_1 = require("nativescript-angular/http"); ///
var app_component_1 = require("./app.component");
var feedService_1 = require("./services/feedService");
var getting_started_component_1 = require("./components/sideDrawer/getting-started.component");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var secure_component_1 = require("./components/secure/secure.component");
var details_component_1 = require("./components/details/details.component");
var list_component_1 = require("./components/list/list.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            angular_1.NativeScriptUISideDrawerModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            getting_started_component_1.SideDrawerGettingStartedComponent,
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            secure_component_1.SecureComponent,
            details_component_1.detailsComponent,
            list_component_1.listComponent
        ],
        providers: [feedService_1.feedService],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNFQUE0RjtBQUM1RixvREFBcUU7QUFDckUsNkNBQWlEO0FBQ2pELGtEQUFtRSxDQUFBLEdBQUc7QUFDdEUsaURBQStDO0FBQy9DLHNEQUFxRDtBQUNyRCwrRkFBbUc7QUFDbkcsc0VBQW9FO0FBQ3BFLCtFQUE2RTtBQUM3RSx5RUFBdUU7QUFDdkUsNEVBQXdFO0FBQ3hFLG1FQUErRDtBQTRCL0QsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBMUJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLHdDQUE4QjtZQUM5Qiw2QkFBc0I7WUFDdEIsK0JBQXVCO1lBQ3ZCLDhCQUFnQjtTQUVuQjtRQUNELFlBQVksRUFBRTtZQUNWLDZEQUFpQztZQUNqQyw0QkFBWTtZQUNaLGdDQUFjO1lBQ2Qsc0NBQWlCO1lBQ2pCLGtDQUFlO1lBQ2Ysb0NBQWdCO1lBQ2hCLDhCQUFhO1NBQ2hCO1FBQ0gsU0FBUyxFQUFDLENBQUMseUJBQVcsQ0FBQztRQUNyQixPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7Ly8vXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBmZWVkU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ZlZWRTZXJ2aWNlXCI7XG5pbXBvcnR7U2lkZURyYXdlckdldHRpbmdTdGFydGVkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVEcmF3ZXIvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudFwiOyBcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlY3VyZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdXJlL3NlY3VyZS5jb21wb25lbnRcIjtcbmltcG9ydCB7ZGV0YWlsc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHtsaXN0Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG4gXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNpZGVEcmF3ZXJHZXR0aW5nU3RhcnRlZENvbXBvbmVudCxcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIFNlY3VyZUNvbXBvbmVudCxcbiAgICAgICAgZGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgbGlzdENvbXBvbmVudFxuICAgIF0sXG4gIHByb3ZpZGVyczpbZmVlZFNlcnZpY2VdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==