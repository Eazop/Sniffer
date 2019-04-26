import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '~/app/Services/firebase/firebase.service';
import { Subscription, Observable } from 'rxjs';
import { sensorModel } from '~/app/Models/data';

@Component({
    selector: 'ns-job-site-sensors',
    templateUrl: './job-site-sensors.component.html',
    styleUrls: ['./job-site-sensors.component.css'],
    moduleId: module.id,
})
export class JobSiteSensorsComponent implements OnInit, OnDestroy  {
    
    public sensorData:sensorModel[];
    public subscription: Subscription;

    constructor(private firebaseService: FirebaseService) {
       
    }

    ngOnDestroy(): void {
        if(this.subscription && this.subscription.closed === false){
            this.subscription.unsubscribe();
        }
    }
    ngOnInit(): void {
        this.subscription = this.firebaseService.sensorData.subscribe(i => this.sensorData = i );
    }
}
