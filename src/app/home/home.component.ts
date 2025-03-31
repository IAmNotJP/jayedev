import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicstatsComponent } from '../musicstats/musicstats.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MusicstatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  constructor(private route : ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    console.log(params.get('myParam'));
})}}

