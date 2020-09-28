import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(image => {
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/images.json');
  }

}
