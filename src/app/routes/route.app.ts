import { ModuleWithProviders } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { StartappComponent } from "../pages/startapp/startapp.component";


const routes:Routes = [
    {
        path: "",
        component: StartappComponent,
        
    },
    {
        path: "home",
        component: HomeComponent
    }
]

export var ROUTES:ModuleWithProviders<any> = RouterModule.forRoot(routes)