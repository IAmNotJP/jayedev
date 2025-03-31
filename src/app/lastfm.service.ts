import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LastfmService {

  private apiKey = 'cfa6c8d61f7133655fdc8eb50946e0e8'
  private apiUrl = 'http://ws.audioscrobbler.com/2.0';

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any>{
    const url = `${this.apiUrl}?method=user.getrecenttracks&user=IAmNotJP&limit=10&api_key=${this.apiKey}&format=json`
    return this.http.get(url).pipe(map((response: any) => response.user));
  }
}
