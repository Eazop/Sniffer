import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { test } from '../../Components/job-site-sensors/job-site-sensors.component';
import { SensorReading } from "~/app/Models/SensorReading";

@Injectable({
    providedIn: "root"
})
export class FirebaseService {
    private firebaseUrl = "https://stark-sensor.firebaseio.com/airborne-data.json";

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeaders();
        return this.http.get(this.firebaseUrl, { headers: headers });
    }

    private createRequestHeaders() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return headers;
    }
}
