import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities = ['Belgrade', 'Novosibirsk', 'Zagreb'];
  cityControl = new FormControl('');

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.cityControl.valueChanges.subscribe((city) =>
      this.router.navigate([city])
    );
  }
}
