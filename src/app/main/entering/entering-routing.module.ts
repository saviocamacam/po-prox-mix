import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EnteringModule } from "app/main/entering/entering.module";
import { EnteringNewComponent } from "app/main/entering/entering-new/entering-new.component";
import { EnteringService } from "app/main/entering/entering.service";
import { EnteringResultComponent } from "app/main/entering/entering-result/entering-result.component";

const routes: Routes = [
    {
        path: "new",
        component: EnteringNewComponent,
        resolve: {
            entering: EnteringService
        }
    },
    { path: "result", component: EnteringResultComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes), EnteringModule],
    exports: [RouterModule]
})
export class EnteringRoutingModule {}
