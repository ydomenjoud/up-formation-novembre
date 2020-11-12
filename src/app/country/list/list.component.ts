import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  private readonly apiUrl = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
  private countriesList: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      countriesList => {
        this.countriesList = countriesList;
      },
    );
  }

}
