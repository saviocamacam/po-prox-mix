import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: "./main/home/home-routing.module#HomeRoutingModule"
    },
    {
        path: "entering",
        loadChildren:
            "./main/entering/entering-routing.module#EnteringRoutingModule"
    },
    {
        path: "transport",
        loadChildren:
            "./main/transport/transport-routing.module#TransportRoutingModule"
    },
    {
        path: "designation",
        loadChildren:
            "./main/designation/designation-routing.module#DesignationRoutingModule"
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes
            // { enableTracing: true }
        )
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
