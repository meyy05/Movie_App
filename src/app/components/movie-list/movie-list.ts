import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../interfaces/movie';

@Component({
  imports: [],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList implements OnInit {
  private readonly movieService = inject(MovieService);
  readonly movies = signal<Movie[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal('');

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((response) => {
      this.movies.set(response);
      this.loading.set(false);
    }, (error: unknown) => {
      this.loading.set(false);
      this.errorMessage.set('Could not load movies. Check your connection and API settings.');
      console.error('Failed to load movies:', error);
    });
  }
}
