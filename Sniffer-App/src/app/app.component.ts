import { Component, OnInit } from "@angular/core";
import { FirebaseService } from '~/app/Services/firebase/firebase.service';
import { Subscription } from 'rxjs';
import { sensorModel } from "./Models/data";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit  {

    constructor(private firebase: FirebaseService) { }

    ngOnInit() {
        this.firebase.getData();
    }
}
