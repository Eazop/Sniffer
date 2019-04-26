import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Sensor } from '~/app/Models/Sensor';
import { SensorReading } from '~/app/Models/SensorReading';
@Component({
  selector: 'ns-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.css'],
  moduleId: module.id,
})
export class SensorCardComponent implements OnInit {
  sensors : Array<Sensor>;
  constructor() { 

  }

  ngOnInit() {
  }

}
