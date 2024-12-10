import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../service/weather.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-report',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './weather-report.component.html',
  styleUrl: './weather-report.component.scss',
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any> | undefined;
  locationName: string | null = '';
  weatherIcon: string | null = '';

  constructor(
    private router: ActivatedRoute,
    private service: WeatherService
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.locationName = params.get('locationName');
      if (this.locationName) {
        this.data$ = this.service.getWeatherForCity(this.locationName);
        this.data$.subscribe(
          (data) =>
            (this.weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        );
      }
    });
  }
}
