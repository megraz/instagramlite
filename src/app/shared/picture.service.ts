import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picture } from './picture';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PictureService {
  urlAPI:string = 'http://localhost:3000/picture';

  constructor(private http:HttpClient) { }

  addPicture(pic:Picture):Observable<Picture> {
    return this.http.post<Picture>(this.urlAPI, pic);
  }

  getPicsByUser(userId:number):Observable<Picture[]> {
    return this.http.get<Picture[]>(this.urlAPI+'?owner='+userId);
  }
}
