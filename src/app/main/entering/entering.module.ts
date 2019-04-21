import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EnteringRoutingModule } from "./entering-routing.module";
import { EnteringNewComponent } from "./entering-new/entering-new.component";
import { EnteringResultComponent } from "./entering-result/entering-result.component";
import { FuseSidebarModule } from "@fuse/components";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule
} from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [EnteringNewComponent, EnteringResultComponent],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule,
        FuseSidebarModule
    ]
})
export class EnteringModule {}
