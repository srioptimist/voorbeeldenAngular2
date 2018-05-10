import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { City } from '../model/city.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CityService {
  constructor(private http: HttpClient) {}

  // retourneer alle cities, gemapt naar json
  getCities(): Observable<City[]> {
    return this.http.get<City[]>('assets/data/cities.json');
  }
}
