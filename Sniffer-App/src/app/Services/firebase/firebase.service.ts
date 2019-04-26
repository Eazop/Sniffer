import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class FirebaseService {
    private firebaseUrl = "https://stark-sensor.firebaseio.com/native-test.json";

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
