import {Injectable} from '@angular/core';
import {IGitHubUserData} from '../models';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

export interface IDataService {
  loadGithubUserData(username: string): Observable<IGitHubUserData>;
}

@Injectable()
export class DataService {
  private http: Http;

  constructor(Http: Http) {
    this.http = Http;
  }

  loadGithubUserData(username: string): Observable<IGitHubUserData> {
    return this.http.get(`https://api.github.com/users/${username}`)
      .map((response: Response) => response.json());
  }
}
