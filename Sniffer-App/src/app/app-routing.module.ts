import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { SensorCardComponent } from './Components/sensor-card/sensor-card.component';
import { ItemsComponent } from "./Components/item/items.component";
import { ItemDetailComponent } from "./Components/item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/sensors", pathMatch: "full" },
    { path: "sensors", component: SensorCardComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
