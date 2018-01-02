import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  forecasts: WeatherForecast[];

  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    http.get('http://localhost:63287/api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result.json() as WeatherForecast[];
    }, error => console.error(error));
  }

  ngOnInit() { }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
