import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable()
export class CarService {
    constructor(private http: HttpClient) { }

     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      }

    getCarAll() {
        return this.http.get<Car>('http://localhost:3000/rastreio/listaCarrosPontos');
        
    }
}