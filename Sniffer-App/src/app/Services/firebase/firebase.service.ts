import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { test } from '../../Components/job-site-sensors/job-site-sensors.component';
import { SensorReading } from "~/app/Models/SensorReading";

@Injectable({
    providedIn: "root"
})
export class FirebaseService {
    private firebaseUrl = "https://stark-sensor.firebaseio.com/airborne-data.json";
    public lastResponse;
    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeaders();
        this.lastResponse = this.http.get(this.firebaseUrl, { headers: headers });
        return this.lastResponse;
    }

    private createRequestHeaders() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return headers;
    }
}
