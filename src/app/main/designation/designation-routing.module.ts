import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./new/new.component";
import { DesignationService } from "app/main/designation/designation.service";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseSidebarModule } from "@fuse/components";
import { MatIconModule, MatButtonModule } from "@angular/material";
import { SharedModule } from "app/main/shared/shared.module";

const routes: Routes = [
    {
        path: "new",
        component: NewComponent,
        resolve: {
            transport: DesignationService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        FuseSharedModule,
        FuseSidebarModule,
        SharedModule
    ],
    exports: [RouterModule],
    declarations: [NewComponent]
})
export class DesignationRoutingModule {}
