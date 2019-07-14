import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./new/new.component";
import { TransportService } from "app/main/transport/transport.service";
import { MatIconModule, MatButtonModule } from "@angular/material";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseSidebarModule } from "@fuse/components";

const routes: Routes = [
    {
        path: "new",
        component: NewComponent,
        resolve: {
            transport: TransportService
        }
    }
];

@NgModule({
    declarations: [NewComponent],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        FuseSharedModule,
        FuseSidebarModule
    ],
    exports: [RouterModule]
})
export class TransportRoutingModule {}
