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
