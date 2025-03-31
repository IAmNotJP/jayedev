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
  data: any[] = [];
  
  constructor(private lastfmService: LastfmService) {
    this.lastfmService.getUserInfo().subscribe((data: any)=> {
      this.data =  data;
      console.log(data);
    });
  }

}
