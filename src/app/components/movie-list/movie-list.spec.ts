import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie-service';
import { MovieList } from './movie-list';

describe('MovieList', () => {
  let component: MovieList;
  let fixture: ComponentFixture<MovieList>;
  let movieResponse: Subject<Movie[]>;

  beforeEach(async () => {
    movieResponse = new Subject<Movie[]>();
    await TestBed.configureTestingModule({
      imports: [MovieList],
      providers: [{
        provide: MovieService,
        useValue: { getMovieList: () => movieResponse },
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieList);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders movies when the request completes', async () => {
    fixture.detectChanges();
    movieResponse.next([{
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      id: 1,
      title: 'Test Movie',
      original_language: 'en',
      original_title: 'Test Movie',
      overview: 'A test movie.',
      popularity: 0,
      poster_path: '/test.jpg',
      release_date: '2026-01-01',
      softcore: false,
      video: false,
      vote_average: 0,
      vote_count: 0,
    }]);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('.movie-card h2')?.textContent).toContain('Test Movie');
    expect(fixture.nativeElement.querySelector('p')?.textContent).not.toContain('Loading movies');
  });
});
