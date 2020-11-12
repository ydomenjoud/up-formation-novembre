import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export class Country {
  flag: string;
  name: string;
  alpha3Code: string;
  capital: string;
  subregion: string;
  timezones: string[];
  languages: {name: string}[];
  // formatted data
  timezonesFormatted?: string;
  languagesFormatted?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit, OnDestroy {
  countriesList: Country[];
  private readonly apiUrl = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
  private subscription: Subscription;

  constructor(private http: HttpClient) {
  }

  private getCountriesList(): void {
    this.subscription = this.http.get<Country[]>(this.apiUrl)
      .pipe(
        tap(() => console.log('la requete s\'est bien executée')),
        map(data => data.map(c => ({
          ...c,
          timezonesFormatted: c.timezones.join('/'), // format timezone
          languagesFormatted: c.languages.map(l => l.name).join('/') // format languages
        }) as Country)),
        tap(countriesList => this.countriesList = countriesList),
        catchError(error => {
          console.log('une erreur est survenue');
          return of(null);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.getCountriesList();
  }

}
