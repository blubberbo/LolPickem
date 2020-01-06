import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class LolPickemService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // get an instance of Game Info
  getGameInfo(): Observable<any> {
    return this.http.get<any[]>(
      `${environment.apiRootURI}/${environment.apiGetGameInfoURI}`,
      this.httpOptions
    );
  }
}
