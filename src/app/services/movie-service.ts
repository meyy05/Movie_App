import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movie';
import { map, Observable } from 'rxjs';
import { MovieResponse } from '../interfaces/movie-response';
@Injectable({
    providedIn: 'root'
})

export class MovieService {
    private readonly http=inject(HttpClient);
    private readonly url=environment.api_url;
    private readonly apiKey=environment.api_key;
    getMovieList(): Observable<Movie[]> {
        return this.http.get<MovieResponse>(`${this.url}?api_key=${this.apiKey}`
        ).pipe(map(response => response.results));

    }
}
    