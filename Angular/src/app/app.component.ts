import { Component } from '@angular/core';
import * as moment from 'moment';
import { Table } from 'primeng/table';
import { Car, Ponto } from './service/car';
import { CarService } from './service/carService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: any;

  ponto: Ponto[] = [];

  representatives: any;

  statuses: any;

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private customService: CarService) {}

  ngOnInit() {
    this.customService.getCarAll()
    .subscribe((data: Car) => {
      let response = data as Car;
      this.cars = response;
      this.loading = false;
      this.cars.forEach((item: { data_posicao: any; })=>{
        item.data_posicao = this.formatarDataString(item.data_posicao.toString());
      }
        
      );
    });
  }

  formatarDataString(data:any){
    const dataFull = new Date(data);
    var year = dataFull.getFullYear().toString();
    var month = (1 + dataFull.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = dataFull.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    var hours = dataFull.getHours().toString();
    hours = hours.length > 1 ? hours : `0${hours}`
    var minutes = dataFull.getMinutes().toString();
    minutes = minutes.length > 1 ? minutes : `0${minutes}`;
    var seconds = dataFull.getSeconds().toString();
    seconds = seconds.length > 1 ? seconds : `0${seconds}`;
    
    var dataCompleta = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    console.log(dataCompleta);
    return dataCompleta;
     

  }

  redirecionarMapa(item: { latitude: any; longitude: any; }){
    window.open(`http://maps.google.com/maps?q=${item.latitude},${item.longitude}`, '_blank');
  }

  clear(table: Table) {
    table.clear();
}
}
