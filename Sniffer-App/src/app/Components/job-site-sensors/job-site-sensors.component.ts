import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '~/app/Services/firebase/firebase.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ns-job-site-sensors',
    templateUrl: './job-site-sensors.component.html',
    styleUrls: ['./job-site-sensors.component.css'],
    moduleId: module.id,
})
export class JobSiteSensorsComponent implements OnInit, OnDestroy {
    private firebaseSub: Subscription;

    constructor(private firebase: FirebaseService) { }

    ngOnInit() {
        this.firebaseSub = this.firebase.getData().subscribe(res => console.log(res));
    }

    ngOnDestroy() {
        if (this.firebaseSub && !this.firebaseSub.closed) {
            this.firebaseSub.unsubscribe();
        }
    }

}
