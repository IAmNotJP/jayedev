import { Component } from '@angular/core';
import { LastfmService } from '../lastfm.service';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-musicstats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './musicstats.component.html',
  styleUrl: './musicstats.component.css'
})

export class MusicstatsComponent {
  data: any[] = [];
  tracks: any;
  nowplaying: any;
  test: any[] = [];
  string: any;
  albumlist: any[] = [];

  constructor(private lastfmService: LastfmService) {
    timer(10000,10000)
    .subscribe(()=>{
      this.onTimer();
    });




    this.lastfmService.getUserInfo().subscribe((data: any)=> {
      this.data =  data;
      this.tracks =  data.recenttracks;
      this.nowplaying = this.tracks.track[0];
      this.string = this.nowplaying.image[2]["#text"];
      console.log(this.tracks);
      for(let i = 1; i <10; i++){
        this.test.push(this.tracks.track[i])
        this.albumlist.push(this.tracks.track[i].image[1]["#text"])
      }
      console.log(this.albumlist)
    });
  }

  onTimer() {
    this.lastfmService.getUserInfo().subscribe((data: any)=> {  
      this.data =  data;
      this.tracks =  data.recenttracks;
      this.nowplaying = this.tracks.track[0];
      this.string = this.nowplaying.image[2]["#text"];
      console.log(this.tracks);
      this.test.length = 0;
      this.albumlist.length = 0;
      for(let i = 1; i <10; i++){
        this.test.push(this.tracks.track[i])
        this.albumlist.push(this.tracks.track[i].image[1]["#text"])
      }
      console.log(this.albumlist)
    });
    

  }

}
