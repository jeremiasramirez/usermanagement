import { ModuleWithProviders } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";


const routes:Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        component: HomeComponent
    }
]

export var ROUTES:ModuleWithProviders<any> = RouterModule.forRoot(routes)