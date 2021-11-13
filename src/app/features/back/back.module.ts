import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackRoutingModule } from "./back-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { BackLayoutComponent } from "./layout/back-layout/back-layout.component";
import { SingleMenuItemComponent } from './layout/back-layout/components/single-menu-item/single-menu-item.component';

@NgModule({
    declarations: [BackLayoutComponent, SingleMenuItemComponent],
    imports: [
        CommonModule,
        BackRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: []
})

export class BackModule { }