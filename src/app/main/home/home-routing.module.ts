import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/main/home/home/home.component";
import { HomeModule } from "app/main/home/home.module";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), HomeModule],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
