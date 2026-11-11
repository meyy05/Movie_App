import { Component, signal } from '@angular/core';
import { HeadBar } from './components/head-bar/head-bar';
import { SearchBar } from './components/search-bar/search-bar';
import { MovieList } from './components/movie-list/movie-list';
@Component({
  imports: [HeadBar, SearchBar, MovieList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Movie-App');
}
