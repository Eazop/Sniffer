import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '~/app/Services/firebase/firebase.service';
import { Subscription } from 'rxjs';
import { Sensor } from '~/app/Models/Sensor';
import { SensorReading } from '~/app/Models/SensorReading';

@Component({
    selector: 'ns-job-site-sensors',
    templateUrl: './job-site-sensors.component.html',
    styleUrls: ['./job-site-sensors.component.css'],
    moduleId: module.id,
})
export class JobSiteSensorsComponent implements OnInit, OnDestroy {
    private firebaseSub: Subscription;
    displayText : any;
    sensors : Array<SensorReading>;
    constructor(private firebase: FirebaseService) { }

    ngOnInit() {

        this.firebaseSub = this.firebase.getData().subscribe(res => {
            const keys = Object.keys(res);
            this.sensors = JSON.parse(res[keys[0]]);
        });
    }

    ngOnDestroy() {
        if (this.firebaseSub && !this.firebaseSub.closed) {
            this.firebaseSub.unsubscribe();
        }
    }

}
export class test {
    name : string;
}
