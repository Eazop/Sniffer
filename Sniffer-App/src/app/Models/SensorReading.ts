export class SensorReading {
    sensor_id : number;
    sensor_name : string;
    data_collection_time : Date;
    pm10_standard : number;
    pm25_standard : number;
    pm100_standard : number;
    pm10_env : number;
    pm25_env : number;
    pm100_env : number;
    particles_03um : number;
    particles_05um : number;
    particles_10um : number;
    particles_25um : number;
    particles_50um : number;
    particles_100um : number;
}