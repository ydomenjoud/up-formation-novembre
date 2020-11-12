import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, range, Subscription, timer } from 'rxjs';
import { finalize, map, skip, switchMap, take, tap } from 'rxjs/operators';
import { Country } from '../list/list.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit, OnDestroy {
  country: Country;
  private apiUrl = 'https://restcountries.eu/rest/v2/alpha/';
  private routeParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) {
  }

  getCountry(code: string): Observable<any> {
    return this.http.get<Country>(this.apiUrl + code).pipe(
      tap(country => {
        this.country = country;
      })
    );
  }

  updateCountryCode(code: string): void {
    this.getCountry(code).subscribe();
  }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params
      .pipe(
        map(({code}) => code), // je récupère la propriété code de l'object paramsMap
        tap(code => console.log(code)),
        tap(() => console.log('après le délai de 5s')),
        switchMap(code => this.getCountry(code)),
        tap(() => console.log('fini')),
      )
      .subscribe();


    const tick$ = new Observable<number>( observer => {
      let counter = 0;
      const interval = setInterval(() => {
        observer.next(++counter);

        if (counter >= 9 ){
          observer.complete();
          clearInterval(interval);
        }
      }, 100);
    });

    tick$.pipe(
      tap(v => console.log(v)),
      finalize(() => console.log('finish'))
    ).subscribe();

  }

  ngOnDestroy(): void {
    this.routeParamsSubscription?.unsubscribe();
  }
}
