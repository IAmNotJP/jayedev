import { Component } from '@angular/core';
import { LastfmService } from '../lastfm.service';

@Component({
  selector: 'app-musicstats',
  standalone: true,
  imports: [],
  templateUrl: './musicstats.component.html',
  styleUrl: './musicstats.component.css'
})

export class MusicstatsComponent {

  user: any;
  
  constructor(private lastfmService: LastfmService) {
    this.lastfmService.getUserInfo().subscribe((data)=> {
      this.user =  data;
    });
  }

}
