import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { sensorModel } from "~/app/Models/data";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class FirebaseService {
    private firebaseUrl = "https://stark-sensor.firebaseio.com/airborne-data.json";
    public sensorData: Observable<sensorModel[]> 

    constructor(private http: HttpClient) { }

    getData() {
        let headers = this.createRequestHeaders();
        this.sensorData =  this.http.get<sensorModel[]>(this.firebaseUrl, { headers: headers });
    }

    private createRequestHeaders() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return headers;
    }
}

