import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropFileComponent } from "./drop-file/drop-file.component";

@NgModule({
    declarations: [DropFileComponent],
    imports: [CommonModule],
    exports: [DropFileComponent]
})
export class SharedModule {}
