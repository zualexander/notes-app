import {Injectable} from '@angular/core';
import {IGitHubUserData} from './../models';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {environment} from './../../environments/environment';

const NOTES_URL: string = environment.API_URL + 'notes';

export interface IDataService {
  loadGithubUserData(username: string): Observable<IGitHubUserData>;
  loadNotes(): Observable<any>;
}

@Injectable()
export class DataService {
  private http: Http;

  constructor(Http: Http) {
    this.http = Http;
  }

  public loadGithubUserData(username: string): Observable<IGitHubUserData> {
    return this.http.get(`https://api.github.com/users/${username}`)
      .map((response: Response) => response.json());
  }

  public loadNotes(): Observable<any> {
    return this.http.get(NOTES_URL)
      .map((response: Response) => response.json());
  }

}
