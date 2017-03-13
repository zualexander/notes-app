import {Component} from '@angular/core';
import {DataService, IDataService} from './services/data.service';
import {IGitHubUserData} from './models';

@Component({
  selector: 'app-root',
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: IGitHubUserData;
  private dataService: IDataService;

  constructor(DataService: DataService) {
    this.dataService = DataService;
    // this.dataService.loadGithubUserData('zualexander')
    //   .subscribe((data: IGitHubUserData) => {
    //     this.data = data;
    //   });

    this.dataService.loadNotes()
      .subscribe((data: any) => {
        this.data = data;
      });
  }
}
